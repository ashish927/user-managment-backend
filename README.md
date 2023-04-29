# User Management Backend

This project is a sample RESTful API built with JavaScript and Express.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js 
- npm 

### Installing

Follow these steps to get a development environment running:

1. Clone the repository:

   ```
   git clone https://github.com/ashish927/user-managment-backend.git
   ```

2. Navigate to the project directory:

   ```
   cd user-managment-backend
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Configuration

In order to configure the project, you need to set up the following environment variables:

- `PORT`: The port on which the server will run (default: 3000)
- `DATABASE_URL`: The URL of your MongoDB database

You can set these variables in a `.env` file in the root directory of the project:

```
PORT=3000
DATABASE_URL=mongodb://localhost:27017/my-database
```

### Running the Application

To start the server, run the following command:

```
npm start
```

The server should now be running on `http://localhost:3000`.

## API Documentation

### Endpoints

- `GET /api/users`: Get all users.
- `GET /api/users/:id`: Get a specific user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update an existing user.
- `DELETE /api/users/:id`: Delete a user.

### Request Examples

**GET /api/users**

Response:
```
Status: 200 OK
[
  {
    "id": "1",
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": "2",
    "name": "Jane Smith",
    "email": "jane.smith@example.com"
  }
]
```

**GET /api/users/1**

Response:
```
Status: 200 OK
{
  "id": "1",
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

**POST /api/users**

Request body:
```
{
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com"
}
```

Response:
```
Status: 201 Created
{
  "id": "3",
  "name": "Alice Johnson",
  "email": "alice.johnson@example.com"
}
```

**PUT /api/users/3**

Request body:
```
{
  "name": "Alice Thompson",
  "email": "alice.thompson@example.com"
}
```

Response:
```
Status: 200 OK
{
  "id": "3",
  "name": "Alice Thompson",
  "email": "alice.thompson@example.com"
}
```

**DELETE /api/users/3**

Response:
```
Status: 204 No Content
```

## Built With

- JavaScript
- Express
- MongoDB (for data storage)

## Authors

- Ashish Rathore

## License

This project is licensed under the [MIT License](LICENSE).
