# Section 1: Identifying Components

- Front-end UI
- Database
- User Authentication
- Backend API
- Sockets Implementation

# Section 2: Understanding components

### **<ins>Front-end UI</ins>**

**Overview:** This component will be responsible for the visual interface of the web app. It will contain a UI that is easy to interact with, and provide all the functionality to the users by communicating with other components.  
**Interactions:** Communicating with the Backend API component, this component will be able to access data contained in the database (users, user types, matches, etc.). The data will then be shown to the users depending on certain situations. Every time the front-end ui component needs to get or set data, it will do so using the backend API component.  
**Requirements:** In order to style the UI design, this component will make use of HTML and CSS files. An additional library called Material-UI is required to aid in the design process. Apart from the styling, the component will use React (a JavaScript front-end library) to provide functionality.
**Importance:** This is a very important component because without it, the user would have no clue on navigating the web app. This component would provide a very easy to use UI so that the users instantly know how to perform actions on the web app. For example, logging in would be as simple as clicking a button.

### **<ins>Database</ins>**

**Overview:** This component will store all of the data that the web app needs in a cloud. The data that is going to be stored will include everything about the user. For example: username, full name, e-mail address, questions asked previously, solutions given previously, etc. Any form of data that the Front-End UI component needs, will come directly from the database.  
**Interactions:** This component will communicate and interact with all other components in the system. The reason for that is because at each point in the system, we would need some sort of data to display to the user. The data would come directly from the database component. For example: in the case of loggin a user in, the user's data would be checked against a list of all existing users in the database to verify whether the user should be authenticated.  
**Requirements:** This component will make use of a NoSQL database in the cloud known as, mongoDB. All of the data stored inside mongoDB will take the shape of JSON objects making it very easy to read and write to the databse. In order to perform CRUD operations (create, read, update, delete), a separte component "Backend API" will allow the communication between the frontend and the database.  
**Importance:** This is an essential component for the system. Every single change or addition made in the web app would need to be stored somewhere so that the change is available to all the clients. This is why a persistent data storage in the cloud is absolutely required.

### **<ins>User Authentication</ins>**

**Overview:** This component will handle the security features for the system. It will ensure that only authorized users are allowed to access certain pages. Additionally, it will also make sure that the user that is trying to log in, has the same credentials as the user in the database. Moreover, it will handle the conversion of passwords into tokens so that the user's credentials are not compromised in the case of a data breach.  
**Interactions:** This component will interact with the front-end UI, the backend API and the database. The front-end UI will send the user data for the user that is trying to log in, to the backend API. The backend API will communicate with the database and make sure that the data submitted by the user matches the data in the database. According to the status, a result will be sent back to the front-end which will then decide what to show the user.  
**Requirements:** This component will make use of JSON Web Token (JWT) to make sure that the logged in user is authenticated to the system. This way we are using tokens instead of passwords for better security.  
**Importance:** This is an important component because without it, users would be able to access pages that they should normally be denied access to. For example a user could view all the questions asked by another user just by typing their e-mail address. Even though the data is not highly sensitive, it still needs to be protected.

### **<ins>Backend API</ins>**

**Overview:** This components purpose is to open up communication between the front-end and the database hosted in the cloud. It will serve an API that the front-end can make requests to, and would get a response back. For example: the front-end would send the credentials of the user that is trying to login, these credentials will be checked against the database and return a response indicating success or failure back the the front-end.  
**Interactions:** This component will interact with the front-end ui and the database hosted in the cloud. Every time the front-end needs to fetch any form of data from the database, this component will provide that functionality. Same is the case for when the front-end component needs to add new data to the database.  
**Requirements:** This component will be a server that gets hosted in the cloud. In order to make this a server, NodeJS and Express will be used. Additional libraries such as cors, JWT, socket, mongoose will be used to provide functionality such as creating chat rooms, authentication, etc.  
**Importance:** This is a crucial component because without it the front-end would not be able to communicate to the database. In the absence of this component, the web app would not be able to log users in, create new users, or provide any of the desired functionality. This is why this component is crucial in making the system work.

### **<ins>Sockets Implementation</ins>**

**Overview:** This component is responsible for creating a socket connection which the two matched users can access. The result would be a real-time chat room where the helper and helpee can talk about the problem in detail and come up with a solution.  
**Interactions:** This component will interact with all other components to create a successful connection. Only the users that are matched up should be able to connect and this would be ensured by the user authentication component, the backend component, and the databse. The result would be in the form of a chat room page that would be shown in the front-end ui component.  
**Requirements:** In order to make this component work, a library known as socket.io will be used. This will provide real-time socket management and the ability for users to send, receive messages instantly.  
**Importance:** This is an important part of the system. Once the users are matched together, they will need a place where they can talk to each other, discuss the problem and come up with a solution together. This component provides just that.

# Section 3 & 4: Breaking Up Components & Prioritization

- <ins>Front-End UI</ins>
  - Logged out user view
    - Landing Page
    - Registration prompts
    - Footer
  - Logged in user view
    - Navbar
    - Toggle button (switch between helper and helpee)
    - Tech Icons
    - Footer
  - Matching screen
  - Chat room
- <ins>Database</ins>
  - User Model
    - Name
    - Email Address
    - Password
  - Matches Model
    - Status (matched, waiting, etc.)
    - Technology (Data Science, Web Development, etc.)
    - Language (Python, JavaScript, etc.)
- <ins>Backend API</ins>
  - Querying MongoDB
  - Add users to MongoDB
  - Read users from MongoDB
  - Matches in queue
  - Chatroom creation
- <ins>User Auth</ins>
  - Convert password to token
  - Authenticate user on every page that requires logged in status
- <ins>Sockets Implementation</ins>
  - Host and client communication
  - Allow only authorized users
  - Introduction message (problem statement)
  - Opening and closing connections
