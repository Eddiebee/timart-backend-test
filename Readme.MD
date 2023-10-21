# Timart Backend Test - Node.js API

GraphQL + Sequelize + NodeJS + Express + MySQL

## Install

Remember! You have to execute the following command after cloning this repository:

```bash
npm install
```

## First steps

In /config/config.json you will find all you need to connect this project with your database. In this
case, I have used MySQL as db. Let's see:

```json
"development": {
    "username": "root",
    "password": "password",
    "database": "database",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }

```
You can (and must) change the username and password to your own credentials in your local MySQL configuration. You can also change the "database" field, that's the name the database will have.

To start working with this project, you have to run the following commands:

The first one is to create our new database in MySQL:
```bash
npx sequelize-cli db:create
```
Secondly, we have to execute our migrations. These will create the tables structure in our database, as well as the associations between entities and their attributes constrainsts. So let's run:

```bash
npx sequelize-cli db:migrate
```

Now we can run our application. 

```bash
npm start
```
# HAVE YOU CHANGED THE STRUCTURE OR TABLES IN DATABASE?

If you add new models and migrations, or deleted any table, or you just filled your database with lots of garbage, you can do all the previous steps BUT YOU HAVE TO RUN FIRST THE NEXT COMMAND:
```bash
npx sequelize-cli db:drop
```

## Where is this project running?

The server port by default is 4000. Run this and you will have this
beautiful backend in http://localhost:4000/graphql

## Where can I work with this backend?

Once you run this project, you can navigate to http://localhost:4000/graphql and you will see the graphic interface to work with, and all the documentation you will need.

## Autor

Eddie (eddiebee) Otudor

You can find me on: 
- [Linkedin](https://www.linkedin.com/in/eddieotudor/)
- [Twitter](https://twitter.com/eddie_otudor)
- [Instagram](https://www.instagram.com/realeddiebee)