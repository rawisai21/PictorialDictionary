package com.pictorial.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pictorial.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
	Image findByfileName(String name);
}
