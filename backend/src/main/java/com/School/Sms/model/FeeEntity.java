package com.School.Sms.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "fee_records")
public class FeeEntity {

    @Id
    @Column(length = 60)
    private String feeType;

    @Column(nullable = false)
    private String amount;

    @Column(nullable = false)
    private String status;

    public FeeEntity() {
    }

    public FeeEntity(String feeType, String amount, String status) {
        this.feeType = feeType;
        this.amount = amount;
        this.status = status;
    }

    public String getFeeType() { return feeType; }
    public void setFeeType(String feeType) { this.feeType = feeType; }
    public String getAmount() { return amount; }
    public void setAmount(String amount) { this.amount = amount; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

