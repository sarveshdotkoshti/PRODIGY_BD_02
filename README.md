# User Management API with Relational Database Integration

This project extends a REST API to use a relational database (MySQL) for persistent storage. The API performs CRUD operations on a `Users` resource, using Sequelize ORM for database integration. The database connection is managed via environment-specific configurations and environment variables for sensitive data such as database credentials.

## Features

- Perform **Create**, **Read**, **Update**, **Delete** (CRUD) operations on users.
- Users have the following attributes: `id` (UUID), `name`, `email`, and `age`.
- Data is stored in a MySQL database using Sequelize ORM.
- Implemented **connection pooling** for database efficiency.
- Uses **environment variables** for configuring the database credentials.
- Migrations to create the users table with the correct schema.

## Technologies Used

- **Node.js**: JavaScript runtime to build the API.
- **Express.js**: Web framework for building the API.
- **Sequelize ORM**: To interact with the MySQL database.
- **MySQL**: Relational database for persistent storage.
- **dotenv**: Loads environment variables from a `.env` file.
- **UUID**: For generating unique IDs for users.

## Installation

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **MySQL** (or a MySQL-compatible database such as MariaDB)

### Steps to Set Up the Project

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd user-management-api
