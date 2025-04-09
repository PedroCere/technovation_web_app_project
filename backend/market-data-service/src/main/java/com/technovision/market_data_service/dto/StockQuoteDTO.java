package com.technovision.market_data_service.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StockQuoteDTO {
    private String symbol;
    private String name;
    private double price;
    private double change;
    private double changesPercentage;
    private double dayLow;
    private double dayHigh;
    private double yearHigh;
    private double yearLow;
    private long marketCap;
    private long volume;
    private long avgVolume;
    private String exchange;
    private double open;
    private double previousClose;
    private double eps;
    private double pe;
    private String earningsAnnouncement;
    private long sharesOutstanding;
    private long timestamp;
}
