package com.technovison.predictions_service.controller;

import com.technovison.predictions_service.dto.PredictionRequestDTO;
import com.technovison.predictions_service.dto.PredictionResponseDTO;
import com.technovison.predictions_service.models.Prediction;
import com.technovison.predictions_service.service.PredictionService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
@RequiredArgsConstructor
public class PredictionController {

    private final PredictionService predictionService;

    @PostMapping("/prediction")
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
        if (userIdStr == null) {
            // ⚠️ Modo sin autenticación
            userIdStr = "1"; // valor de prueba
        }
        Long userId = Long.parseLong(userIdStr);
        List<Prediction> history = predictionService.getPredictionsByUser(userId);
        return ResponseEntity.ok(history);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deletePredictionWithViews(@PathVariable Long id) {
        try {
            predictionService.deletePredictionWithViews(id);
            return ResponseEntity.ok("Prediction and its views were successfully deleted.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting prediction: " + e.getMessage());
        }
    }



}
