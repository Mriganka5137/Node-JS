# Node.js and Express.js - Full Course from freeCodeCamp.org

1. GLOBALS - NO WINDOW
   - __dirname - path to current directory
   - __filename - file name
   - require - function to use modules (CommonJS)
   - module - info about current module (file)
   - process - info about env where the program is being executed

2. Modules
    - CommonJS, Every file in Node is a module
    - Modules, Encapsulated Code (only share minimum)
    - To make the module available to other files, we use the module.exports
    - To import the module, we use the require function

3. OS Module
    - const os = require('os')
    - info about current user
    - method returns the system uptime in seconds
    - info about current os
    - info about the cpu

4. Path Module
    - const path = require('path')
    - separator `path.sep`
    - method returns the last portion of a path `path.basename`
    - method joins the specified path segments into one path `path.join`
    - method resolves a sequence of paths or path segments into an absolute path `path.resolve`
    - The resolve method does not care if the folder is present or not, it will create a path string that can be used to create folders if required.

5. FS Module
    1. Synchronous
        - const { readFileSync, writeFileSync } = require('fs')
        - method returns the content of the file `readFileSync`
        - method creates a new file if the specified file does not exist `writeFileSync`
    2. Asynchronous
        - const { readFile, writeFile } = require('fs')
        - method returns the content of the file `readFile`
        - method creates a new file if the specified file does not exist `writeFile`
        - method appends the specified content at the end of the specified file `appendFile`

6. HTTP Module
    - const http = require('http')
    - method creates an HTTP server `createServer`
    - method sends a chunk of the response body `write`
    - method signals to the server that all of the response headers and body have been sent `end`
    - method sets the HTTP status for the response `writeHead`
    - method listens for requests on a given access port `listen`


# Promises, Async, Await
1. Promises
    - A Promise is an object representing the eventual completion or failure of an asynchronous operation, like fetching data from a server. It has three states:
        - Pending: Initial state, neither fulfilled nor rejected.
        - Fulfilled: Meaning that the operation completed successfully.
        - Rejected: Meaning that the operation failed.
    - A Promise is constructed with a function that has two parameters, usually named resolve and reject. You call resolve(value) when the asynchronous operation succeeds, and reject(error) when it fails.

    ```
        let myPromise = new Promise((resolve, reject) => {
            let success = true;
            if(success) {
                resolve("The operation succeeded");
            } else {
                reject("The operation failed");
            }
        });

        myPromise.then((message) => {
        console.log(message);
        }).catch((message) => {
        console.log(message);
        });
    
    ```

2. Async
    - The async keyword is added to functions to tell them to return a promise rather than directly returning the value.
    - The await keyword is added before a function call to tell the program to wait for the promise to resolve before continuing. This can only be used inside an async function.

    ```
        async function myFunction() {
            let myPromise = new Promise((resolve, reject) => {
                let success = true;
                if(success) {
                    resolve("The operation succeeded");
                } else {
                    reject("The operation failed");
                }
            });

            let result = await myPromise;
            console.log(result);
        }

        myFunction();
    ```

3. Await
    - The await keyword is added before a function call to tell the program to wait for the promise to resolve before continuing. This can only be used inside an async function.

    ```
        async function myFunction() {
            let myPromise = new Promise((resolve, reject) => {
                let success = true;
                if(success) {
                    resolve("The operation succeeded");
                } else {
                    reject("The operation failed");
                }
            });

            let result = await myPromise;
            console.log(result);
        }

        myFunction();
    ```