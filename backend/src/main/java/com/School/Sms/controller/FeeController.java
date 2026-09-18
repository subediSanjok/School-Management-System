package com.School.Sms.controller;

import com.School.Sms.dto.FeeRequest;
import com.School.Sms.model.FeeEntity;
import com.School.Sms.service.FeeService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/fees")
public class FeeController {

    private final FeeService feeService;

    public FeeController(FeeService feeService) {
        this.feeService = feeService;
    }

    @GetMapping
    public List<FeeEntity> findAll() {
        return feeService.findAll();
    }

    @PostMapping
    public FeeEntity create(@Valid @RequestBody FeeRequest request) {
        return feeService.create(request);
    }

    @PutMapping("/{feeType}")
    public FeeEntity update(@PathVariable String feeType, @Valid @RequestBody FeeRequest request) {
        return feeService.update(feeType, request);
    }

    @DeleteMapping("/{feeType}")
    public void delete(@PathVariable String feeType) {
        feeService.delete(feeType);
    }
}
