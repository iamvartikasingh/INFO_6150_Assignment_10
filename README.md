
# Job Portal Project

## Overview

The Job Portal project is a comprehensive application built using React, Material UI, Axios, and Node.js (backend). The application offers job seekers a user-friendly interface to explore job listings and view company profiles, with integrated login and session management.

## Features

1. Login and Session Management:
Secure login with session handling.
Role-based redirection (Admin and Employee).

2. Job Listings with Pagination
Dynamic job data retrieved from the backend using Axios.
Pagination for browsing large job datasets.

3. Company Showcase:
Displays a gallery of companies with images and descriptions.

4. Material UI Components:
A polished and consistent user interface with modern components.

5. Contact Page:
Allows users to reach out with queries or feedback.

6. Responsive Design:
Fully responsive and optimized for various devices.

## Admin Features: ##
1.	Admin Dashboard:
Manage job postings and users through a dedicated admin interface.

2.	Add Jobs:
Allows admins to create new job postings with fields like company name, job title, description, and salary.

3.	Create Users:
Admins can create new users (Admin or Employee roles).

4.	Role-based Access Control:
Protected routes to restrict access based on user roles.


## Project Structure

The project follows a clean and modular folder structure:
```bash
project-root/
  ├── backend/          # Node.js backend code
  │   ├── models/       # Mongoose models
  │   ├── routes/       # Express routes
  │   ├── server.js     # Main server file
  ├── src/              # React frontend code
      ├── components/   # Reusable React components
      │   ├── About.js
      │   ├── AdminNavBar.js
      │   ├── Contact.js
      │   ├── CompanyShowcase.js
      │   ├── Footer.js
      │   ├── Home.js
      │   ├── JobListings.js
      │   ├── Login.js
      │   ├── NavBar.js
      │   ├── ProtectedRoute.js
      ├── pages/        # Main pages
      │   ├── AdminPage.jsx
      │   ├── AddJobPage.jsx
      │   ├── CreateUserPage.jsx
      ├── App.js        # Main application component
      ├── theme.js      # Material UI theme configuration
      ├── index.js      # Application entry point
  ├── .gitignore
  ├── README.md
  └── package.json
```
## Installation

### Prerequisites
Node.js and npm/yarn installed

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```
3. Start the backend server:
```bash
node server.js
```



### Frontend Setup
1. Navigate to the root directory of the project:
```bash
cd project-root
```
2. Install dependencies:
```bash
```npm install
```

3. Start the React development server:

```bash
npm start
```

Usage

	1.	Navigate to http://localhost:3000 to access the application.
	2.	Login using pre-configured usernames and passwords.
	3.	Explore different pages such as Home, About, Job Listings, Contact, and Company Showcase.
	4.	View job listings and company showcases.

Technologies Used

	•	Frontend: React, Material UI, Axios, React Router
	•	Backend: Node.js, Express.js
	•	Other Tools: Git, npm/yarn

API Endpoints

Authentication

	•	POST /api/login: Authenticates users based on username and password.

Job Listings

	•	GET /api/jobs: Retrieves a list of job postings.
	•	POST /api/jobs: Adds a new job posting (authentication required).

Company Showcase

	•	GET /api/companies: Retrieves a list of companies and images.
Redux Integration

Overview

This project uses Redux for state management, enabling seamless communication between components and maintaining a centralized state for the application. Redux improves scalability and simplifies state sharing across the admin and employee portals.

Key Redux Features

	1.	Global State Management:
	•	Redux handles the application’s global state, including job listings, authentication, and user details.
	2.	Slices and Reducers:
	•	Modular state slices for better separation of concerns:
	•	jobsSlice: Manages job-related actions (fetching, adding jobs, etc.).
	•	usersSlice: Manages user-related actions (authentication, user roles, etc.).
	3.	Thunks for Asynchronous Actions:
	•	Redux Thunk middleware enables API calls to interact with the backend seamlessly.
	•	Examples:
	•	Fetching jobs (fetchJobs).
	•	Adding jobs (addJob).
	4.	Role-Based Data Handling:
	•	Jobs added by the admin are immediately updated in the Redux store and displayed in the employee portal.

Sample Data

## Job Posts

```javascript
const jobPosts = [
  {
    id: 1,
    title: 'Full Stack Developer',
    description: 'Develop and maintain web applications.',
    lastUpdated: 'Last updated 2 days ago',
    applyLink: 'https://example.com/apply/full-stack-developer',
  },
  {
    id: 2,
    title: 'Digital Marketing Specialist',
    description: 'Promote products with SEO and SEM expertise.',
    lastUpdated: 'Last updated 1 day ago',
    applyLink: 'https://example.com/apply/digital-marketing-specialist',
  },
  // More job posts...
];
```
## Contact

For any queries or issues, please reach out to: contact@jobhunt.com
