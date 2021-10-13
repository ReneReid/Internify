### Internify

https://internify-cpsc455.herokuapp.com/

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Internify — A CPSC 455 Project](#internify-a-cpsc-455-project)
    - [Project Description](#project-description)
    - [Minimal Requirements](#minimal-requirements)
    - [Standard Requirements](#standard-requirements)
    - [Stretch Requirements](#stretch-requirements)
    - [Technologies Used](#technologies-used)
      - [Unit 1 - HTML, CSS, and JS](#unit-1-html-css-and-js)
      - [Unit 2 - React](#unit-2-react)
      - [Unit 3 - Node and Express](#unit-3-node-and-express)
      - [Unit 4 - NoSQL with MongoDB](#unit-4-nosql-with-mongodb)
      - [Unit 5 - Release Engineering (Continuous Integration)](#unit-5-release-engineering-continuous-integration)
    - [Above and Beyond Functionality](#above-and-beyond-functionality)
    - [Next Steps](#next-steps)
    - [List of Contributions](#list-of-contributions)

<!-- /code_chunk_output -->

### Project Description

[Internify](https://internify-cpsc455.herokuapp.com/) is a job-posting creation tool that helps recruiters build the ideal job description for workers in tech. The tool stores demographic data via survey results and assesses your job posting dynamically as you are creating it, providing detailed summary on how well your post performs against our matching algorithm. Internify assists in creating accurate and detail-oriented job descriptions to help recruiters reach their ideal candidate.

### List of Contributions
- ##### [Aleem Tariq](https://github.com/aleemer)
  - Developed and designed matching algorithm and model schemas 
  - Developed survey and recorded participation results
  - Implemented react redux reducers and front-end pages
- ##### [Rene Reid](https://github.com/ReneReid)
  - Developed and designed matching algorithm and model schemas
  - Implemented Firebase authentication
  - Collected and compiled survey results to generate student models based on survey data
  - Implemented react redux reducers and front-end pages
- ##### [Jude Shamsi](https://github.com/JudeShamsi)
  - Developed skeleton of full-stack app by setting up Redux.js, Mongoose ODM, MongoDB Atlas connection, Express.js and Axios to connect front-end to back-end services
  - Implemented RESTful APIs, developed front-end pages, and refactored code to utilize Redux.js state management
  - Engineered CI pipeline and Heroku deployment
  - Tech lead and Product Management on story priority and planning
- ##### [Tommy Tho](https://github.com/tommytwm)
  - Implemented Firebase authentication
  - Primary UI/UX designer and front-end development
  - Team lead, tech lead, and product management on story priority and planning, as well as setting style conventions for project
  - Implemented back-end routes and endpoints

### Technologies Used
#### Unit 1 - HTML, CSS, and JS
The first few pages of the app, particularly the Landing and Login pages were developed with vanilla HTML, CSS, and JavaScript. We implemented some basic HTML elements such as input forms, buttons, images and svg elements to display information regarding our service, and created placeholders for users to input login and account creation information. We used CSS to style the elements grouped in different containers, opting for custom margins, paddings, gradients, and display types (i.e. flex, inline, grid). Finally, we used JavaScript to enable callback functions on our input forms to display alerts as placeholders for what would eventually be our authenticated login. 

#### Unit 2 - React, Redux
The introducuction of React framework to our repository opened up opportunities to speed up the process of front-end development. For instance, we opted use of [Material-UI](https://material-ui.com/) library for their styled components. Adhering to [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principles, we created custom Material-UI components as our reusable atomic components such as buttons, labels, and text fields, which would be reused in bigger components like modals, tables, and templates. Moreover, we implemented use of React Router to connect all of our pages in our app via the navbar, and a variety of other components that act as clickaway actions, like that of a 'Back' button. Additionally, we utilized Redux for it's cross component state management functionality. 

#### Unit 3 - Node and Express
While we used NodeJS for our JavaScript runtime environment, we opted for ExpressJS framework for its quick and easy configuration, setup and minimal development processes. We developed our back-end API by [definining](docs/student_schema.pdf) entitites and models and separating them based on responsibility and role they have in our service. We [mapped](docs/internify_backend.pdf) out their behaviour which helped provided a reference for developing our routes and our RESTful endpoints.

#### Unit 4 - NoSQL with MongoDB
NoSQL offered much needed flexibility by negating the need for relational database management as compared to SQL. This technology provided more independence when developing our schemas and testing our front-end resolvers as compared to the synchronous nature of SQL databases. We opted for [MongoDB](https://www.mongodb.com/) to serve our database and used [MongooseJS](https://mongoosejs.com/) framework to dynamically create and manage schemas, and database read and write calls in our back-end service.

#### Unit 5 - Release Engineering (Continuous Integration)
We used [Heroku](https://heroku.com/) to serve our app so that we won't have to run our app locally and so that other users have a singular proxied domain to access our app from. We implemented GitHub Actions to our repository so that we can continuously integrate the deployment cycle whenever we make changes to the `develop` branch or the `main` branch.

### Above and Beyond Functionality
Our [competitive market research](https://docs.google.com/spreadsheets/d/1RwHaJzBzlbhb0f8zTX8MSj9uOg5pcDzJ_NcD-DM48xI/edit?usp=sharing) findings have suggested that current tools that are offered today accomplish two functions: offer a platform for employers to engage with job seekers and provide a platform for job seekers to search for jobs. However, in our research, we have found little evidence to suggest that the tools assist in performing those functions well. Inspired by this gap, we sent out a [survey](https://docs.google.com/forms/d/1ov32kG-xpftnhp7Dh6pAyf6WEnococCOzd0Jgdo5FA8/edit?usp=drive_web) and built a matching algorithm based on our survey results for our job creation tool to help assist those who make the jobs understand the kinds of candidates they would be looking for. This in turn, helps recruiters justify the expectations they have and the decisions they make when creating such job postings so that it attracts optimal job seekers.

### Next Steps

Moving forward we wish to integrate a second user type that allowes applicants to create an account, search and apply for jobs that recruiters have posted on our platform. We would also like to develop a dashboard showing graphical models of how well a user's job postings are performing on our site when compared to others. In the future, we would introduce these features so that the app could be as, if not, more informative, enriching, and diverse than competitors in the market today.