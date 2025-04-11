package com.technovison.predictions_service.repository;

import com.technovison.predictions_service.models.Prediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PredictionRepository  extends JpaRepository<Prediction,Long> {

    List<Prediction> findByUserId(Long userId);
}
