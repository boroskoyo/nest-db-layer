# db-layer for NestJS

The "db-layer" project allows users to define a separate database layer in their NestJS applications. It helps in separating the database and ORM functions from the services, making it easier to switch between different ORMs in the future. This approach provides flexibility for future changes in the choice of ORM without impacting the application's business logic.

## Getting Started

To get started with the "db-layer" project, follow these steps:

1. Clone the repository
2. Install dependencies:
```shell
npm install
```
3. Seed the database (using Prisma):

    Run the following command to apply database migrations and seed initial data:
```shell
npx prisma migrate dev --name init
npx prisma db seed --preview-feature
```
4. Start the application:
```shell
npm run start
```

The application will start running on the specified port (default: 3000).

## Example Service

An example service, UserService, is provided in the project to demonstrate the usage of the "db-layer" module. You can find the implementation in the user.service.ts file.

The UserService showcases how to interact with the database layer and perform operations like creating users, fetching user details, updating user information, and deleting users.

Feel free to modify and extend the example service according to your specific application requirements.