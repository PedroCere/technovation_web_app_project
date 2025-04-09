package com.technovison.predictions_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "com.technovison.predictions_service.feign")
public class PredictionsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(PredictionsServiceApplication.class, args);
	}

}
