package com.pgbit.codex.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pgbit.codex.service.ExecutionServiceFactory;
import com.pgbit.codex.service.IExecutionService;

@RestController
public class Controller {
	
	@Autowired
	private ExecutionServiceFactory executionServiceFactory;

	@GetMapping("/")
	public String index() {
		return "Welcome to Codex!!";
	}
	
	@PostMapping("/compile/{{language}}")
	public String executeCode(String code, @RequestParam Integer languageCode) {
		
		IExecutionService executionService = executionServiceFactory.create(languageCode);
		return executionService.execute(code);
	}
	
}
