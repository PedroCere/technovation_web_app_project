package com.technovison.predictions_service.controller;

import com.technovison.predictions_service.dto.ViewDTO;
import com.technovison.predictions_service.models.View;
import com.technovison.predictions_service.service.ViewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/views")
@RequiredArgsConstructor
public class ViewController {

    private final ViewService viewService;

    @PostMapping("/{predictionId}")
    public ResponseEntity<View> saveView(
            @PathVariable Long predictionId,
            @RequestBody ViewDTO dto
    ) {
        View saved = viewService.saveView(dto, predictionId);
        return ResponseEntity.ok(saved);
    }
}
