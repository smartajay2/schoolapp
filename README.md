Student Project Management System
Project Overview
This project is a Student Project Management System designed to manage student projects. It features a modern user interface built with Next.js, Tailwind CSS, and React.js. The backend API is developed using Express and Mongoose for handling data operations. Firebase is used for user authentication.

Features
User Authentication: Secure login system using Firebase Authentication.
Project Management: Teachers can add, delete, and search student projects.
Search Functionality: JavaScript-based search for efficient project management.
Server-Side Rendering: Enhanced performance and SEO using Next.js for dynamic page rendering.
Backend API: RESTful API built with Express.js and Mongoose to manage project data.
Technologies Used
Frontend:

Next.js: Framework for server-side rendering and static site generation.
Tailwind CSS: Utility-first CSS framework for modern, responsive design.
React.js: Building the user interface and managing state.
Firebase: Handling authentication.
Backend:

Express.js: Building the RESTful API for data operations.
Mongoose: MongoDB object modeling for managing project data.
Installation
Frontend
Clone the Repository

bash
Copy code
git clone https://github.com/yourusername/student-project-management.git
cd student-project-management
Install Frontend Dependencies

Make sure you have Node.js installed. Then run:

bash
Copy code
npm install
Set Up Firebase

Go to the Firebase Console and create a new project.

Add your web app to the Firebase project.

Copy the Firebase configuration from your Firebase project settings.

Create a .env.local file in the root directory of the frontend project and add the Firebase configuration:

env
Copy code
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
Run the Frontend Project

bash
Copy code
npm run dev
The frontend will be running at http://localhost:3000.

Backend
Navigate to the Backend Directory

bash
Copy code
cd backend
Install Backend Dependencies

bash
Copy code
npm install
Set Up MongoDB

Make sure you have MongoDB installed and running on your machine, or set up a MongoDB cluster on MongoDB Atlas.

Create a .env file in the backend directory and add your MongoDB connection string:

env
Copy code
MONGODB_URI=your-mongodb-connection-string
PORT=5000
Run the Backend Project

bash
Copy code
npm start
The backend will be running at http://localhost:5000.

API Endpoints
POST /api/projects: Add a new project.
DELETE /api/projects/
: Delete a project by ID.
GET /api/projects: Retrieve all projects.
GET /api/projects/
: Retrieve a project by ID.
Usage
Student Login: Students can log in using the Firebase Authentication system.
Teacher Functionality:
Add Projects: Teachers can add new projects through the interface.
Delete Projects: Teachers can delete existing projects.
Search Projects: Use the search functionality to find specific projects.
Code Explanation
Frontend:

Next.js: Framework used for server-side rendering and static site generation.
Tailwind CSS: Utility-first CSS framework used for styling.
React.js: Components and state management.
Firebase: Handles user authentication.
Backend:

Express.js: RESTful API for handling project data.
Mongoose: Object modeling for MongoDB to manage project data.
Contribution
If you would like to contribute to this project, please fork the repository and create a pull request with your changes.

License
This project is licensed under the MIT License.

Contact
For any questions or issues, please contact ajayjestin2@gmail.com.

