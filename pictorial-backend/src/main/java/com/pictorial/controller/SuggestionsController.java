package com.pictorial.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pictorial.model.Image;
import com.pictorial.model.Suggestions;
import com.pictorial.repository.SuggestionsRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/image-suggestions/")
public class SuggestionsController {
	@Autowired
	private SuggestionsRepository suggestionsRepository;
	
	@GetMapping("/")
	public List<Suggestions> getAllImageSuggestions(){
		return suggestionsRepository.findAll();
	}
	
	@PostMapping("/")
	public Suggestions saveSuggestions(@RequestBody Suggestions suggestions ){
		return suggestionsRepository.save(suggestions);
	}
}
