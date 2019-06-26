# MongoExpressMongooseApi
A simple example API written in JS using Express framework with Mongoose ODM running on NodeJS.

Prerequisite for building and running the app:

Installed node, npm, local mongodb

### Installation


Install the dependencies and devDependencies and start the server.

```sh
$ cd MongoExpressMongooseApi
$ npm install
$ npm run development
```

### Usage and Api endpoints

The api is accesed through the address http://localhost:3000/ with the following endpoints:

* GET - /products - returns all products
* GET - /product/:id - returns the specified product with the id
* POST - /product - saves the specified product object
* DELETE - /product/:id - removes the specified product with the id
* PUT - /product - updates the specified product 