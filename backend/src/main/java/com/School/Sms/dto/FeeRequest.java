package com.School.Sms.dto;

import jakarta.validation.constraints.NotBlank;

public record FeeRequest(
        @NotBlank String feeType,
        @NotBlank String amount,
        @NotBlank String status
) {}

