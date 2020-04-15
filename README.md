# NodeTalks2

[![codecov](https://codecov.io/gh/COSI-Lab/NodeTalks2/branch/master/graph/badge.svg)](https://codecov.io/gh/COSI-Lab/NodeTalks2)
![Node.js CI](https://github.com/COSI-Lab/NodeTalks2/workflows/Node.js%20CI/badge.svg)

## Installation

Make sure Node.js is installed and run `npm ci` in the app's directory which uses the project's `package-lock.json` file to install dependencies. This will install the required node modules to run the app and will not alter the `package.json` file or the package-locks. For more information, check out the documentation for [npm](https://docs.npmjs.com/) and [npm-ci](https://docs.npmjs.com/cli/ci.html).

Running the app in production mode can be done using `npm start`. This means the entry point for the app will be run where the entry point is specified in `package.json` under `main`.

When developing for Node Talks 2, you may find it useful to run the command `npm run dev`. This means the `dev` script in `package.json` will be executed and the `nodemon` will run on the app's entry point. This will automatically restart the server when a change is made. The npm page for the `nodemon` module can be found [here](https://www.npmjs.com/package/nodemon) and its documentation [here](https://github.com/remy/nodemon#nodemon).

### TLDR

To install, run `npm ci`.

To run app in prod, do `npm start`.

To run app in dev mode, do `npm run dev`.

## Development

There are many useful tools for this project that will assist developement in various ways:

- `npm run coverage`:  runs the tests in `test/` and the `c8` module generates the directory `coverage/` which contains the report. This report contains details on which lines of code aren't being covered by the tests. See more about `c8` [here](https://www.npmjs.com/package/c8).

- `npm run dev`: runs the app with `nodemon` in development mode. This module will restart the app every time a change is saved, saving you time from having to manually kill the app and start it again. See more about `nodemon` [here](https://www.npmjs.com/package/nodemon).

- `npm run format`: uses `standard` module for code formatting and will try to fix inconsistencies. See the documentation for StandardJS [here](https://www.npmjs.com/package/standard#usage).

- `npm run lint`: runs `standard` on codebase and `eslint` on the tests. This module will use the linting rules specified in `.eslintrc.json` to identify problematic patterns in the code. See more about `eslint` [here](https://www.npmjs.com/package/eslint).

- `npm run mkdocs`: runs `jsdoc` using the `conf.json` configuration file. This script will create the directory `docs/` which contains documentation. This is done by generating a webpage that uses the JSDoc comments in the codebase. You can view the nicely styled/formatted docs page by opening `docs/index.html`. For more information on JSDoc look [here](https://jsdoc.app/about-getting-started.html).

- `npm run test`: uses the `mocha` testing framework for tests. See more about Mocha JS [here](https://mochajs.org/).

- `lint-staged` and `husky` will run right before a commit is made. These modules will perform static code analysis before a commit goes through. This is convenient as it will notify you if linting fails and prevent problematic JS patterns from entering the codebase. See more about `lint-staged` [here](https://github.com/okonet/lint-staged#readme) and `husky` [here](https://github.com/typicode/husky#readme).
