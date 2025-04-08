package com.technovison.predictions_service.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.technovison.predictions_service.dto.PredictionJsonResponse;
import com.technovison.predictions_service.dto.PredictionRequestDTO;
import com.technovison.predictions_service.dto.PredictionResponseDTO;
import com.technovison.predictions_service.feign.HuggingFaceClient;
import com.technovison.predictions_service.feign.HuggingFaceRequest;
import com.technovison.predictions_service.models.Prediction;
import com.technovison.predictions_service.repository.PredictionRepository;
import com.technovison.predictions_service.service.PredictionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PredictionServiceImpl implements PredictionService {

    private final PredictionRepository predictionRepository;
    private final HuggingFaceClient huggingFaceClient;



    @Override
    public PredictionResponseDTO predict(PredictionRequestDTO dto, Long userId) {

        String prompt = """
                Dado el siguiente contexto del usuario:
                  "%s"

                Y el símbolo bursátil: "%s"

                Generá una predicción financiera breve y confiable.

                Respondé únicamente en formato JSON, con los siguientes campos:
                - prediction: (la predicción textual)
                - fiability: (un número entre 0.0 y 1.0 que indique cuán confiable es esta predicción)
                """.formatted(dto.getUserInput(), dto.getSymbol());


        HuggingFaceRequest request = new HuggingFaceRequest(prompt);
        String rawResponse = huggingFaceClient.getPrediction(request);

        PredictionJsonResponse parsed;

        try {
            ObjectMapper mapper = new ObjectMapper();
            parsed = mapper.readValue(rawResponse, PredictionJsonResponse[].class)[0]; // porque HuggingFace responde con array
        } catch (Exception e) {
            throw new RuntimeException("Error al parsear respuesta de la IA", e);
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
