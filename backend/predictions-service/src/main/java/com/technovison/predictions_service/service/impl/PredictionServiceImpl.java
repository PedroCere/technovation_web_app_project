package com.technovison.predictions_service.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.technovison.predictions_service.dto.CompanyQuoteDTO;
import com.technovison.predictions_service.dto.PredictionJsonResponse;
import com.technovison.predictions_service.dto.PredictionRequestDTO;
import com.technovison.predictions_service.dto.PredictionResponseDTO;
import com.technovison.predictions_service.feign.OpenRouterClient;
import com.technovison.predictions_service.feign.OpenRouterRequest;
import com.technovison.predictions_service.feign.OpenRouterResponse;
import com.technovison.predictions_service.feign.config.MarketDataClient;
import com.technovison.predictions_service.models.Prediction;
import com.technovison.predictions_service.repository.PredictionRepository;
import com.technovison.predictions_service.service.PredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PredictionServiceImpl implements PredictionService {

    private final PredictionRepository predictionRepository;
    private final OpenRouterClient openRouterClient;
    private final MarketDataClient marketDataClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public PredictionResponseDTO predict(PredictionRequestDTO dto, Long userId) {
        CompanyQuoteDTO quote = marketDataClient.getQuote(dto.getSymbol());

        String prompt = """
            Given the following user context:
            "%s"
        
            And the stock market information of the company:
        
            Name: %s
            Symbol: %s
            Current price: %.2f
            Daily change: %.2f (%.2f%%)
            Day low: %.2f
            Day high: %.2f
            52-week high: %.2f
            52-week low: %.2f
            Market cap: %d
            Current volume: %d
            Average volume: %d
            Exchange: %s
            Opening price: %.2f
            Previous close: %.2f
            EPS (Earnings Per Share): %.2f
            P/E Ratio: %.2f
            Upcoming earnings date: %s
            Shares outstanding: %d
        
            Generate a brief and reliable financial prediction.
        
            IMPORTANT: Respond ONLY in valid JSON format. DO NOT add any additional text.
            {
                "prediction": "your prediction text here",
                "fiability": "your confidence level between 0 and 1"
            }
        
            IMPORTANT: Use a period (.) as decimal separator. DO NOT use a comma (,).
            """.formatted(
                dto.getUserInput(),
                quote.getName(),
                quote.getSymbol(),
                quote.getPrice(),
                quote.getChange(),
                quote.getChangesPercentage(),
                quote.getDayLow(),
                quote.getDayHigh(),
                quote.getYearHigh(),
                quote.getYearLow(),
                quote.getMarketCap(),
                quote.getVolume(),
                quote.getAvgVolume(),
                quote.getExchange(),
                quote.getOpen(),
                quote.getPreviousClose(),
                quote.getEps(),
                quote.getPe(),
                quote.getEarningsAnnouncement(),
                quote.getSharesOutstanding());


        OpenRouterRequest request = new OpenRouterRequest(
                "mistralai/mistral-7b-instruct",
                List.of(new OpenRouterRequest.Message("user", prompt))
        );

        String rawResponse = openRouterClient.getPrediction(request);

        PredictionJsonResponse parsed;
        double parsedFiability; // Aseguramos el double para después

        try {
            OpenRouterResponse response = objectMapper.readValue(rawResponse, OpenRouterResponse.class);
            if (response.getChoices() == null || response.getChoices().isEmpty()) {
                throw new RuntimeException("Respuesta vacía o inválida de la IA: " + rawResponse);
            }
            String content = response.getChoices().get(0).getMessage().getContent();
            parsed = objectMapper.readValue(content, PredictionJsonResponse.class);

            // Acá domás la coma latina y convertís el fiability a double
            parsedFiability = Double.parseDouble(parsed.getFiability().replace(",", "."));

        } catch (Exception e) {
            throw new RuntimeException("Error al parsear respuesta de la IA: " + e.getMessage(), e);
        }

        Prediction prediction = new Prediction();
        prediction.setPredictionTitle(dto.getPredictionTitle());
        prediction.setResult(parsed.getPrediction());
        prediction.setFiability(parsedFiability); // Usás el valor ya parseado
        prediction.setPredictionDate(LocalDateTime.now());
        prediction.setUserId(userId);

        predictionRepository.save(prediction);

        return new PredictionResponseDTO(parsed.getPrediction(), parsedFiability);
    }

    @Override
    public List<Prediction> getPredictionsByUser(Long userId) {
        return predictionRepository.findByUserId(userId);
    }
}
