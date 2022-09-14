# Dev-Datathon
This repository is meant to serve as a submission to Dev-Datathon conducted jointly by Lambda, Epoch as a part of MILAN 2022. 

## How to install Requirements?
### Python Dependencies
We are using `pipenv` virtual environment in this project. We recommend the same. Use the following command to install all the dependencies related to python
```bash
pipenv install
```

### NPM Dependencies
You can install all the npm dependencies by following the given commands

```bash
cd client
npm install
```

# About the Project
Do you wonder which LA courses should you take so that you would get a good grade with minimal efforts? Perhaps, not just LA. We often want to know how a professor is? are they linient with grading? how is the work load of the course? Who can answer these things better than students themselves. The naive approach is to ask other students. What if you don't know many people who have taken the course? 

That's where we come in!

Students can register on the website and post reviews about the course they have taken. In order to provide the users with statistics such as median grade, we require students to upload the html file from `view from courses` section in the [AIMS](https://aims.iith.ac.in/aims/) portal. We summarize all the reviews submitted by our community as a single review and display it separately. The summary is regenerated after every 15 days using a NLP summarizer.

## Your Privacy matters!
To ensure that our users aren't penalized for being honest, we don't display the names/roll numbers of users along with the review.

## About the Project (Technical Aspects)
This project uses a `react` front-end, `django` backend with `sqlite3` database and hugging-face `transformers` library for text-summarization.

The user is required to login to the website which is done by `OAuth`, the email used to login is limited to organization, only institute email ids will be accepted while logging in.

The user needs to submit their 'view my courses' HTML page from AIMS portal. A backend API extracts all the relevant information from this page using `Beautiful Soup`. It then populates the data such as the courses taken by this user and the grade obtained in that course to the database.

<!-- write about other APIs -->

The reviews are summarized using our summarizer api which runs on Uvicorn server. The requests are handled using the `fastApi`. The summarizer is a NLP model which uses `t5-small` model and `tensorflow` framework.

## For testing purposes
For testing purposes, the tester is requested to contact the developer to register themselves on the backend. User signup has not been implemented on frontend. Thus this step is required. Currently, reviews have been added only for the course AI3000: Reinforcement Learning. Please click on that to see reviews.
