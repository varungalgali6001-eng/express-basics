# Express Basics Assignment

## Student Details

Name: Varun Galgali  
Course: BTech CSE  
College: ITM Skills University  

## Project Description

This project demonstrates basic routing, dynamic route parameters, multiple route parameters, query parameters, and request-response handling using Express.js.

## Steps to Run the Server

1. Open the project folder in VS Code.
2. Open the terminal.
3. Install the required dependencies:

   npm install

4. Start the server:

   node server.js

5. Open the following URL in the browser:

   http://localhost:3000

## Routes and Sample Outputs

### 1. Home Route

Method and URL:

GET /

Sample output:

Welcome to Home Page

### 2. About Route

Method and URL:

GET /about

Sample output:

This is About Page

### 3. Contact Route

Method and URL:

GET /contact

Sample output:

This is Contact Page

### 4. Dynamic User Route

Method and URL:

GET /user/:name

Example:

GET /user/john

Sample output:

Hello john

### 5. Product Route with Multiple Parameters

Method and URL:

GET /product/:id/:category

Example:

GET /product/101/electronics

Sample output:

Product ID: 101, Category: electronics

### 6. Search Route with Query Parameters

Method and URL:

GET /search?name=john&role=developer

Sample output:

Name: john, Role: developer

## Request Logging

The application uses middleware to print the request method and URL in the terminal.

Example terminal output:

GET /about  
GET /user/john  
GET /search?name=john&role=developer  

## Technologies Used

- Node.js
- Express.js

## Port

The server runs on port 3000.