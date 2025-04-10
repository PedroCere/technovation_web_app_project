package com.technovision.market_data_service.service;

import com.technovision.market_data_service.dto.HistoricalPriceResponse;
import com.technovision.market_data_service.dto.StockQuoteDTO;

public interface IMarketDataService {

    public StockQuoteDTO getQuote(String symbol);

    public HistoricalPriceResponse getHistoricalData(String symbol);

}
