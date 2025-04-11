package com.technovision.gateway_service.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("API Gateway")
                        .description("Documentación de todos los servicios")
                        .version("v1.0"));
    }

    @Bean
    public GroupedOpenApi predictionsApi() {
        return GroupedOpenApi.builder()
                .group("predictions")
                .pathsToMatch("/api/predictions/**")
                .build();
    }

    @Bean
    public GroupedOpenApi marketDataApi() {
        return GroupedOpenApi.builder()
                .group("market-data")
                .pathsToMatch("/api/market/**")
                .build();
    }

}
