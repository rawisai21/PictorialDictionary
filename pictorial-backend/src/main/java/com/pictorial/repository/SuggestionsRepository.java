package com.pictorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pictorial.model.Suggestions;

public interface SuggestionsRepository extends JpaRepository<Suggestions,Long >{
	public Suggestions findByimageSuggestion(String suggestion);
}
