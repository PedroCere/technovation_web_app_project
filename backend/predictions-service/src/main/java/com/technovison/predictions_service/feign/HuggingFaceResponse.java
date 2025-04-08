package com.technovison.predictions_service.feign;

import lombok.Data;

@Data
public class HuggingFaceResponse {
    private  String generated_text;
}
