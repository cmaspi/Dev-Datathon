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

Students can register on the website and post reviews about the course they have taken. To ensure that a student writes reviews only to the courses which they have taken we require students to upload the html file from `view from courses` section in the [AIMS](https://aims.iith.ac.in/aims/) portal. Each student can post atmost 1 review per course. The website also allows users to upvote or downvote the reviews posted by other people, this is done to ensure that reviews that resonate with more people appear on top. Since there can be quite a lot of reviews, to save time of our users we summarize the top 10 reviews. Though the summarized review is updated only once every fifteen days.

## Your Privacy matters!
To ensure that our users aren't penalized for being honest, we don't display the names/roll numbers of users along with the review.


