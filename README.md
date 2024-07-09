# Gas Slot Booking App Backend

This project serves as the backend for the Gas Slot Booking application. It provides RESTful API endpoints for user registration, product selection, date and time slot booking, and integrates a payment gateway.

## Project Description

The Gas Slot Booking App Backend handles user authentication, product selection, booking functionalities, and payment integration. It provides a scalable architecture for managing gas bookings with secure authentication and transaction handling.

## Files Structure

- **userController.js**: Contains the controller functions for handling user registration and authentication.
- **userRouter.js**: Defines routes for user-related operations.
- **index.js**: Main entry point of the application.
- **.env**: Environment configuration file for MongoDB connection and SMTP settings.

## Tools and Libraries Used

- **Node.js**: JavaScript runtime environment.
- **Express**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and booking data.
- **bcryptjs**: Library for hashing passwords.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **nodemailer**: Library for sending emails for user notifications.

## Operations

1. **Home**: Displays a welcome message.
2. **User Registration**: Registers a new user.
3. **User Login**: Authenticates a user for login.

## Routes

| **Routes**                       | **Method** | **Endpoint**           | **Description**                              |
| -------------------------------- | ---------- | ---------------------- | -------------------------------------------- |
| [Home](#)                        | `GET`      | `/`                    | Displays a welcome message.                  |
| [Register User](#)               | `POST`     | `/api/user/register`   | Registers a new user.                        |
| [Login User](#)                  | `POST`     | `/api/user/login`      | Authenticates user login.                    |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Backend Source Link

For more details on the Gas Slot Booking App Backend, visit the [GitHub Repository](https://github.com/Ajith-11399/Gas-Slot-booking-app-backend).

## API Documentation - POSTMAN

Explore the API documentation for Gas Slot Booking App Backend on [Postman](https://documenter.getpostman.com/view/35036950/2sA3e2gpiA).
