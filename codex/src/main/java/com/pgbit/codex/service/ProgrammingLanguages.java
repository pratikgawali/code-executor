package com.pgbit.codex.service;

public enum ProgrammingLanguages {
	
	JAVA(1), PYTHON(2);

	private Integer languageCode;
	
	private ProgrammingLanguages(Integer code) {
		this.languageCode = code;
	}
	
	public Integer getLanguageCode() {
		return languageCode;
	}
}
