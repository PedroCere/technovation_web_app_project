package com.technovison.predictions_service.service;

import com.technovison.predictions_service.dto.PredictionRequestDTO;
import com.technovison.predictions_service.dto.PredictionResponseDTO;
import com.technovison.predictions_service.models.Prediction;

import java.util.List;

public interface PredictionService {

    public PredictionResponseDTO predict(PredictionRequestDTO dto, Long userId);

    public List<Prediction> getPredictionsByUser(Long userId);

}
