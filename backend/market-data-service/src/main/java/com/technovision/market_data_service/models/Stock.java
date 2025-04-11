package com.technovision.market_data_service.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name = "stocks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Stock {

    @Id
    private String symbol;

    private String name;

    private double price;

    @Column(name = "change_value")
    private double change;


    @Column(name = "changes_percentage")
    private double changesPercentage;

}
