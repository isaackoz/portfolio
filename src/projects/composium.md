---
title: 'Composium.ai'
author: 'Isaac Koczwara'
date: '2021-11-29'
published: true
---

I am currently developing this project as part of the startup I am working for, [Composium.ai](https://composium.ai). Although I can not currently share *too* much info, I will describe in general what I have done.

### The Idea

The idea behind Composium.ai is to create an AI chat bot that provides resourceful and truthful information. Through extensive prompt engineering, retrieval-augmented generation (RAG), and a complex work flow, we have succesfully achieved a state-of-the-art chat bot that our customers are very satisfied with. We are the official partner with TedX and power their [TedX Event Planning AI Assistant](https://tedxassist.ai/). 

When I joined in late summer of 2024, my task was to take the current project and take it to the next level. This includes adding account/registration, chat history, additional features, a scalable frontend and backend, and a management dashboard.

### Tech Stack
The original project was created in Python (Flask) for the backend and raw JavaScript for the frontend. Although this approach worked for the initial MVP, it was not scalable and had a difficult developer experience, limiting rapid iteration. When I joined, I was tasked with rebuilding the architecture and essentially building it up from scratch. Although it took extensive research and time, I managed to do so with the following stack:

**Frontend**
- SvelteKit for the framework
- A custom SSE parser to transform data into renderable content
- Supertokens for authentication
- Deployed on DigitalOcean

**Backend**
- Nest.js for the framework (built upon Express.js)
- A custom implementation of Vercel's AI library
- Complex state management handled with XState
- Deployed on DigitalOcean

**Management Dashboard**
- SvelteKit for the framework
- Custom CMS to manage frontend

### Challenged Faced
When I first started this project, the biggest hurdle I faced was learning how LLMs worked and what tech stack to roll with. After a couple of weeks of studying, researching, and experimenting, I had a good grasp on how LLMs worked, how RAG worked, and etc. It also helped that at the time, I was in a machine learning class at my university, which excelled my learning.

After getting a good idea of what I was dealing with, the next challenge I faced was state management. Without giving away too much details, I solved this using a structured state machine with XState. The benefit to using XState (and state machines in general), is that it is very easy to add new features without breaking everything.

The last major hurdle was processing server-sent events (SSE). SSE works by sending small chunks of data at a time. The most challenging part about this is taking that data from the backend and parsing it in the frontend. Due to the custom implementation of how our application worked, we were not able to use existing libraries such as Vercel AI SDK. To solve this I ended up having to create a very complex, yet ellegant SSE parser integrated with SvelteKit. The result was *amazing*.

### Outcome

This project is still a WIP, so there is no defined outcome yet. However, the current state of the project is in good standing.

### Images

![Composium Landing Page](/projects/comp1.png)

![Composium Management Dashboard](/projects/comp2.png)