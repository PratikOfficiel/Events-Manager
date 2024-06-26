# Event Manager

## Description

Event Manager is a fullstack application that allows users to view and manage events. The backend is built using Node.js and Express, while the frontend is built using React.js. Users can authenticate using JWT (JSON Web Tokens) to create, view, and modify their events. Authenticated users can also see all events created by others and view their own events in the 'MyEvents' section.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/PratikOfficiel/Events-Manager.git
    ```

2. Open two terminals:

   - In the first terminal, navigate to the backend directory:
        ```bash
        cd backend
        ```
        Install the dependencies:
        ```bash
        npm install
        ```
        Start the backend server:
        ```bash
        npm start
        ```

   - In the second terminal, navigate to the frontend directory:
        ```bash
        cd frontend
        ```
        Install the dependencies:
        ```bash
        npm install
        ```
        Start the frontend server:
        ```bash
        npm start
        ```

## Usage

1. Ensure both backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000`.
3. Register or log in to start using the application.
   - View all events created by all users in 'Events' section.
4. Once authenticated, you can:
   - Create new events.
   - Modify or delete events you have created.
   - View your events in the 'MyEvents' section.
