[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# tech-blog

Title: ***E-Commerce Back End*** \
Developer: **Zackery Arsement** \
Deployment Date: 2/10/2022 \
For: UT JavaScript Coding Bootcamp

# Access Project

- ### [Github Repository](https://github.com/ZackeryArsement/e-commerce-back-end)
- ### [Server Start Up Walkthrough](https://watch.screencastify.com/v/7lwFBC7MW909a4pP8iWn)
- ### [GET and POST Walkthrough](https://watch.screencastify.com/v/36KavCR3cGAEGnZBT4Ku)
- ### [DELETE and PUT Walkthrough](https://watch.screencastify.com/v/iuHCaMWQQmuqxybDZMF9)

# Table of Contents

-[Built-With](#built-with) \
-[Summary](#summary) \
-[Development](#development) \
-[Questions](#questions)

# Built-With

* [Javascript](https://javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [MySQL](https://www.mysql.com/)
* [Sequelize](https://sequelize.org/)
* [Express.js](https://expressjs.com/)
* [Insomnia](https://insomnia.rest/)

# Summary:

![Insomnia Data Example](https://github.com/ZackeryArsement/e-commerce-back-end/blob/main/Assets/e-commerce-insomnia-example.png)

* The ***E-Commerce Back End*** provides the user with an e-commerce database.
* To initialize the database the user logs into the MySQL Shell, through the db folder, using the command below: 
```
mysql -u root -p
```
* The user seeds the database by entering the below command in the main folder:
```
node ./seeds/index.js
```
* With the database seeded the user can now start the server using the command:
```
npm start
```
* To interact with our database we use Insomnia with the base URL of '**http://localhost:3001**'
* We can GET or POST data in our URL by adding '/api/***route name***'
* If we want to GET, POST, or DELETE a specific piece of data we use the prior URL along with '/***id***'

# Development:

The ***E-Commerce Back End*** application works by using a sequelize database to store information. This database is coupled with Insomnia to act as a GUI for the user to more easily view and manipulate the database information. The database is created using MySQL and then seeded using sequelize that accesses a local .json file. This application seeds the database using the ***Model*** class, where we determine the parameters we want each value in our database to contain. The Classes are then linked together through Model native methods such as '.belongsTo', '.hasMany', '.belongsToMany', which allows us to see which data values from different tables are associated to one another. To access our data we established routes using express that allow the user to GET, POST, PUT (Update), and DELETE data through Insomnia URLs.

# Questions

Email:
zarsement@hotmail.com