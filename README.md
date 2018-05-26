1. Introduction

	The purpose of this application is to simulate a normal sign in flow. The application renders a Sign-in form. If the user enters the correct pair of email and password, he/she will be directed to a greetings page. If either of email and/or password are incorrect, an invalid sign-in message will be shown. 

	The application is built in React with Redux for store management. For now, the valid email/password data is hard coded and is stored as a state in the store.

	The valid credentials for this app are:
   
   	Username          Id           Password
      		David        abc@abc.com     ABCabc123
      		Will         abc@xyz.com     admin123
      		Shawn        xyz@abc.com     XYZabc123
      		John         xyz@xyz.com     Xyz@Xyz
      
2. How to get code?

	Please follow the steps given below to get the code base in local.

	Please clone the repository using following command in terminal/gitBash:
	git clone https://github.com/akshaybarot/signin-form.git 

3. How to setup?

	Once code is cloned, navigate to the directory. Please use following to do so:

	terminal or iTerm for mac.
	Git Bash for windows.

	Now, from within the code folder, execute the following command. > npm install
	Please wait to let the above command finish. It may take a bit time because, it will install the dependencies of the components as well.

4. Development
	
	To start development, execute the follwing command. > npm start

	This will spin up a local development server at port 3000
	Open the browser and navigate to http://localhost:3000 and you start playing around with the application and see the output that it renders.
