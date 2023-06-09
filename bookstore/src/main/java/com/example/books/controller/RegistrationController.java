package com.example.books.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.books.model.Registration;
import com.example.books.service.RegistrationService;



@RestController
@CrossOrigin("http://localhost:3000")
public class RegistrationController {

	@Autowired
	RegistrationService regService;
	
	
	//http://localhost:8080/addname
	@PostMapping("/addname")
	public Registration saveDetails(@RequestBody Registration u)
	{
	return regService.saveDetails(u);
	}
}
