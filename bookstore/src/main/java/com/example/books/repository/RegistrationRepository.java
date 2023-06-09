package com.example.books.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.books.model.Registration;



@Repository
public interface RegistrationRepository extends JpaRepository<Registration,Integer>{

	//Registration name(Registration u);
	
}

