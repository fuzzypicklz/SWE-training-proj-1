# Programming Assignment 0 - NPM Starter

## Get & setup the repository(assignment)

First clone the repository to your station <br>
`git clone https://github.com/PVNETEdu/Software-Engineer---Program-Assignment-1.git`

Be sure to add the base repository as one of your remote since I might update README <br>
`git remote add projectDescription https://github.com/PVNETEdu/Software-Engineer---Program-Assignment-1.git`

To keep updated to of the assignment, update your project <br>
`git pull projectDescription master`

Create a new branch with your name and start working <br>
`git checkout -b <your name>`

Check if you are on your branch <br>
`git branch`

First we need to install all of the npm dependencies run: <br>
`npm install`

To check everything worked well, go to localhost:3000 to check if you see the web page: <br>
`cd bin`
1. run: `node www` to run the server file
2. put: `localhost:3000` in the browser and check if you see web app works.

## Overview
For this assignment, you will be learning to get familiar with the normal ways of how to use an express app with a frontend view engine.(in this case, embeded javascript)

### Table of Contents
**[Files to complete](#files-to-complete)**<br>
**[Part One: Get Started](#part-one-get-started)**<br>
**[Part Two: Attach Mysql](#part-two-attach-mysql)**<br>
**[Part Three: Make the Login System](#part-three-make-the-login-system)**<br>
**[Part Four: Make the login page and the routes](#part-four-make-the-login-page-and-the-routes)**<br>
**[Part Five: Finish the authenticateUser POST Request](#part-five-finish-the-authenticateuser-post-request)**<br>
**[Part Six: Finish the signup page](#part-six-finish-the-signup-page)**<br>
**[Part Seven: Finish the registerUser POST Request](#part-seven-finish-the-registeruser-post-request)**<br>
**[Part Eight: Commit and Submit](#part-eight-commit-and-submit)**<br>

## Files to complete:
**app.jd** - The express app setup <br>
**index.js** - The index router with four different routes <br>
**views** - The folder that contains your front-end engine there are four files in total needed <br>

## Part One: Get Started
You should import it to your IDE of choice WebStorm recommended. 

By default, your project should have no errors and contain the following root items:

**bin** - The folder that includes the starter code on starting server with the port number <br>
**node_modules** - The library for all of the npm packages. <br>
**public** - The public folder where the page elements like stylesheet, in page javascripts, and images can go to <br>
**routes** - The folders that have the index routes and user routes that we can use <br>
**views** - The folder that contains your front-end engine <br>
**app.js** - The express app setup file <br>
**package.json** - This is all the dependencies that NPM will look into when you install or delete packages<br>
**package-lock.json** - Describes the exact tree that was generated by NPM<br>

Please seek help from me or any course staffs if you are missing any of these files

## Part Two: Attach Mysql
Look into `app.js` file the mysql connection was already done for you! All you have to do is to fill in the username of your localhost mysql account, the password, and the database your tables are stored in.

To check if the your configuration was successful, run the web app, if you got `connecting success` that means the connection to mysql was successful, otherwise play around with the database configuration JSON until you got it correct. 

## Part Three: Make the Login System
#### This part of the program will not be graded on prettiness
In the index.ejs page make two buttons, one named `login`, and one named `signup` <br>
`login` button - will call the `/login` GET request in the backend that renders to a page with an input of email address, and an input of password, you can name this page whatever you want.<br>
`signup` button - will call the `/signup` GET request in the backend that renders to a page with a form that ask for email and password.<br>


## Part Four: Make the login page and the routes

In the views folder make another page called login with the appropriate file extension. This page should have a form that submits to the `POST /authenticateUser` route<br>
Build the route that will take the form's API call, and compare with the user table in the database using a reasonable query.<br>
The form should contain two input boxes, one of them takes int the email address, and one of them takes in the password. <br>
Once the authentication of the user passed, go ahead and send the user JSON object for that specific user to the browser using the `response` object.

## Part Five: Finish the authenticateUser POST Request
All of the inputs you built in the previous part will be passed into this post command in the req.body, do the appropriate query in your database if the password and information all matched up, end the response with the user's information JSON. Otherwise end the response with an error message of your design. 

## Part Six: Finish the signup page
In the views folder make another page called signup with the appropriate file extension. This page should have a form that submits to the `POST /registerUser` route<br>
Build the route that will take the form's API call, and compare with the user table in the database using a reasonable query.<br>
The form should contain input boxes, with email address, password and repeat password(make sure the two passwords are the same)<br>


## Part Seven: Finish the registerUser POST Request
Finish your registerUser post request check the database if the user already exists, then do not do this insert return a `Same email address found` response. Otherwise, insert the user in the table and return a `register successful` response. 

## Part Eight: Commit and Submit
Once you have finished all the works and ready to submit your assignment, make a new pull request for merging into master and @PVNetEdu me as a reviewee so I will know that your code is ready to be reviewed.

# Grade:  /100