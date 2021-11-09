import React from "react";
import "./styles.css";
import UserCard from "../UserCard";
import Card from "../Cards";

const GlobalWrapper = () => {
	return (
		<div className='main'>
			<UserCard />
			<Card />
		</div>
	);
};

export default GlobalWrapper;
