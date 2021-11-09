import React from "react";
import "./styles.css";
import UserPic from "../assets/image-jeremy.png";

const UserCard = ({ daily, weekly, monthly, clickHandler, active }) => {
	return (
		<div className='user-card'>
			<div className='user-info'>
				<div className='profile-picture'>
					<img src={UserPic} alt='User profile' />
				</div>
				<div className='card-text'>
					<p className='card-assigner'>Report for</p>
					<p className='user-name'>Jeremy Robson</p>
				</div>
			</div>
			<div>
				<ul className='time-nav'>
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
				</ul>
			</div>
		</div>
	);
};

export default UserCard;
