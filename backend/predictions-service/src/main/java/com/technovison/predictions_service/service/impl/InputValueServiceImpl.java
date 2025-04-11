package com.technovison.predictions_service.service.impl;

import com.technovison.predictions_service.dto.InputValueDTO;
import com.technovison.predictions_service.models.InputValue;
import com.technovison.predictions_service.repository.InputValueRepository;
import com.technovison.predictions_service.service.InputValueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class InputValueServiceImpl  implements InputValueService {

    @Autowired
    private InputValueRepository inputValueRepository;

    @Override
    public InputValue saveInput(InputValueDTO dto, Long userid) {
        InputValue input = new InputValue();
        input.setValueName(dto.getValueName());
        input.setInput(dto.getInput());
        input.setInputDate(LocalDateTime.now());
        input.setUserId(userid);

        return inputValueRepository.save(input);
    }
}
