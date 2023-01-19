package com.pictorial.model;

import java.util.Arrays;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "image")
public class Image {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	
	@Column(nullable = false,unique = true)
	String fileName;
	
	@Column(nullable = false)
	String description;
	
	@Column(nullable = false)
	String addInfo;
	
	@Column(nullable = false,length = 1000000000)
	byte[] picByte;

	public Image() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Image(long id, String fileName, String description, String addInfo, byte[] picByte) {
		super();
		this.id = id;
		this.fileName = fileName;
		this.description = description;
		this.addInfo = addInfo;
		this.picByte = picByte;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAddInfo() {
		return addInfo;
	}

	public void setAddInfo(String addInfo) {
		this.addInfo = addInfo;
	}

	public byte[] getPicByte() {
		return picByte;
	}

	public void setPicByte(byte[] picByte) {
		this.picByte = picByte;
	}

	@Override
	public String toString() {
		return "Image [id=" + id + ", fileName=" + fileName + ", description=" + description + ", addInfo=" + addInfo
				+ ", picByte=" + Arrays.toString(picByte) + "]";
	}
	
	

}
