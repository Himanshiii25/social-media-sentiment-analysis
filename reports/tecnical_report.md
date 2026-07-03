WEEK 4: CODE & BUILD DOCUMENTATION.
INTRODUCTION.
This task focuses on implementing client-server communication by connecting the frontend of the Social Media Sentiment Analysis application to the backend APIs. The frontend sends user input to the backend using JavaScript fetch () requests, and the backend processes the request and returns a response. The response is then displayed on the user interface, enabling smooth interaction between the client and the server. This integration ensures that the application can exchange data efficiently and function as a complete web application.

2. SYSTEM ARCHITECTURE DIAGRAM. 
The system architecture illustrates the overall workflow of the application. It shows how the user interacts with the frontend, how the frontend communicates with the Flask backend, and how the AI model processes the input before returning the result to the user.
  User
   ↓
Frontend (HTML/CSS/JavaScript)
   ↓
Flask Backend (app.py)
   ↓
Sentiment Analysis / AI Model
   ↓
Response
   ↓
Frontend
   ↓
Displays result to the user.  
     
3. SEQUENCE DIAGRAM. 
The sequence diagram represents the order of communication between the user, frontend, backend, and AI model during the sentiment analysis process. 
User → Frontend: Enter message.
Frontend → Backend: Send a POST request to /api/chat.
Backend → AI Model: Analyse the text.
AI Model → Backend: Return the analysis result.
Backend → Frontend: Send JSON response.
Frontend → User : Display the response.

4. API DOCUMENTATION.
     Endpoint 	   Method	    Purpose
/api/chat	  POST	Receives the user's message and returns the sentiment analysis result.
/api/history	  GET	Retrieves the conversation history. 
  
Sample Request. 



Sample Response.
	

										

5. TESTING AND RESULTS. 

Feature Tested  	Expected Result  	Status

Frontend sends data to backend
	Data is sent successfully using POST /api/chat
	✅ Passed

Backend processes the request
	Sentiment analysis runs correctly
	✅ Passed

Response displayed on frontend
	User sees the sentiment/result
	✅ Passed

Conversation history.
	Previous messages are retrieved from /api/history
	✅ Passed

  
6.  GitHub Repository.
The project source code is maintained in a GitHub repository. The repository is organized into folders such as src/, data/, reports/, and deployment/ to keep the project structured and easy to manage.

7. CONCLUSION. 
The Week 4 tasks for the Social Media Sentiment Analysis project were successfully completed. The frontend was integrated with the Flask backend using API communication, enabling users to submit text and receive sentiment analysis results. The conversation history feature was implemented, and the overall workflow was tested to ensure proper functionality. The project documentation, including the system architecture diagram, sequence diagram, and API documentation, was also prepared, resulting in a well-organized and functional application.
