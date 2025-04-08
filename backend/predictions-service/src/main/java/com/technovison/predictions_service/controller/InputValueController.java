package com.technovison.predictions_service.controller;

import com.technovison.predictions_service.dto.InputValueDTO;
import com.technovison.predictions_service.models.InputValue;
import com.technovison.predictions_service.service.InputValueService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/inputs")
public class InputValueController {

    @Autowired
    private InputValueService inputService;

    @PostMapping
    public ResponseEntity<?> saveInput(@RequestBody InputValueDTO dto, HttpServletRequest request) {
        String userIdStr = (String) request.getAttribute("userId");
        Long userId = Long.parseLong(userIdStr);
        InputValue input = inputService.saveInput(dto, userId);
        return ResponseEntity.ok(input);
    }


}
