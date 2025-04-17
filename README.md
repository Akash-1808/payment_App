# 💸 Payment App

A full-stack payment application designed to facilitate secure and efficient transactions. This project provided hands-on experience with backend development, focusing on routing, Express.js, database integration, and JWT-based authentication.

## 🚀 Features

- **User Authentication**: Secure sign-up and login functionality using JWT tokens.
- **Transaction Management**: Users can initiate and track payments seamlessly.
- **Protected Routes**: Implemented middleware to safeguard sensitive endpoints.
- **Responsive Frontend**: User-friendly interface for smooth navigation and operations.

## 🛠 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Frontend**: HTML, CSS, JavaScript

## 📁 Project Structure

```
payment_App/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── package.json
└── README.md
```

## 🧠 What I Learned

- Setting up RESTful APIs with Express.js
- Integrating MongoDB for data persistence
- Implementing JWT for secure authentication
- Structuring projects for scalability and maintainability

## 📦 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Akash-1808/payment_App.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd payment_App
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   - Create a `.env` file in the `backend` directory.
   - Add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     PORT=5000
     ```
5. **Start the server**:
   ```bash
   npm start
   ```
6. **Access the application**:
   - Open `index.html` in the `frontend` directory using a browser.

## 📌 Future Enhancements

- Implement role-based access control
- Integrate third-party payment gateways
- Add transaction history and analytics dashboard

---

Made with 💻 by [Akash](https://github.com/Akash-1808)  
Feel free to contribute or suggest improvements!

