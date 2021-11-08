import React from "react";
import "./styles.css";
import UserPic from "../assets/image-jeremy.png";
const UserCard = () => {
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
					<li className='nav-link'>Daily</li>
					<li className='nav-link active'>Weekly</li>
					<li className='nav-link'>Monthly</li>
				</ul>
			</div>
		</div>
	);
};

export default UserCard;
