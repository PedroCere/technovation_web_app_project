package com.technovison.predictions_service.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class InputValue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "value_name")
    private String valueName;
    private String Input;

    @Column(name = "input_date")
    private LocalDateTime inputDate;

    @Column(name = "user_id")
    private Long userId;


}
