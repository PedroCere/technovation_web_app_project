package com.technovison.predictions_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class PredictionResponseDTO {
    private String prediction;
    private double fiability;
}
