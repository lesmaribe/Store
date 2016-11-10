package com.oc.store.dto;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class StoreDTO {

	private int id;
	private String code;
	private String name;
	
	public StoreDTO(){
	}
	public StoreDTO(int id, String code, String name){
		this.id = id;
		this.code = code;
		this.name = name;
	}
	public StoreDTO(String code, String name){
		this.code = code;
		this.name = name;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}
