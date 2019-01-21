# Servicio para videojuego android en Unity


## Requirements

[NodeJS](https://nodejs.org/en/)

Install global TypeScript and TypeScript Node

```
npm install -g typescript ts-node
```

## Getting Started

You should install [MongoDB](https://docs.mongodb.com/manual/administration/install-community/) on your local machine, or use other services such as [mLab](https://mlab.com/) or [Compose](https://www.compose.com/compare/mongodb)

After that, you will have to replace the mongoURL with your MongoDB address in *lib/app.ts*

## Clone this repository

```
git clone git@github.com:dalenguyen/rest-api-node-typescript.git .
```

Then install the dependencies

```
npm install
```

## Start the server

Run in development mode

```
npm run dev
```

Run in production mode 

```
npm run prod
```

## Testing over HTTP (tag [v1.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0))

The default URL is: *http://localhost:3000*

+ GET all contacts

```
Send GET request to http://localhost:3000/contact/
```

## Testing over HTTPs (tag [v2.0.0](https://github.com/dalenguyen/rest-api-node-typescript/tree/v1.0.0))

The default URL is: *https://localhost:3000*

The key and cert in the config folder is for testing purpose only. You should generate your own.

*Reference from [Lynda.com](https://www.lynda.com/Node-js-tutorials/Next-steps/633869/671263-4.html)*