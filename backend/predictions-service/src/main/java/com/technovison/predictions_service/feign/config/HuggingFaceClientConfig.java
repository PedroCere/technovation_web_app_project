package com.technovison.predictions_service.feign.config;

import feign.RequestInterceptor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class HuggingFaceClientConfig {


    @Value("${huggingface.api.key}")
    private String apiKey;

    @Bean
    public RequestInterceptor requestInterceptor(){
        return template -> {
            template.header("Authorization", "Bearer " + apiKey);
            template.header("Content-Type", "application/json");
            template.header("Accept", "application/json");

        };
    }

}
