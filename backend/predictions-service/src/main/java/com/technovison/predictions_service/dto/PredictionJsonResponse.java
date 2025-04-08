package com.technovison.predictions_service.dto;

import lombok.Data;

@Data
public class PredictionJsonResponse {
    private String prediction;
    private double fiability;
}
