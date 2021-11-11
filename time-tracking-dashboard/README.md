# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
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
- Live Site URL: [Add live site URL here](https://kalibir-time-tracker-dashboard.netlify.app/)

## My process

Since a `data.json` file was provided, the challenge was to generate the activity cards based on that file. Taking that objective in mind, I used the `useState` hook and followed these steps:

- Created a state variable to toggle between **daily data, weekly data, and monthly data**. This variable was passed down to the various components as `props`;

```js
const [active, setActive] = useState("daily");
```

- Provided I have an `id` for each of the links in the `UserCard` component and depending on it's value, this variable toggles the `active` class on the links. For that end I created a `clickHandler` that sets the variable's value to the element's id:

```js
// Click handler for li elements on UserCard
const handleClick = (e) => {
	setActive(e.target.id);
};
```

This function was also passed as `props` to the `UserCard` component.

And here's how the `active` class was toggled depending on the `active` variable's value:

```js
<li
					className={`nav-link ${active === "daily" ? "active" : ""}`}
					onClick={clickHandler}
					id='daily'>
					Daily
				</li>
				<li
					className={`nav-link ${active === "weekly" ? "active" : ""}`}
					onClick={clickHandler}
					id='weekly'>
					Weekly
				</li>
				<li
					className={`nav-link ${active === "monthly" ? "active" : ""}`}
					onClick={clickHandler}
					id='monthly'>
					Monthly
				</li>
```

- This variable was also used to conditionally render data, meaning depending on it's value (daily, weekly or monthly) it would render its data accordingly. To achieve that I used the array of data provided by the `data.json` file, and mapped(using the `.map()` array method) through it generating for each element in that array a `Card` component with corresponding data:

```js
<div className='data-wrapper'>
	{Data.length > 0
		? Data.map((stats, index) => {
				return (
					<Card
						active={active}
						category={stats.title}
						title={stats.title}
						current={
							active === "daily"
								? stats.timeframes.daily.current
								: active === "weekly"
								? stats.timeframes.weekly.current
								: stats.timeframes.monthly.current
						}
						previous={
							active === "daily"
								? stats.timeframes.daily.previous
								: active === "weekly"
								? stats.timeframes.weekly.previous
								: stats.timeframes.monthly.current
						}
						key={index}
					/>
				);
		  })
		: "No data to show for this user."}
</div>
```

In these cases it's always better to check if we indeed have the data that we need. If not, we handle that by rendering a message. In this case I checked if the data array had any elements in it.
If that condition returns `true` then we render the cards with the correspondent data. If not we render a message telling that is no data.

### Built with

- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### Continued development

I may have over complicated the HTML markup in this project. I will have to refactor it in a way that it is easier to read and it doesn't break anything when displaying the elements in the browser.

## Author

- Website - [Antonio Meireles](https://github.com/kalibir)
- Frontend Mentor - [@kalibir](https://www.frontendmentor.io/profile/kalibir)
