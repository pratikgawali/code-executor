package com.pgbit.codex.service;

import org.springframework.stereotype.Service;

@Service
public class ExecutionServiceFactory {

	public IExecutionService create(Integer languageCode) {
		
		if(ProgrammingLanguages.JAVA.getLanguageCode().equals(languageCode)) {
			return new JavaExecutionServiceImpl();
		}
		else if(ProgrammingLanguages.PYTHON.getLanguageCode().equals(languageCode)) {
			return new PythonExecutionServiceImpl();
		}
		
		// TODO: custom exception handling
		return null;
	}
}
