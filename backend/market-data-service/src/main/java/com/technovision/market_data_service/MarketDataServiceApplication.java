package com.technovision.market_data_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients(basePackages = "com.technovision.market_data_service.feign")
public class MarketDataServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarketDataServiceApplication.class, args);
	}

}
