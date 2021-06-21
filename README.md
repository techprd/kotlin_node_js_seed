[![Build Status](https://travis-ci.org/techprd/kotlin_node_js_seed.svg?branch=master)](https://travis-ci.org/techprd/kotlin_node_js_seed)

# Kotlin Node.js Seed Project
This project is an application skeleton for a typical Node.js app written entirely with Kotlin.

## Node.js app written with Kotlin

### Full Tutorial coming soon
<a href="http://techprd.com/">Node.js app with Kotlin</a>

#### DEMO:

https://kotlin-nodejs.herokuapp.com/

### What's in this project?

1.  express.js to run server and routing
2.  ejs templating engine for express.js
3.  Kotlin Dependencies
4.  kotlin-js to compile/trans-compile kotlin to js


### How to Use:

#### Compile Kotlin  to JS using gradle

###### On Windows
`$ gradlew.bat build`

###### On Linux / Mac
`$ ./gradlew build`

#### Run Node Server
`$ ./gradlew :backend:nodeRun`

#### Run web-pack dev server with continues reload
`$ ./gradlew :webapp:browserDevelopmentRun -t`

### Project structure
This project consist of three modules:

- backend
  - this is where server-side node.js implementation exists
- common
  - consists of shared implementations between back-end and front-end
  - do not include any secrets in this module as it is share with front-end 
- webapp
    - this is the front-end module that renders the single page application

#### Kotlin official site
https://kotlinlang.org/docs/reference/js-overview.html

## To Do
1. <s>add frontend framework</s>
2. <s>use jetbrains frontend plugin for dependency management and hot-reload</s>
3. add unit tests
4. add end-to-end tests

