package com.technovision.auth_service.dtos;

public class AuthResponse {
    public String token;

    public AuthResponse(String token) {
        this.token = token;
    }
}
