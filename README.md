# 🎬 Movie Portal

Live Site: [Live Website URL](#)

## 🌟 Features

1. **Dynamic Movie Exploration**: Easily browse, view, add, and delete movies with a clean and dynamic interface.
2. **User Authentication**: Secure login and registration with email/password and Google authentication.
3. **Favorites Management**: Add or remove movies from your personalized favorites list.
4. **Private Routes**: Access to certain features like adding movies or viewing favorites is restricted to authenticated users.
5. **Dark/Light Mode Toggle**: Customize your viewing experience with a theme switcher.

## 🚀 Live Demo

[Click here to visit the live site](#)


## 🛠️ Tech Stack

- **Frontend**: React, React Router, React Hook Form, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: Firebase (Google Authentication)
- **Deployment**: Netlify (Client), Vercel (Server)
- **State Management**: Context API
- **UI Components**: react-simple-star-rating, Toast Notifications (react-toastify or sweetalert2)



## 📝 How to Run the Project

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas or local MongoDB setup


## 🚦 Key Features Breakdown

### 🔹 Home Page

- **Static Slider**: A carousel with at least 3 slides and meaningful content.
- **Featured Movies**: Displays the top 6 highest-rated movies.
- **Extra Sections**: Two additional relevant sections.
- **Dark/Light Mode**: Toggle between themes.

### 🔹 Authentication

- **Login Page**:
  - Email/Password login.
  - Google login option.
- **Register Page**:
  - Name, Email, Photo URL, and Password fields.
  - Password validation (Uppercase, Lowercase, 6+ characters).

### 🔹 Movie Management

- **Add Movie**: Form to add new movies (Private Route).
- **Movie Details**: View detailed movie information with options to:
  - **Delete Movie**
  - **Add to Favorites**
  - **Update Movie** (Private Route)
- **All Movies**: Display all added movies with search functionality.
- **Favorites**: View and manage your favorite movies (Private Route).

## 🧩 Challenges Implemented

- **Update Movie**: Allows users to edit existing movie details.
- **Search Functionality**: Search movies by title.
- **React Hook Form**: Utilized for form validation.
- **Dark/Light Theme Toggle**: Enhances user experience.

