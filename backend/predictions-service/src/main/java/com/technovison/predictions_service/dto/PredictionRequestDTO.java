package com.technovison.predictions_service.dto;

import lombok.Data;

@Data
public class PredictionRequestDTO {

    private String predictionTitle;
    private String userInput;
    private String symbol;

}
