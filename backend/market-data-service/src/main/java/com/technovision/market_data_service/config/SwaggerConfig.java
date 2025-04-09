package com.technovision.market_data_service.config;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI marketDataOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Market Data API")
                        .description("Servicio para obtener cotizaciones de acciones en tiempo real.")
                        .version("1.0")
                        .license(new License()
                                .name("Licencia Libre")
                                .url("https://github.com/tu-proyecto"))
                )
                .externalDocs(new ExternalDocumentation()
                        .description("Documentación de Financial Modeling Prep")
                        .url("https://site.financialmodelingprep.com/developer/docs/"));
    }

}
