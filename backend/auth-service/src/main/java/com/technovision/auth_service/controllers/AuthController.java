package com.technovision.auth_service.controllers;

import com.technovision.auth_service.dtos.AuthResponse;
import com.technovision.auth_service.dtos.LoginRequest;
import com.technovision.auth_service.dtos.RegisterRequest;
import org.springframework.web.bind.annotation.*;
import com.technovision.auth_service.services.AuthService;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public AuthResponse register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        return authService.login(request);
    }
}