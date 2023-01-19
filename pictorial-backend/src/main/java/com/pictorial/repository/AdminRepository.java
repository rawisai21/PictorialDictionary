package com.pictorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pictorial.model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, String>{


	Admin findByemailId(String emailId);



}
