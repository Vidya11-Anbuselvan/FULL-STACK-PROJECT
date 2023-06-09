package com.example.books.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Registration {

	
	private String name;
	@Override
	public String toString() {
		return "Registration [name=" + name + ", gender=" + gender + ", phoneNo=" + phoneNo + ", emailId=" + emailId
				+ ", password=" + password + ", confirmpassword=" + confirmpassword + ", position=" + position
				+ ", country=" + country + ", city=" + city + ", address=" + address + "]";
	}
	public Registration() {
		super();
	}
	public Registration(String name, String gender, int phoneNo, String emailId, String password,
			String confirmpassword, String position, String country, String city, String address) {
		super();
		this.name = name;
		this.gender = gender;
		this.phoneNo = phoneNo;
		this.emailId = emailId;
		this.password = password;
		this.confirmpassword = confirmpassword;
		this.position = position;
		this.country = country;
		this.city = city;
		this.address = address;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public long getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(long phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmpassword() {
		return confirmpassword;
	}
	public void setConfirmpassword(String confirmpassword) {
		this.confirmpassword = confirmpassword;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Column
	private String gender;
	@Id
	@Column
	private long phoneNo;
	@Column
	private String emailId;
	@Column
	private String password;
	@Column
	private String confirmpassword;
	@Column
	private String position;
	@Column
	private String country;
	@Column
	private String city;
	@Column
	private String address;
}