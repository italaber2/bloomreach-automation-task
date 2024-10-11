# arkadium-automation-task

### Installation

To install the project, clone the repo and run:

```
npm install
```

### Usage

Before running the tests, we need to create and configure the .env file.

```
touch .env
```

```
cp example.env .env
```

The actual login credentials are those provided in the task description PDF. Copy the values into the .env file and then run the tests.

The Cypress tests can be run either in headless mode:

```
npm run cy:run
```

or via the Cypress UI:

```
npm run cy:open
```
