package com.pictorial.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pictorial.exception.ResourceNotFoundException;
import com.pictorial.model.User;
import com.pictorial.repository.UserRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user-login/")
public class UserController {
	@Autowired
	public UserRepository userRepository;



	// get all employees
	@GetMapping("/users")
	public List<User> getAllEmployees(){
		return userRepository.findAll();
	}		


	@PostMapping("/") public ResponseEntity<?> checkUser(@RequestBody User userData){
		User user=userRepository.findByemailId(userData.getEmailId());
			if(user.getPassword().equals(userData.getPassword())) { 
				
				return ResponseEntity.ok(user); 
			} return null;

	}
	


	// create employee rest api
	@PostMapping("/users")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	// get employee by id rest api
	@GetMapping("/users/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Long id) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
		return ResponseEntity.ok(user);
	}

	// update employee rest api

	@PutMapping("/users/{id}")
	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		user.setFirstName(userDetails.getFirstName());
		user.setLastName(userDetails.getLastName());
		user.setEmailId(userDetails.getEmailId());

		User updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);
	}

	// delete employee rest api
	@DeleteMapping("/users/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

		userRepository.delete(user);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}




}
