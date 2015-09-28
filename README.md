## Readme 

A good starter project to investigate is
[ Here ]( http://fredguest.com/2015/03/06/building-a-stateless-rails-api-with-react-and-twitter-oauth/ )
To develop you must have npm installed.

				brew install npm

This is a test project to try and accomplish three things.

* Set up react.js with webpack.js
* Become familiar with react-routes.js
* Set up pliny to interact with react
* Set up dev environment with minitest for business logic

**Check out these configurations.**

* *package.js*, used for npm dependencies including react 
* *webpack.config.js*, used to define input and output files 

To start the web server. Visit *localhost:8080*

				npm run devserve

To compile with webpack into modules. Compiled to *./public/bundle.js*

				npm run devbuild
				

#### Test

We are using jest as a testing framework. Here are a few references that helped
me get started:

* [jest with react](https://facebook.github.io/jest/docs/tutorial-react.html)
* [test suite with jest and react](http://www.jackcallister.com/2014/12/01/building-a-test-suite-in-react-js.html)
* [test utilities](https://facebook.github.io/react/docs/test-utils.html)

To create a new test for a component follow this process: 

1. `touch __test__/components/ComponentName.js` 

2. require the following dependencies: 

        var React = 'react/addons

        var TestUtils = React.addons.TestUtils

        var ComponentName = require(path_to_component) 

**To run the test**

        npm test 

**SEE configs for test here:** 

* *root/package.json*
    * LINE 39 'jest'

#### Styles 

We are using sass and letting webpack compile the sass into main.scss. Also take
note of the 7-1 style architecture. There are several modulized stylesheet
folders. All of which will contain an *_all* partial. The all file will have all
of the reletive files compiled into it. All of the *all* folders are those
imported into *main.scss*. 


