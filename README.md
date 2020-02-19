# simple-rdc

Demonstrate executing a simple, Webdriver I/O-based automated test on the Sauce RDC platform.

## Setup

1. Install __Node.js__.  This project has been tested with __Node v12.12.0 LTS__.
1. Be sure to set an environment variable named __TESTOBJECT_API_KEY__ to point to a __Web__ project on https://app.testobject.com.
2. Clone this project out of GitHub.

    ```bash
    $ git clone https://github.com/billmeyer/simple-rdc
    ```

3. Install __Node__ dependencies:

    ```bash
   $ cd simple-rdc
   $ npm i 
    ```

## Execution

1. To run the mobile test, execute the following:

    ```bash
   $ npm run test-rdc
    ```

2. To run the desktop test, execute the following:

    ```bash
   $ npm run test
    ```