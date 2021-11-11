import React, { useState } from "react";
import "./styles.css";
import "../desktop-layout.css";
import UserCard from "../UserCard";
import Card from "../Cards";
import Data from "../data.json";

const GlobalWrapper = () => {
	const [active, setActive] = useState("daily");

	// Click handler for li elements on UserCard
	const handleClick = (e) => {
		setActive(e.target.id);
	};

	return (
		<div className='main'>
			<div className='user-wrapper'>
				<UserCard active={active} clickHandler={handleClick} />
			</div>
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
		</div>
	);
};

export default GlobalWrapper;
