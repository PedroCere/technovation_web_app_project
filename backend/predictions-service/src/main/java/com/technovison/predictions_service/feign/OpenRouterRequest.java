package com.technovison.predictions_service.feign;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OpenRouterRequest {
    private String model = "mistralai/mistral-7b-instruct";
    private List<Message> messages;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Message {
        private String role; // "user", "system", etc.
        private String content;
    }
}
