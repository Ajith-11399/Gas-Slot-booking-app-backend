# Gas Slot Booking App Backend

This project serves as the backend for the Gas Slot Booking application. It provides RESTful API endpoints for user registration, product selection, date and time slot booking, and integrates a payment gateway.

## Project Description

The Gas Slot Booking App Backend handles user authentication, product selection, booking functionalities, and payment integration. It provides a scalable architecture for managing gas bookings with secure authentication and transaction handling.

## Files Structure

- **userController.js**: Contains the controller functions for handling user registration, authentication and booking
- **userRouter.js**: Defines routes for user-related operations.
- **index.js**: Main entry point of the application.
- **config.js**: Establishes a connection to Database.
- **userSchema.js**: Schema for User credentials.
- **bookingSchema.js**: Schema for booking a gas product.
- **.env**: Environment configuration file for MongoDB connection and SMTP settings.

## Tools and Libraries Used

- **bcryptjs**: Library for hashing passwords. Version: ^2.4.3
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS). Version: ^2.8.5
- **dotenv**: Module for loading environment variables from a .env file. Version: ^16.4.5
- **express**: Web application framework for Node.js. Version: ^4.19.2
- **jsonwebtoken**: Library for generating and verifying JSON Web Tokens (JWT). Version: ^9.0.2
- **mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js. Version: ^8.4.3
- **nodemailer**: Library for sending emails for user notifications. Version: ^6.9.14
- **nodemon**: Utility that monitors changes in your Node.js application and automatically restarts the server. Version: ^3.1.3
- **razorpay**: Node.js library for integrating the Razorpay payment gateway. Version: ^2.9.4

## Operations

1. **Home**: Displays a welcome message.
2. **User Registration**: Registers a new user.
3. **User Login**: Authenticates a user for login.
4. **Gas Booking**: Booking a product.
5. **Updating payment status**: Updating payment status from default 'Pending' to

## Base URL

**URL** : https://gas-slot-booking-app-backend.onrender.com/

## Routes

| **Route**                 | **Method** | **Endpoint**             | **Description**                              |
| ------------------------- | ---------- | ------------------------ | -------------------------------------------- |
| **Register User**         | `POST`     | `/register-user`         | Registers a new user.                        |
| **Login User**            | `POST`     | `/login-user`            | Authenticates user login.                    |
| **Book Gas**              | `POST`     | `/booking`               | Books a gas delivery slot.                   |
| **Update Payment Status** | `POST`     | `/update-payment-status` | Updates payment status via Razorpay webhook. |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Backend Source Link

For more details on the Gas Slot Booking App Backend, visit the [GitHub Repository](https://github.com/Ajith-11399/Gas-Slot-booking-app-backend).

## API Documentation - POSTMAN

Explore the API documentation for Gas Slot Booking App Backend on [Postman](https://documenter.getpostman.com/view/35036950/2sA3e2gpiA).
