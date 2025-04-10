package com.technovision.market_data_service.feign;

import com.technovision.market_data_service.dto.HistoricalPriceResponse;
import com.technovision.market_data_service.dto.StockQuoteDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@FeignClient(name = "fmpClient", url = "https://financialmodelingprep.com/api/v3")
public interface FmpClient {

    @GetMapping("/quote/{symbol}?apikey=${fmp.api.key}")
    List<StockQuoteDTO> getQuote(@PathVariable("symbol") String symbol);

    @GetMapping("/historical-price-full/{symbol}?serietype=line&apikey=${fmp.api.key}")
    HistoricalPriceResponse getHistoricalData(@PathVariable("symbol") String symbol);

}
