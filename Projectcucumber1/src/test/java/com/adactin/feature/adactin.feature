Feature: Hotel Booking In Adactin Application

Scenario Outline: Login page 
Given  User  Launch The Application
When User Enter The"<username>" Username Field

And User Enter The"<password>" Password Field 
Then User Click on The Login button and It Navigate To The Search Hotel Page
Examples:
|username|password|
|ABC|123|
|Gayathri7696|SD95CF|
Scenario: Search Hotel Page
When User Enter The "Sydney"
And User Select The Hotel
And User Select The Room Type 
And User Select Required Number Of Rooms
And User Enter The Check In Date 
And User Enter The Check Out Date
And User Select The Adults Per Room
And User Select The Childern Per Room
Then User Click On The Search It Navigate To Th Select Hotel Page

Scenario: Select Hotel Page 
When User Click The Radio button
Then User Click On The Continue It Navigate To The Select Hotel Page

Scenario: Payment Page
When User Enter The First Name Of The Account Holder
And User Enter The Second Name Of The Account Holder
And User Enter The Billing Address
And User Enter The Cerdit Card Number
And User Select The cerdit Card Type
And User Select The Month Of Expiry
And User Select The Year Of Expiry
And User Select The CVV Number
And User Click On The Book Now It Navigate To The Booking Configuration Page 

Scenario: Booking Configuration Page
Then User Click On The Logout It Navigate To The Logout Page
