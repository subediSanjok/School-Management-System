package com.School.Sms.service;

import com.School.Sms.dto.MenuItemRequest;
import com.School.Sms.model.MenuItemEntity;
import com.School.Sms.repository.MenuItemRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuItemService {

    private final MenuItemRepository menuItemRepository;

    public MenuItemService(MenuItemRepository menuItemRepository) {
        this.menuItemRepository = menuItemRepository;
    }

    public List<MenuItemEntity> findAll() {
        return menuItemRepository.findAll();
    }

    public MenuItemEntity create(MenuItemRequest request) {
        return menuItemRepository.save(new MenuItemEntity(
                null,
                request.title(),
                request.sectionPath(),
                request.description(),
                request.status()
        ));
    }

    public MenuItemEntity update(Long id, MenuItemRequest request) {
        return menuItemRepository.save(new MenuItemEntity(
                id,
                request.title(),
                request.sectionPath(),
                request.description(),
                request.status()
        ));
    }

    public void delete(Long id) {
        menuItemRepository.deleteById(id);
    }
}
