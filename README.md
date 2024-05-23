# Expense-Tracker

![Expense-Tracker](https://socialify.git.ci/Anubhav-Ghosh1/Expense-Tracker/image?forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Dark)

## Overview

Expense Tracker is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It enables users to manage their finances effectively with features designed to provide a comprehensive overview of their financial activities. This application helps users track their income and expenses, categorize their spending, and visualize their financial patterns.

## Features

- **User Authentication**: Utilizes Auth0 for secure user authentication and authorization, ensuring that user data is protected and accessible only to the authenticated user.
- **Income and Expense Tracking**: Allows users to input and categorize their income and expenses, providing a clear overview of their financial activities.
- **Categorization**: Supports categorizing expenses into various predefined categories, making it easy to organize and track spending habits.
- **Data Visualization**: Includes interactive graphs and charts using Chart.js to visualize income and expenses over time, helping users understand their financial patterns and make informed decisions.
- **User-Friendly Interface**: Designed with an intuitive and responsive user interface, making it easy for users to navigate and manage their finances on any device.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
2. Run the following commands by opening the terminal
   ```
   // first terminal
   cd "Backend"
   npm i

   // second terminal
   cd "Frontend"
   npm i
   ```
3. Run the server and frontend
   ```
   For server: npm run dev
   For frontend: npm run start
   ```


   ## Configure Auth0
1. Go to the Auth0 website and sign up for an account.
2. Create a new application in the Auth0 dashboard.
3. Configure the following settings in the .env file in the server directory
```
AUTH0_DOMAIN=your-auth0-domain
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
```

   ## MongoDB setup
1. Install MongoDB on your local machine or set up a MongoDB Atlas cluster.
2. Configure the MongoDB connection string in the .env file in the server directory
```
MONGO_URI=your-mongodb-connection-string
```
