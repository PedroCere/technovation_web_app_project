package com.technovison.predictions_service.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.technovison.predictions_service.dto.PredictionJsonResponse;
import com.technovison.predictions_service.dto.PredictionRequestDTO;
import com.technovison.predictions_service.dto.PredictionResponseDTO;
import com.technovison.predictions_service.feign.OpenRouterClient;
import com.technovison.predictions_service.feign.OpenRouterRequest;
import com.technovison.predictions_service.feign.OpenRouterResponse;
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
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Override
    public PredictionResponseDTO predict(PredictionRequestDTO dto, Long userId) {
        String prompt = """
            Dado el siguiente contexto del usuario:
            "%s"

            Y el símbolo bursátil: "%s"

            Generá una predicción financiera breve y confiable.

            IMPORTANTE: Respondé ÚNICAMENTE en formato JSON válido. NO agregues texto adicional.
            {
                "prediction": "texto de la predicción",
                "fiability": "La certeza que tienes de que tu prediccion se cumpla"
            }
            """.formatted(dto.getUserInput(), dto.getSymbol());

        OpenRouterRequest request = new OpenRouterRequest(
                "mistralai/mistral-7b-instruct",
                List.of(new OpenRouterRequest.Message("user", prompt))
        );

        String rawResponse = openRouterClient.getPrediction(request);

        PredictionJsonResponse parsed;
        try {
            OpenRouterResponse response = objectMapper.readValue(rawResponse, OpenRouterResponse.class);
            if (response.getChoices() == null || response.getChoices().isEmpty()) {
                throw new RuntimeException("Respuesta vacía o inválida de la IA: " + rawResponse);
            }
            String content = response.getChoices().get(0).getMessage().getContent();
            parsed = objectMapper.readValue(content, PredictionJsonResponse.class);
        } catch (Exception e) {
            throw new RuntimeException("Error al parsear respuesta de la IA: " + e.getMessage(), e);
        }

        Prediction prediction = new Prediction();
        prediction.setPredictionTitle(dto.getPredictionTitle());
        prediction.setResult(parsed.getPrediction());
        prediction.setFiability(parsed.getFiability());
        prediction.setPredictionDate(LocalDateTime.now());
        prediction.setUserId(userId);

        predictionRepository.save(prediction);

        return new PredictionResponseDTO(parsed.getPrediction(), parsed.getFiability());
    }

    @Override
    public List<Prediction> getPredictionsByUser(Long userId) {
        return predictionRepository.findByUserId(userId);
    }
}
