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
				

#### Styles 

We are using sass and letting webpack compile the sass into main.scss. Also take
note of the 7-1 style architecture. There are several modulized stylesheet
folders. All of which will contain an *_all* partial. The all file will have all
of the reletive files compiled into it. All of the *all* folders are those
imported into *main.scss*. 

We are also using bootstrap?
