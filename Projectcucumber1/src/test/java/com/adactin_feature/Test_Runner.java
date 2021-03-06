package com.adactin_feature;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.Projectcucumber1.Baseclass;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= "src\\test\\java\\com\\adactin\\feature\\adactin.feature",
		glue = "com.sd",
		monochrome = true,
		strict = true,
		plugin= {
			"html:Cucumber_Report/Report1.html",
				"json:Cucumber_Report/Report.json",
				"pretty",
				"com.cucumber.listener.ExtentCucumberFormatter:Extend_cucumber/Report2"
		}
				)
public class Test_Runner {
public static WebDriver driver;
@BeforeClass
public static void set_Up() throws InterruptedException {
	Thread.sleep(3000);
	driver =Baseclass.browser_Configuration("Chrome");
	}
@AfterClass
public static void tear_Down() {
	driver.close();

}

}
