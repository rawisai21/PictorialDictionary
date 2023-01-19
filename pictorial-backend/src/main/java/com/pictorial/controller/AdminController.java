package com.pictorial.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pictorial.model.Admin;
import com.pictorial.repository.AdminRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/admin-login/")
@Controller
public class AdminController {	
	@Autowired
	public AdminRepository adminRepository;
	

	
	@PostMapping("/")
	public ResponseEntity<?> checkAdmin(@RequestBody Admin adminData){
		Admin admin=adminRepository.findByemailId(adminData.getEmailId());
		if(admin.getPassword().equals(adminData.getPassword())) {
			return ResponseEntity.ok(admin);
		}
		return null;
		
	}
}
