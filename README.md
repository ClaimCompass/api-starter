# API Starter
A REST API boilerplate using Sequelize, Express and Commander

## Prerequisites
When you first launch your app you will get an error similar to:
```bash
Error: Please install 'pg' module manually
```

The database driver is not included by default in this package make sure to install it by running the appropriate npm command, for example:
```bash
npm install --save pg
```

## Getting started

To get going, fork this repository. Then run:
```bash
npm install
```

To set up a local sqlite database first install sqlite:
```bash
npm install sqlite3
```

Then create the database by running:
```bash
npm run sequelize -- db:migrate
```

Finally populate the database with some dummy data:
```bash
npm run sequelize -- db:seed:all
```

You are good to go!

## CLI
The boilerplate comes with the [Sequelize CLI](https://github.com/sequelize/cli) pre-installed and setup as an npm script. The CLI is available through the script `npm run sequelize`.

### Create a model
```bash
npm run sequelize -- model:create --name User --attributes email:string,password:string
```

### Create migration
```bash
npm run sequelize -- migration:create --name create-user
```

### Create seed
```bash
npm run sequelize -- seed:create --name create-users
```

### Run migration
```bash
npm run sequelize -- db:migrate
```

### Run seed
```bash
npm run sequelize -- db:seed:all
```
