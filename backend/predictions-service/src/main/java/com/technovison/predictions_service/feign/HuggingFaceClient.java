package com.technovison.predictions_service.feign;

import com.technovison.predictions_service.feign.config.HuggingFaceClientConfig;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "huggingface", url = "https://api-inference.huggingface.co", configuration = HuggingFaceClientConfig.class)
public interface HuggingFaceClient {
    @PostMapping("/models/google/flan-t5-small")
    String getPrediction(@RequestBody HuggingFaceRequest request);
}
