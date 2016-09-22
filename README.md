# App Store 

Demo:[https://appstore-meteor.herokuapp.com]

## Introduction

- Designed and implemented an App Store with data-driven application architecture, Agile development and REST API.
- Built a crawler which crawled 1 million app information from Huawei app store(100 pages/second), and stored in MongoDB.
- Implemented front-end with React.js (ES6) and supported category view, auto loading and recommendation of relevant apps.
- Implemented back-end with Meteor.js Framework and data exchange with front-end using Publish/Subscribe mechanism.
- Stacks: Meteor.js, React.js, MongoDB, Python and deployed on Heroku: https://appstore-meteor.heroku.com

## Data flow

![](https://dl.dropboxusercontent.com/u/95833334/Image%20Hosting/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202016-09-22%2012.56.14.jpg)

## Index Page

![](https://dl.dropboxusercontent.com/u/95833334/Image%20Hosting/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202016-09-22%2012.59.14.jpg)

## App Page

![](https://dl.dropboxusercontent.com/u/95833334/Image%20Hosting/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202016-09-22%2012.59.51.jpg)

## Deploy on Heroku

1.Register account on Heroku and mLab
Heroku: http://bit.ly/2crdS6j
mLab: https://mlab.com/signup

2.Initialize the project as a Git repository
`git init`

3.Install Heroku on your computer
Mac: `curl https://install.meteor.com/ | sh`

4.Open the root folder of you Meteor project in console, login to Heroku from command line
`heroku login`

5.Create new Heroku application
 `heroku create <appname> --stack cedar --buildpack https://github.com/oortcloud/heroku-buildpack-meteorite`

6.Register account on mLab
https://mlab.com/signup/

7.Export MongoDB to bson file
`mongodump -d <database name> -o <directory_backup>`

8.Create a collection on mLab

9.Import you MongoDB to mLab
`mongorestore -h ds0<your_ID>.mlab.com:<your_ID> -d <collection_name>-c apps -u <user> -p <password> <bson_file_name>`

10.Setup MONGO_URL for your Meteor application
`heroku config:set MONGO_URL=mongodb://<username>:<password>@ds0<your_ID>.mongolab.com:<your_ID>/<dbname>`

11.Set the root URL
`heroku config:set ROOT_URL=http://<appname>.herokuapp.com`

12.Add the Heroku Git repository as another remote to your git repository and push the code to that remote.
`git remote add heroku git@heroku.com:appname.git`

13.Push to the server
`git push heroku master`

14.The application will be automatically deployed and becomes accessible on appname.herokuapp.com.
