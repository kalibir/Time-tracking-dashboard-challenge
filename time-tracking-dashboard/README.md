# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

This solution was developed using the ReactJs framework since it is ideal for building reusable UI components.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Add solution URL here](https://github.com/kalibir/Time-tracking-dashboard-challenge/tree/master/time-tracking-dashboard)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

Since a `data.json` file was provided, the challenge was to generate the activity cards based on that file. Taking that objective in mind, I used the `useState` hook and followed these steps:

- Created state variables to toggle between **daily data, weekly data, and monthly data**;

```js
const [isDaily, setIsDaily] = useState(true);
const [isWeekly, setIsWeekly] = useState(false);
const [isMonthly, setIsMonthly] = useState(false);
```

- The variables mentioned above would be passed as `props` to the `UserCard` component to assert which one of the **nav links** should be active, so if `isDialy` was `true` the **Daily link** would be active and the other two woud be inactive.

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
