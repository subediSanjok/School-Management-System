package com.School.Sms.controller;

import com.School.Sms.dto.ParentRequest;
import com.School.Sms.model.ParentEntity;
import com.School.Sms.service.ParentService;
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
@RequestMapping("/api/parents")
public class ParentController {

    private final ParentService parentService;

    public ParentController(ParentService parentService) {
        this.parentService = parentService;
    }

    @GetMapping
    public List<ParentEntity> findAll() {
        return parentService.findAll();
    }

    @PostMapping
    public ParentEntity create(@Valid @RequestBody ParentRequest request) {
        return parentService.create(request);
    }

    @PutMapping("/{id}")
    public ParentEntity update(@PathVariable String id, @Valid @RequestBody ParentRequest request) {
        return parentService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        parentService.delete(id);
    }
}
