# Section 1: Proof of Concept

To demonstrate the proof of concept, two separate entities are created, the frontend in React and the backend in Node JS. Following the creation, a connection is established between the two to ensure the transfer of data.

<img src="./d4_assets/proof-of-concept/project_dir.PNG" /> <br>
_Project structure for frontend and backend._
<br><br>

## React Frontend

<img src="./d4_assets/proof-of-concept/project_dir_react.PNG" /><br>
_Project structure for frontend_
<br><br>

<img src="./d4_assets/proof-of-concept/react_code.PNG" height="300px"/><br>
_Code for connecting to the server, and sending/receiving messages_
<br><br>

<img src="./d4_assets/proof-of-concept/react_start_command.PNG" height="200px"/><br>
_Running the react frontend on localhost using command prompt_
<br><br>

<img src="./d4_assets/proof-of-concept/react_ui.PNG" height="200px"/><br>
_Result of the code in the screenshot above._
<br><br>

<img src="./d4_assets/proof-of-concept/react_user1.PNG" height="200px"/><img src="./d4_assets/proof-of-concept/react_user2.PNG" height="200px"/><br>
_Users can send messages, and all devices connected to the server will be able to view it in real-time._
<br><br>

## NodeJS Backend

<img src="./d4_assets/proof-of-concept/project_dir_server.PNG" /><br>
_Project structure for server_
<br><br>

<img src="./d4_assets/proof-of-concept/server_code.PNG" height="200px"/><br>
_Code for starting up the server and allowing devices to connect_
<br><br>

<img src="./d4_assets/proof-of-concept/server_start_command.PNG" height="100px"/><br>
_Starting up the server on localhost using a command prompt_
<br><br>

<img src="./d4_assets/proof-of-concept/server_browser.PNG" height="200px"/><br>
_Viewing server in the browser_
<br><br>

## Communication Between The Two

<img src="./d4_assets/proof-of-concept/server_connection.PNG" height="150px"/><br>
_Everytime a user opens the frontend, the backend establishes a socket connection and displays the connection id._
<br><br>

# Section 2: Concept Documentation

## Requirements

In order to run the code contained in this project, you need to have NodeJS installed on your system. This will allow you to install other JavaScript dependencies that the project uses. Additionally, you need to install Yarn which is a package manager that this project uses.

Dependencies:

- React
- Express
- Cors
- Nodemon
- Socket.io
- Socket.io-client

## Instructions

The first and the most important step is to install NodeJS and Yarn on your system.  
To get started, visit the official website for NodeJS: [Offical Website](https://nodejs.org/en/) and follow the steps to install NodeJS on your system.  
To check if your installation was successful, run the following command in the command prompt: `node -v`. If you see a version, you have successfully installed NodeJS on your system.

The next step is to install Yarn (package manager) to easily install all the dependencies that the project contains later on. To get started, open up a command prompt window and type the following command: `npm install --global yarn`. Once again, to verify the installation, type the following command: `yarn --version`. If you see a version, you have successfully installed yarn.

Now, clone the repo and follow the instructions below to start up the server and the frontend.

**Starting the Server**

1. Move into the following directory: `HelpZen/express-server`
2. Run the following command to install dependencies: `yarn install`
3. Run the following command to start the server: `yarn start`
4. To view the server visit http://localhost:8000/ on your browser.

**Starting the Frontend**

1. Move into the following directory: `HelpZen/react-frontend`
2. Run the following command to install dependencies: `yarn install`
3. Run the following command to start the server: `yarn start`
4. Your browser should open up automatically with the user interface displayed on it.

## Functionality

This proof-of-concept allows the user to run the backend and the frontend independently on their machine. It allows provides the functionality for the users to be able to view the backend as well as the frontend on the browser at the same time. Additionally, the functionality to communicate between the two entities is also present. Multiple users can communicate with each other using global chat, which works using socket connections.

# Section 3: Updates

I have not made any changes to the project idea during the process. The project idea has stayed the same all throughout my deliverables. Therefore, there are no changes that need to be reflected in this section.

# Section 4: Reflection

Now that I have a working proof-of-concept, I feel even more confident in being able to implement the project. So far, I haven't really faced any major challenges or roadblocks and everything is sailing smoothly.
