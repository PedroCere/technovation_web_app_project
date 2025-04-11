package com.technovision.market_data_service.config;

import feign.RequestInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FmpConfig {

    @Bean
    public RequestInterceptor requestInterceptor() {
        return template -> {
            template.header("Accept", "application/json");
        };
    }
}
