package com.technovison.predictions_service.dto;


import lombok.Data;

@Data
public class CompanyQuoteDTO {
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
