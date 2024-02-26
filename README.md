# Object-Relational Mapping (ORM) Challenge: E-commerce Back End

## Overview
In the ever-evolving electronics industry, e-commerce has become a cornerstone, enabling businesses and consumers to buy and sell products online with ease. With the industry's value hitting US$2.54 trillion in the United States as of 2021, understanding the architecture behind these platforms is crucial for developers. This project challenges you to build the back end for an e-commerce site, leveraging Express.js and Sequelize to interact with a MySQL database, thereby equipping your internet retail company to stand tall among competitors.

## Demo
A video walkthrough of this project can be found here: https://drive.google.com/file/d/1PHHy8Ldhr7P1Umjflp0nGp4q7BiXgGOc/view

## User Story
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## Getting Started
To get started, ensure you have MySQL2 and Sequelize packages installed to connect your Express.js API to a MySQL database. Additionally, utilize the dotenv package to securely store your database credentials.

### Usage Instructions
1. **Setup Repository**: Clone the repository, run `npm i` to install dependencies, and update your `.env` file with the necessary database configurations.
2. **Database Creation**: Utilize the `schema.sql` file in the `db` folder to create your database using MySQL shell commands. Remember to store your MySQL username, password, and database name as environment variables for security.
3. **Seeding Data**: Execute `npm run seed` to populate your database with test data. Following this, launch the server with `npm start` or `nodemon` to sync Sequelize models to the MySQL database.
4. **Development Database**: Generate a development database with test data using the schema and seed commands as outlined.
5. **Testing Endpoints**: Use Insomnia Core to test endpoints at `http://localhost:3001`. Ensure you can successfully perform API GET, POST, PUT, and DELETE operations for categories, products, and tags, thereby confirming the ability to manipulate data within your database.

## Dependencies
### DevDependencies
- **nodemon**: `^2.0.3`

### Dependencies
- **dotenv**: `^8.2.0`
- **express**: `^4.17.1`
- **mysql2**: `^2.1.0`
- **sequelize**: `^5.21.7`

## Repository
This repo is located here: https://github.com/Joyce77777777/Ecommerce-Backend/

