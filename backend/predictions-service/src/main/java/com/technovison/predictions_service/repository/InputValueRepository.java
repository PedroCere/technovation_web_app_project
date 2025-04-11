package com.technovison.predictions_service.repository;

import com.technovison.predictions_service.models.InputValue;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface InputValueRepository extends JpaRepository<InputValue,Long> {
    List<InputValueRepository> getByUserId(Long userId);
}
