$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User  Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter The\"\u003cusername\u003e\" Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The\"\u003cpassword\u003e\" Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on The Login button and It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;login-page;;1"
    },
    {
      "cells": [
        "ABC",
        "123"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;login-page;;2"
    },
    {
      "cells": [
        "Gayathri7696",
        "SD95CF"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User  Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter The\"ABC\" Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The\"123\" Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on The Login button and It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 4754205900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 15
    }
  ],
  "location": "Step_definition.user_Enter_The_Username_Field(String)"
});
formatter.result({
  "duration": 403936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 15
    }
  ],
  "location": "Step_definition.user_Enter_The_Password_Field(String)"
});
formatter.result({
  "duration": 100225100,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_on_The_Login_button_and_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2173194300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User  Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Enter The\"Gayathri7696\" Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enter The\"SD95CF\" Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User Click on The Login button and It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 397716400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gayathri7696",
      "offset": 15
    }
  ],
  "location": "Step_definition.user_Enter_The_Username_Field(String)"
});
formatter.result({
  "duration": 113475400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SD95CF",
      "offset": 15
    }
  ],
  "location": "Step_definition.user_Enter_The_Password_Field(String)"
});
formatter.result({
  "duration": 70708500,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_on_The_Login_button_and_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 3226211500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "User Enter The \"Sydney\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User Select The Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User Select Required Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User Enter The Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User Enter The Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User Select The Adults Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User Select The Childern Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User Click On The Search It Navigate To Th Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 16
    }
  ],
  "location": "Step_definition.user_Enter_The(String)"
});
formatter.result({
  "duration": 376201100,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 133688600,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_Room_Type()"
});
formatter.result({
  "duration": 119854800,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_Required_Number_Of_Rooms()"
});
formatter.result({
  "duration": 65011500,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Enter_The_Check_In_Date()"
});
formatter.result({
  "duration": 76600800,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Enter_The_Check_Out_Date()"
});
formatter.result({
  "duration": 84022100,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_Adults_Per_Room()"
});
formatter.result({
  "duration": 66926500,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_Childern_Per_Room()"
});
formatter.result({
  "duration": 67976800,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_On_The_Search_It_Navigate_To_Th_Select_Hotel_Page()"
});
formatter.result({
  "duration": 817525600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Select Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "User Click The Radio button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User Click On The Continue It Navigate To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_Click_The_Radio_button()"
});
formatter.result({
  "duration": 197123300,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_On_The_Continue_It_Navigate_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 796167400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Payment Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;payment-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "User Enter The First Name Of The Account Holder",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User Enter The Second Name Of The Account Holder",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User Enter The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "User Enter The Cerdit Card Number",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "User Select The cerdit Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "User Select The Month Of Expiry",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "User Select The Year Of Expiry",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Select The CVV Number",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User Click On The Book Now It Navigate To The Booking Configuration Page",
  "keyword": "And "
});
formatter.match({
  "location": "Step_definition.user_Enter_The_First_Name_Of_The_Account_Holder()"
});
formatter.result({
  "duration": 255244200,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Enter_The_Second_Name_Of_The_Account_Holder()"
});
formatter.result({
  "duration": 143610500,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Enter_The_Billing_Address()"
});
formatter.result({
  "duration": 107625200,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Enter_The_Cerdit_Card_Number()"
});
formatter.result({
  "duration": 92901100,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_cerdit_Card_Type()"
});
formatter.result({
  "duration": 76817200,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_Month_Of_Expiry()"
});
formatter.result({
  "duration": 68906800,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_Year_Of_Expiry()"
});
formatter.result({
  "duration": 80689900,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Select_The_CVV_Number()"
});
formatter.result({
  "duration": 86985700,
  "status": "passed"
});
formatter.match({
  "location": "Step_definition.user_Click_On_The_Book_Now_It_Navigate_To_The_Booking_Configuration_Page()"
});
formatter.result({
  "duration": 1178881600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Booking Configuration Page",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking-configuration-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "User Click On The Logout It Navigate To The Logout Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_definition.user_Click_On_The_Logout_It_Navigate_To_The_Logout_Page()"
});
formatter.result({
  "duration": 569965700,
  "status": "passed"
});
});