package com.pictorial.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pictorial.model.User;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	
	
	User findByemailId(String name);
}
