package com.School.Sms.controller;

import com.School.Sms.dto.MenuItemRequest;
import com.School.Sms.model.MenuItemEntity;
import com.School.Sms.service.MenuItemService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/menu-items")
public class MenuItemController {

    private final MenuItemService menuItemService;

    public MenuItemController(MenuItemService menuItemService) {
        this.menuItemService = menuItemService;
    }

    @GetMapping
    public List<MenuItemEntity> findAll() {
        return menuItemService.findAll();
    }

    @PostMapping
    public MenuItemEntity create(@Valid @RequestBody MenuItemRequest request) {
        return menuItemService.create(request);
    }

    @PutMapping("/{id}")
    public MenuItemEntity update(@PathVariable Long id, @Valid @RequestBody MenuItemRequest request) {
        return menuItemService.update(id, request);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        menuItemService.delete(id);
    }
}
