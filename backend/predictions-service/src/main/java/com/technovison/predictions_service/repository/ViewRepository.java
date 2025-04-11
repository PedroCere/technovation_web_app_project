package com.technovison.predictions_service.repository;

import com.technovison.predictions_service.models.View;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ViewRepository extends JpaRepository<View,Long> {
    List<View> findByPredictionId(Long predictionId);

}
