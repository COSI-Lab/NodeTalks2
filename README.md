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
