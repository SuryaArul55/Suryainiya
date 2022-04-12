package com.autopom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Payment {
public WebDriver driver;
@FindBy(xpath="//*[@id=\"HOOK_PAYMENT\"]/div[1]/div/p/a")private WebElement paym;
@FindBy(xpath="//*[@id=\"cart_navigation\"]/button/span")private WebElement paypro;
public Payment (WebDriver driver) {
	this.driver=driver;
	PageFactory.initElements(driver, this);
	
}
public WebElement getPaym() {
	return paym;
}

public WebElement getPaypro() {
	return paypro;
}
}
