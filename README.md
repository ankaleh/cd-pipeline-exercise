# Duckburg's blogs - exercise for building CI/CD-pipeline

This repository is for the [Full Stack Open 2021 course](https://fullstackopen.com/en/) ([part 11](https://fullstackopen.com/en/part11)). 

([To the other repository of the course](https://github.com/ankaleh/full-stack-open-pokedex).)

The aim of this exercise was to build CI/CD-pipeline for some application. Here is used the blog app that was built in parts [4](https://github.com/ankaleh/full-stack-osa4-blogilista) and [5](https://github.com/ankaleh/full-stack-osa5-bloglist-fronted). 

[Duckburg's blogs](https://duckburg-blogs.herokuapp.com/) application is for saving and liking blogs of Duckburg. Donald Duck and Goofy have already registered: Donald Duck's username is "akuankka" and password "kosla313" while Goofy's username is "hessuhopo" and password "höhöö".

## Commands

First save your MONGODB_URI, TEST_MONGODB_URI and SECRET into the .env file.

***

Install dependencies by running `npm i` inside the root and inside the frontend folder.

***

`npm run dev` to run the backend in the development mode

`npm run dev-frontend` to run the frontend in the development mode

***

`npm run build:ui` to make a production build

`npm run start-prod` to run production build

***

`npm test:jest` to run tests

`npm run lint` to run eslint

***

To run the cypress tests start the backend in the testing mode by running `npm run start:test`. After that start the frontend and run `npm test:e2e` inside the frontend folder.




