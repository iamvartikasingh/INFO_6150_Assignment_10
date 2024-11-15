
# Job Portal Project

## Overview

The Job Portal project is a comprehensive application built using React, Material UI, Axios, and Node.js (backend). The application offers job seekers a user-friendly interface to explore job listings and view company profiles, with integrated login and session management.

## Features
	1. Login and Session Management: Secure login using stored usernames and passwords with session management.
	2. Job Portal Pages and Routing:
	  1. Home
	  2. About
	  3. Job Listings
	  4. Contact
	  5. Company Showcase
	  6. Job Listings with Frontend Data: Displays job data dynamically using Material UI components and Axios for API integration.
	  7. Company Showcase with Image Gallery: Displays a gallery of company images sourced from a backend server.
	  8. Material UI Components: Utilizes various Material UI components for a consistent and polished user interface.


## Project Structure

The project follows a clean and modular folder structure:
```bash
project-root/
  ├── backend/  // Contains Node.js backend (controller, model, router)
  ├── src/
      ├── components/  // React components
      │   ├── About.js
      │   ├── Contact.js
      │   ├── CompanyShowcase.js
      │   ├── Footer.js
      │   ├── Home.js
      │   ├── JobListings.js
      │   ├── Login.js
      │   ├── NavBar.js
      │   └── ProtectedRoute.js
      ├── theme.js  // Material UI theme
      ├── App.js  // Main application component
      ├── index.js  // Entry point
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
