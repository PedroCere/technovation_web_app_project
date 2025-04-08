package com.technovison.predictions_service.service;

import com.technovison.predictions_service.dto.InputValueDTO;
import com.technovison.predictions_service.models.InputValue;

public interface InputValueService {

    public InputValue saveInput(InputValueDTO dto,Long userID);
}
