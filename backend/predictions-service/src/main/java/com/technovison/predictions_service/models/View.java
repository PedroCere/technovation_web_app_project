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
public class View {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private LocalDateTime date;

    @Column(name = "json_config")
    private String jsonConfig;

    @ManyToOne
    @JoinColumn(name = "prediction_id")
    private Prediction prediction;

}
