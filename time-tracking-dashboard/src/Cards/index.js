import React from "react";
import "./styles.css";

const Card = ({ category, title, current, previous, active }) => {
	return (
		<div className={`activity-card ${category}`}>
			<div className='info-wrapper'>
				<div className='card-header'>
					<p className='category-name'>{title}</p>
					<div className='menu-btn'>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
					</div>
				</div>
				<div className='card-info'>
					<div className='hours'>{current}hrs</div>
					<div className='records'>
						Last{" "}
						{`${
							active === "daily"
								? "Day"
								: active === "weekly"
								? "Week"
								: active === "monthly"
								? "Month"
								: null
						}`}{" "}
						- {previous}hrs
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
