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
public class Prediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "prediction_title")
    private String predictionTitle;
    private String result;
    private double fiability;

    @Column(name = "prediction_date")
    private LocalDateTime predictionDate;

    @Column(name = "user_id")
    private Long userId;


}
