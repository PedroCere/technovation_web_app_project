package com.technovision.market_data_service.service.impl;

import com.technovision.market_data_service.dto.HistoricalPriceResponse;
import com.technovision.market_data_service.dto.StockQuoteDTO;
import com.technovision.market_data_service.feign.FmpClient;
import com.technovision.market_data_service.service.IMarketDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarketDataService implements IMarketDataService {


    private final FmpClient fmpClient;
    @Autowired
    public MarketDataService(FmpClient fmpClient) {
        this.fmpClient = fmpClient;
    }

    @Override
    public StockQuoteDTO getQuote(String symbol) {
        List<StockQuoteDTO> result = fmpClient.getQuote(symbol);
        if (result.isEmpty()) {
            throw new RuntimeException("No se encontró información para el símbolo: " + symbol);
        }
        return result.get(0); // FMP siempre devuelve lista, incluso con uno solo
    }

    @Override
    public HistoricalPriceResponse getHistoricalData(String symbol) {
        return fmpClient.getHistoricalData(symbol);
    }


}
