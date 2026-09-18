package com.School.Sms.config;

import com.School.Sms.model.GenericApiEntity;
import com.School.Sms.repository.GenericApiRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class GenericApiSeeder {

    @Bean
    CommandLineRunner seedGenericApiData(GenericApiRepository genericApiRepository) {
        return args -> {
            if (genericApiRepository.count() == 0) {
                genericApiRepository.saveAll(List.of(
                        new GenericApiEntity("chat", "CH-101",
                                "{\"id\":\"CH-101\",\"title\":\"General Chat\",\"members\":12,\"lastMessage\":\"Welcome to the school chat!\",\"status\":\"Active\"}"),
                        new GenericApiEntity("calendar", "EV-101",
                                "{\"id\":\"EV-101\",\"title\":\"Parent-Teacher Meeting\",\"date\":\"2026-06-20\",\"time\":\"10:00 AM\",\"location\":\"Auditorium\",\"status\":\"Scheduled\"}"),
                        new GenericApiEntity("email", "EM-101",
                                "{\"id\":\"EM-101\",\"from\":\"admin@school.org\",\"subject\":\"Summer Term Opening\",\"date\":\"2026-06-14\",\"status\":\"Unread\"}"),
                        new GenericApiEntity("todo", "TD-101",
                                "{\"id\":\"TD-101\",\"title\":\"Publish report cards\",\"dueDate\":\"2026-06-18\",\"priority\":\"High\",\"status\":\"Pending\"}"),
                        new GenericApiEntity("notes", "NT-101",
                                "{\"id\":\"NT-101\",\"title\":\"Staff meeting notes\",\"lastModified\":\"2026-06-12\",\"status\":\"Draft\"}"),
                        new GenericApiEntity("files", "FL-101",
                                "{\"id\":\"FL-101\",\"name\":\"school-policy.pdf\",\"size\":\"1.2 MB\",\"type\":\"PDF\",\"modified\":\"2026-06-10\",\"status\":\"Active\"}"),
                        new GenericApiEntity("menu-items", "MI-101",
                                "{\"id\":\"MI-101\",\"title\":\"Classroom Booking\",\"sectionPath\":\"Application / Events\",\"description\":\"Create and manage classroom bookings\",\"status\":\"Active\"}"),
                        new GenericApiEntity("noticeboard", "NB-101",
                                "{\"id\":\"NB-101\",\"title\":\"Winter Break Schedule\",\"date\":\"2026-12-01\",\"author\":\"Admin\",\"status\":\"Published\"}"),
                        new GenericApiEntity("dashboard", "DB-101",
                                "{\"id\":\"DB-101\",\"title\":\"Teacher Dashboard\",\"status\":\"Active\"}")));
            }
        };
    }
}
