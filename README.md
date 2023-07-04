# db-layer for NestJS

The "db-layer" project allows users to define a separate database layer in their NestJS applications. It helps in separating the database and ORM functions from the services, making it easier to switch between different ORMs in the future. This approach provides flexibility for future changes in the choice of ORM without impacting the application's business logic.

### Problem:
In a typical NestJS application, the business logic and data access logic are often tightly coupled. Services directly interact with the database or ORM, making it difficult to switch to a different ORM or make changes to the database layer without impacting the entire application.

### Solution:
The "db-layer" project addresses this problem by providing a separate database layer. It allows users to define a clear separation between the database and ORM functions and the services. This separation provides flexibility and modularity, making it easier to switch between different ORMs or make changes to the database layer without affecting the application's core logic.

### How "db-layer" Helps:

  - Database Independence: By creating a separate database layer, the "db-layer" project allows you to write code that is independent of any specific ORM or database implementation. This independence makes it easier to switch between different ORMs (e.g., TypeORM, Prisma) or databases (e.g., PostgreSQL, MySQL) based on your project's requirements.

  - Simplified Testing: With a separate database layer, you can mock or stub the database service during unit tests. This allows you to isolate the service logic from the actual database, making your tests faster and more focused.

  - Modularity and Reusability: The "db-layer" project promotes modularity by separating concerns. You can encapsulate database-related functionality within the database layer, making it reusable across different services or modules in your application.

  - Future-Proofing: As your application evolves, the ability to switch between different ORMs or make changes to the database layer becomes crucial. By using the "db-layer" project, you can easily adapt to changing requirements, technology advancements, or performance optimizations without rewriting your entire application.

Overall, the "db-layer" project helps in creating a more maintainable, scalable, and flexible NestJS application by decoupling the database and ORM functions from the services. It empowers developers to make informed choices about the database technology and adapt to future changes with minimal effort and impact on the application's core logic.

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