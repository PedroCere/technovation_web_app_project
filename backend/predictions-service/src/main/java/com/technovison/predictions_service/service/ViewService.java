package com.technovison.predictions_service.service;

import com.technovison.predictions_service.dto.ViewDTO;
import com.technovison.predictions_service.models.View;

public interface ViewService {
    public View saveView(ViewDTO dto, Long predictionId);
}
