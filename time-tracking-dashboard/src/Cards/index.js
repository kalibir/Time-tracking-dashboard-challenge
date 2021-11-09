import React from "react";
import "./styles.css";

const Card = () => {
	return (
		<div className='activity-card'>
			<div className='info-wrapper'>
				<div className='card-header'>
					<p className='category-name'>Work</p>
					<div className='menu-btn'>
						<div className='dot'></div>
						<div className='dot'></div>
						<div className='dot'></div>
					</div>
				</div>
				<div className='card-info'>
					<div className='hours'>32hrs</div>
					<div className='records'>Last Week - 36hrs</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
