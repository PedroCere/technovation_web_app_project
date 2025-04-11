package com.technovision.market_data_service.repositories;

import com.technovision.market_data_service.models.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StockRepository extends JpaRepository<Stock, String> {
}
