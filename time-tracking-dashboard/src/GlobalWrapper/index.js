import React, { useState } from "react";
import "./styles.css";
import UserCard from "../UserCard";
import Card from "../Cards";
import Data from "../data.json";

const GlobalWrapper = () => {
	const [isDaily, setIsDaily] = useState(true);
	const [isWeekly, setIsWeekly] = useState(false);
	const [isMonthly, setIsMonthly] = useState(false);
	const [active, setActive] = useState("daily");

	const handleClick = (e) => {
		e.preventDefault();
		setActive(e.target.id);
		if (active === "daily") {
			setIsDaily(true);
			setIsWeekly(false);
			setIsMonthly(false);
		}
		if (active === "weekly") {
			setIsDaily(false);
			setIsWeekly(true);
			setIsMonthly(false);
		}
		if (active === "monthly") {
			setIsDaily(false);
			setIsWeekly(false);
			setIsMonthly(true);
		}

		console.log(active);
	};

	return (
		<div className='main'>
			<UserCard
				clickHandler={handleClick}
				daily={isDaily}
				weekly={isWeekly}
				monthly={isMonthly}
			/>
			{Data.length > 0
				? Data.map((stats, index) => {
						return (
							<Card
								category={stats.title}
								title={stats.title}
								current={
									isDaily
										? stats.timeframes.daily.current
										: isWeekly
										? stats.timeframes.weekly.current
										: stats.timeframes.monthly.current
								}
								previous={
									isDaily
										? stats.timeframes.daily.previous
										: isWeekly
										? stats.timeframes.weekly.previous
										: stats.timeframes.monthly.current
								}
								key={index}
							/>
						);
				  })
				: "No data to show for this user."}
		</div>
	);
};

export default GlobalWrapper;
