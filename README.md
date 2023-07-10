# challenge-rest-api

# challenge-webui
### Technologies
* Jest
* Supertest
* Typescript
* dotenv (to load .env file with environment variables)

### How to run
* Install dependencies:  
```
npm install
```
* Install allure reporter in local machine  
https://docs.qameta.io/allure/#_get_started  
    * Install on Windows:  
    ```
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    irm get.scoop.sh | iex
    scoop install allure
    ```
    * Linux:  
    ```
    sudo apt
    add repository ppa:qameta/allure
    sudo apt get update
    sudo apt get install allure
    ```
    * Mac:
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    brew install allure
    ```
* Run api test
```
npm test
```

## Reports:
1. Basic html report can be found in report-html folder once test has finished 
2. Allure report is also enabled but make suer that allure first is installed then run the command `allure serve allure-results` to see the html report in allure service

### Notes:
* Tests can be found in tests/football-api
* The class core/rest_api/request.ts is intended to hide all the details of requests implementationa and improve readability on tests
* Base URL is read from .env file that is hardcoded for this challenge 
* The hooks/jestGlobalSetup loads the environment variables using the dotenv library