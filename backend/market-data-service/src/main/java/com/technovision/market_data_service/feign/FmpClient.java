package com.technovision.market_data_service.feign;

import com.technovision.market_data_service.dto.StockQuoteDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "fmpClient", url = "https://financialmodelingprep.com/api/v3")
public interface FmpClient {

    @GetMapping("/quote/{symbol}?apikey=demo")
    List<StockQuoteDTO> getQuote(@PathVariable("symbol") String symbol);
}
