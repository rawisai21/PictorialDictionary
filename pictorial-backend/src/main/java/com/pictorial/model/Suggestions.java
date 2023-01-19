package com.pictorial.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="suggestions")
public class Suggestions {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	@Column(nullable = false,unique = true)
	String imageSuggestion;
	public Suggestions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Suggestions(long id, String imageSuggestion) {
		super();
		this.id = id;
		this.imageSuggestion = imageSuggestion;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getImageSuggestion() {
		return imageSuggestion;
	}
	public void setImageSuggestion(String imageSuggestion) {
		this.imageSuggestion = imageSuggestion;
	}
	@Override
	public String toString() {
		return "Suggestions [id=" + id + ", imageSuggestion=" + imageSuggestion + "]";
	}
	
	
	
}
