package com.technovison.predictions_service.feign.config;

import com.technovison.predictions_service.dto.CompanyQuoteDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "market-data-service", path = "/api/market")
public interface MarketDataClient {

    @GetMapping("/quote/{symbol}")
    CompanyQuoteDTO getQuote(@PathVariable("symbol") String symbol);

}
