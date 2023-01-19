package com.pictorial.controller;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.zip.DataFormatException;
import java.util.zip.Deflater;
import java.util.zip.Inflater;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.pictorial.repository.ImageRepository;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pictorial.exception.ResourceNotFoundException;
import com.pictorial.exception.Response;
import com.pictorial.model.Image;
import com.pictorial.exception.ResourceNotFoundException;

@JsonIgnoreProperties
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/image/")
public class ImageController {

	@Autowired
	ImageRepository imageRepository;
	
	@PostMapping("/upload")
	public ResponseEntity<Response> saveImage(@RequestParam("file") MultipartFile file,@RequestParam("user") String user) throws IOException,JsonParseException{
		Image image = new ObjectMapper().readValue(user, Image.class);
		image.setPicByte(file.getBytes());
		Image savedImage=imageRepository.save(image);
		if(savedImage!=null) {
			return new ResponseEntity<Response>(new Response("Image is saved successfully"),HttpStatus.OK);
		}
		return new ResponseEntity<Response>(new Response("Image is not saved"),HttpStatus.BAD_REQUEST);
	}
	
	@GetMapping("/dictionary/{fileName}")
	public ResponseEntity<Image> getImage(@PathVariable String fileName){
		Image image=imageRepository.findByfileName(fileName);
			if(image!=null) {
			return ResponseEntity.ok(image);
			}else {
				return (ResponseEntity<Image>) ResponseEntity.notFound();
			}
	}
	
	@GetMapping("/dictionary")
	public List<Image> getAllImages(){
		return imageRepository.findAll();
	}
	
}