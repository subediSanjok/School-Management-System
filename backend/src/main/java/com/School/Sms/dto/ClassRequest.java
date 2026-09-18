package com.School.Sms.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record ClassRequest(
        @NotBlank String code,
        @NotBlank String name,
        @Min(0) int sectionCount,
        @Min(0) int studentCount,
        @NotBlank String status
) {}

