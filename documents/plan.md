# Project Plan

## Goal

Create a simple web application where a user can log in and access a personal dashboard.

## Technology Stack

- HTML
- CSS
- JavaScript
- ASP.NET Web API
- SQL Server

## Login Process

index.html
    ↓
User enters username and password
    ↓
JavaScript sends request (fetch)
    ↓
ASP.NET API validates login
    ↓
SQL Server checks user data
    ↓
User found?

Yes → userdashboard.html

No → Show error message

## Main Files

index.html
- Login form

script.js
- Sends login request
- Handles responses

style.css
- Page styling

userdashboard.html
- User landing page after login

## API Example

POST /login

Response:
- 200 OK = Login successful
- 401 Unauthorized = Invalid credentials

## Success Criteria

- User can log in
- Invalid login shows error message
- Dashboard opens after successful login
- Data is stored in SQL Server