[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# tech-blog

Title: ***Tech Blog*** \
Developer: **Zackery Arsement** \
Deployment Date: 2/21/2022 \
For: UT JavaScript Coding Bootcamp

# Access Project

- ### [Github Repository](https://github.com/ZackeryArsement/tech-blog)
- ### [Deployed Application](https://tech-blog-zja.herokuapp.com/)

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
* [Heroku](https://heroku.com/)
* [Handlebars](https://handlebarsjs.com/)

# Summary:

![Homepage of Tech-Blog](https://github.com/ZackeryArsement/tech-blog/blob/main/public/images/tech-blog-homepage.png)

* The ***Tech Blog*** provides the user with an online blog to share information and ask questions from other users of our service.
* There is a homepage that any user can go to, regardless of their login status.
* The homepage list all the blog post from any user who has accessed the site.
* You can click on a blog to view any comments it may have.
* If you are logged in you can add a comment to any post.
* If you are logged in you can go to your personal dashboard, which displays all your past post.
* If you are logged in you can add new post or delete old post.
* When you log out and log back in all your data is still saved to your profile.

# Development:

The ***Tech Blog*** application works by using a sequelize database to store information. This database is coupled with handlebars.js provide a GUI for our web applicaiton. The database is created using MySQL and then manipulated using sequelize that accesses an online database through Heroku. This application's database uses the ***Model*** class, to store information for Users, Posts, and Comments. The Classes are then linked together through Model native methods such as '.belongsTo', '.hasMany', '.belongsToMany', which allows us to see which data values from different tables are associated to one another. To access our data we established routes using express that allow the user to GET, POST, and DELETE data through GUI elements such as buttons and input fields.

# Questions

Email:
zarsement@hotmail.com