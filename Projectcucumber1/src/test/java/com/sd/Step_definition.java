package com.sd;

import org.openqa.selenium.WebDriver;

import com.Projectcucumber1.Baseclass;
import com.adactin_feature.Test_Runner;
import com.helper.Managerpgm;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_definition extends Baseclass {
	public static WebDriver driver=Test_Runner.driver;
	public static Managerpgm pom=new Managerpgm(driver);
@Given("^User  Launch The Application$")
public void user_Launch_The_Application() throws Throwable {
   geturl("http://adactin.com/HotelApp/index.php");
}

@When("^User Enter The\"([^\"]*)\" Username Field$")
public void user_Enter_The_Username_Field(String username) throws Throwable {
	 pom.get_Instansce_home().getUserna();
	   inputonElement(pom.get_Instansce_home().getUserna(),username); 
}

@When("^User Enter The\"([^\"]*)\" Password Field$")
public void user_Enter_The_Password_Field(String password) throws Throwable {
	 pom.get_Instansce_home().getPasswrd();
	   inputonElement(pom.get_Instansce_home().getPasswrd(),password);
}

@Then("^User Click on The Login button and It Navigate To The Search Hotel Page$")
public void user_Click_on_The_Login_button_and_It_Navigate_To_The_Search_Hotel_Page() throws Throwable {
	pom.get_Instansce_home().getLogin();
	clickonElement(pom.get_Instansce_home().getLogin());
}
@When("^User Enter The \"([^\"]*)\"$")
public void user_Enter_The(String arg1) throws Throwable {
	pom.get_instance_detail().getLocation();
	dropdown("Visibletext",pom.get_instance_detail().getLocation(),"Melbourne");
}
/*
@When("^User Enter The Hotel Location$")
public void user_Enter_The_Hotel_Location() throws Throwable {
pom.get_instance_detail().getLocation();
dropdown("Visibletext",pom.get_instance_detail().getLocation(),"");
}
*/
@When("^User Select The Hotel$")
public void user_Select_The_Hotel() throws Throwable {
    pom.get_instance_detail().getHotel();
    dropdown("visibletext",pom.get_instance_detail().getHotel(),"Hotel Sunshine");
	
}

@When("^User Select The Room Type$")
public void user_Select_The_Room_Type() throws Throwable {
	pom.get_instance_detail().getRoom();
	dropdown("visibletext",pom.get_instance_detail().getRoom(),"Double");
}

@When("^User Select Required Number Of Rooms$")
public void user_Select_Required_Number_Of_Rooms() throws Throwable {
	pom.get_instance_detail().getRoomno(); 
	inputonElement(pom.get_instance_detail().getRoomno(),"1-One  ");
}

@When("^User Enter The Check In Date$")
public void user_Enter_The_Check_In_Date() throws Throwable {
	pom.get_instance_detail().getCheckin();
	
		inputonElement(pom.get_instance_detail().getCheckin(),"12/04/2022");
}

@When("^User Enter The Check Out Date$")
public void user_Enter_The_Check_Out_Date() throws Throwable {
	pom.get_instance_detail().getCheckout();
	 inputonElement(pom.get_instance_detail().getCheckout(),"13/04/2022");
	
}

@When("^User Select The Adults Per Room$")
public void user_Select_The_Adults_Per_Room() throws Throwable {
	pom.get_instance_detail().getAdult();
	inputonElement(pom.get_instance_detail().getAdult(),"1- One") ; 
}

@When("^User Select The Childern Per Room$")
public void user_Select_The_Childern_Per_Room() throws Throwable {
	pom.get_instance_detail().getChild();
	inputonElement(pom.get_instance_detail().getChild(),"1- One") ; 
}

@Then("^User Click On The Search It Navigate To Th Select Hotel Page$")
public void user_Click_On_The_Search_It_Navigate_To_Th_Select_Hotel_Page() throws Throwable {
	pom.get_instance_detail().getSubmit();
	clickonElement(pom.get_instance_detail().getSubmit());
}

@When("^User Click The Radio button$")
public void user_Click_The_Radio_button() throws Throwable {
	pom.get_instance_detailcon().getRadiocli();
	clickonElement(pom.get_instance_detailcon().getRadiocli());
}

@Then("^User Click On The Continue It Navigate To The Select Hotel Page$")
public void user_Click_On_The_Continue_It_Navigate_To_The_Select_Hotel_Page() throws Throwable {
	pom.get_instance_detailcon().getCon();
	clickonElement(pom.get_instance_detailcon().getCon());
}

@When("^User Enter The First Name Of The Account Holder$")
public void user_Enter_The_First_Name_Of_The_Account_Holder() throws Throwable {
	pom.get_instance_Book().getFirst();
	 inputonElement(pom.get_instance_Book().getFirst(),"Jack") ;
}

@When("^User Enter The Second Name Of The Account Holder$")
public void user_Enter_The_Second_Name_Of_The_Account_Holder() throws Throwable {
	 pom.get_instance_Book().getLast();
	 inputonElement(pom.get_instance_Book().getLast(),"Jacky") ;
	
}

@When("^User Enter The Billing Address$")
public void user_Enter_The_Billing_Address() throws Throwable {
	 pom.get_instance_Book().getAdd();
	 inputonElement(pom.get_instance_Book().getAdd(),"11 candy road norway") ;
}

@When("^User Enter The Cerdit Card Number$")
public void user_Enter_The_Cerdit_Card_Number() throws Throwable {
	 pom.get_instance_Book().getCcno();
	 inputonElement(pom.get_instance_Book().getCcno(),"1234561234561234") ;
}

@When("^User Select The cerdit Card Type$")
public void user_Select_The_cerdit_Card_Type() throws Throwable {
	pom.get_instance_Book().getctype();
	inputonElement(pom.get_instance_Book().getctype(),"Mastercard");
}

@When("^User Select The Month Of Expiry$")
public void user_Select_The_Month_Of_Expiry() throws Throwable {
	pom.get_instance_Book().getExpm();
	inputonElement(pom.get_instance_Book().getExpm(),"january") ;
}

@When("^User Select The Year Of Expiry$")
public void user_Select_The_Year_Of_Expiry() throws Throwable {
	pom.get_instance_Book().getExpy();
	inputonElement(pom.get_instance_Book().getExpy(),"2022") ;
}

@When("^User Select The CVV Number$")
public void user_Select_The_CVV_Number() throws Throwable {
	pom.get_instance_Book().getCvno();
	 inputonElement(pom.get_instance_Book().getCvno(),"234") ;
}

@When("^User Click On The Book Now It Navigate To The Booking Configuration Page$")
public void user_Click_On_The_Book_Now_It_Navigate_To_The_Booking_Configuration_Page() throws Throwable {
	pom.get_instance_Book().getBuildl();
	clickonElement(pom.get_instance_Book().getBuildl());
}

@Then("^User Click On The Logout It Navigate To The Logout Page$")
public void user_Click_On_The_Logout_It_Navigate_To_The_Logout_Page() throws Throwable {
   pom.get_instance_Book().getLogout();
   clickonElement(pom.get_instance_Book().getLogout());
}

}
