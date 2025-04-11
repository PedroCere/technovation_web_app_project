package com.technovision.market_data_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class HistoricalPrice {
    private String date;  // yyyy-MM-dd
    private double close;
}
