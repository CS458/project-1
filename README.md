# Software Verification and Validation - Project 1

Group Members: Osama Tanveer, Mannan Abdul

## Project Setup

Using the Facebook API requires a secure HTTPS connection even on localhost. To use that feature of the project, it is important to complete the setup for this to have it working as intended. Here are the steps:
1. install `mkcert`, you can google how to that for your OS
2. in your OS terminal, run `mkcert -install`
3. navigate to the root directory of the project in the terminal and run `mkcert localhost`
4. (Optional) if you are pushing this code to a repository, make sure to add these files to .gitignore

Add the following to a .env file in the project root folder
* HTTPS=true
* SSL_CRT_FILE=localhost.pem
* SSL_KEY_FILE=localhost-key.pem
* HOST=localhost
* PORT=8080

The setup is now done.

## Project Structure

> * node_modules (absent on Github)
> * public
> * src
>   * api
>   * assets
>   * components
>   * config
>   * pages
>   * redux
>   * routes
>   * App.js
>   * index.js
>   * style.css
> * tests
>   * testcase
>     * testcase1.js
>     * testcase2.js
>     * testcase3.js
>     * testcase4.js
>     * testcase5.js
>   * main.js

The files that are of our concern are the following:
1. All files related to building the application in `React` are in the `src` folder.
2. All files related to testing are in the `tests` folder.

## How To Run the Code

### Application
1. The application was made using React, so it needs some dependencies before it can be run. Node.js and the latest version of npm need to be installed though we suspect they are bundled.
2. Open the root directory of the project and run `npm i` in the terminal to install all the needed dependencies.
3. to run the project, use the command `npm run start` in the terminal which should start up the application.
4. The application will run at `http://localhost:3000`

### Selenium Tests
1. To run these tests, the application needs to be running first.
2. To launch the tests, navigate to the tests folder in the terminal and run `node main.js`
3. The testcase files are in the `testcases` folder and can be viewed there. The `main.js` file will automatically load and run them for you.

