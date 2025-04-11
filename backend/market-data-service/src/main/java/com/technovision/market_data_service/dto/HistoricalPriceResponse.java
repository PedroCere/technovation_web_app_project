package com.technovision.market_data_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoricalPriceResponse {

    private String symbol;
    private List<HistoricalPrice> historical;
}
