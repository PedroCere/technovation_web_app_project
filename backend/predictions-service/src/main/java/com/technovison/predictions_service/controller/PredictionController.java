package com.technovison.predictions_service.controller;

import com.technovison.predictions_service.dto.PredictionRequestDTO;
import com.technovison.predictions_service.dto.PredictionResponseDTO;
import com.technovison.predictions_service.models.Prediction;
import com.technovison.predictions_service.service.PredictionService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
@RequiredArgsConstructor
public class PredictionController {

    private final PredictionService predictionService;

    @PostMapping
    public ResponseEntity<PredictionResponseDTO> predict(
            @RequestBody PredictionRequestDTO dto,
            HttpServletRequest request
    ) {
        String userIdStr = (String) request.getAttribute("userId");
        if (userIdStr == null) {
            // Modo test sin seguridad
            userIdStr = "1";
        }
        Long userId = Long.parseLong(userIdStr);
        PredictionResponseDTO response = predictionService.predict(dto, userId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/history")
    public ResponseEntity<List<Prediction>> getUserHistory(HttpServletRequest request) {
        String userIdStr = (String) request.getAttribute("userId");
        Long userId = Long.parseLong(userIdStr);
        List<Prediction> history = predictionService.getPredictionsByUser(userId);
        return ResponseEntity.ok(history);
    }

}
