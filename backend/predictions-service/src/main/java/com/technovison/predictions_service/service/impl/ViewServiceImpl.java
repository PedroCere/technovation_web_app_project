package com.technovison.predictions_service.service.impl;

import com.technovison.predictions_service.dto.ViewDTO;
import com.technovison.predictions_service.models.Prediction;
import com.technovison.predictions_service.models.View;
import com.technovison.predictions_service.repository.PredictionRepository;
import com.technovison.predictions_service.repository.ViewRepository;
import com.technovison.predictions_service.service.ViewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ViewServiceImpl implements ViewService {


    @Autowired
    private ViewRepository repository;

    @Autowired
    private PredictionRepository predictionRepository;

    public View saveView(ViewDTO dto, Long predictionId) {
        Prediction prediction = predictionRepository.findById(predictionId)
                .orElseThrow(() -> new RuntimeException("Prediction not found"));

        View view = new View();
        view.setType(dto.getType());
        view.setJsonConfig(dto.getJsonConfig());
        view.setDate(LocalDateTime.now());
        view.setPrediction(prediction);

        return repository.save(view);
    }

}
