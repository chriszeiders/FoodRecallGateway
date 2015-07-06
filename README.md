# Food Recall Gateway [![Build Status](https://travis-ci.org/DRTforGSA18F/FoodRecallGateway.svg?branch=master)](https://travis-ci.org/DRTforGSA18F/FoodRecallGateway)

## Working Site:
[Food Recall Gateway](http://foodrecallgateway.herokuapp.com/)

## Getting Started
This project requires node.js to run.


```sh
$ git clone https://github.com/DRTforGSA18F/FoodRecallGateway.git # or clone your own fork
$ cd FoodRecallGateway
$ npm install & bower install
$ grunt serve
```

Your app should now be running on [localhost:8000](http://localhost:8000/).

##Overview
DRT embraced the spirit of the 18F challenge from the beginning.  We understand that for the government to bring efficient, user-centric digital services to the American people at scale, it must partner with industry.  And we understand that good partnership means both sides working for each other.  DRT was prepared to submit on the government’s original schedule, ultimately deciding to hold to that original 26 June deadline.  Our beta is presented at the link above, and is well on its way to being an MVP that enhances American’s interaction with the government’s available food safety data.  

##One Leader
Geoff Dick was our product owner, with ultimate accountability for delivery. Geoff has over 15 years of experience delivering user-centric digital products in the commercial and federal sectors.

##The Team
The DRT 18F ADS 1 development team has demonstrated experience bringing improved digital services to Americans.  We are compriseda of seasoned products managers, developers, and designers who both work and play in this space.

##Technology Stack
1. Front-End Framework: Bootstrap (HTML, CSS, and JS) - http://getbootstrap.com/
2. UI Element: Selectize.js - http://brianreavis.github.io/selectize.js/
3. Web Scaffolding Tool: Yeoman/Yo - http://yeoman.io/
4. Build Tool: Grunt - http://gruntjs.com/
5. Package Managers: npm - https://www.npmjs.com/ and Bower - http://bower.io/
6. Application Runtime Environment: Node.js (notably express, passport, morgan)
7. Unit Testing: Jasmine and Instanbul
8. Continuous Integration: Travis-CI
9. Continuous Deployment: Heroku
10. Application Lifecycle Management: Trello
11. Team Communication: Slack 

##Deployment
The prototype is deployed on Heroku, a Platform as a Service (PaaS) provider.  The URL is http://foodrecallgateway.herokuapp.com/.

##Test
The DRT dev team wrote unit tests using Jasmine (a behavior-driven development framework).  These unit tests executed local developers' environment prior to executing a pull request.  The unit tests are located in the Github repository:  https://github.com/DRTforGSA18F/FoodRecallGateway/tree/master/test.  
Additionally, Travis-CI executed tests for each build.

##Continuous Integration 
The DRT development scheme integrated GitHub with Travis-CI to achieve continuous integration (CI), and integrated with PaaS provider Heroku for continuous deployment. The CI system executed tests for each pull request and merged to the master branch.  Once the CI passed on the master branch the application was automatically deployed to foodrecallgateway.herokuapp.com.  

##Configuration Management
The DRT configuration management approach leveraged the Git code repository to manage code changes, pulls, and merges.  We applied a tag/label for the prototype deliverable on 25 June 2015.

##Continuous Monitoring
The DRT team integrated New Relic APM and BROWSER instances to monitor and understand the site's performance from the end-user perspective.






