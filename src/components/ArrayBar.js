import React, { Fragment, useEffect, useState } from "react";
import "./arrayBar.css";
const ArrayBar = () => {
	const [arrayBars, setArrayBars] = useState([]);

	useEffect(() => {
		generateArray();
	}, []);

	const NUMBER_OF_BARS = 150;

	const generateArray = () => {
		const tempArray = [];
		for (let i = 0; i < NUMBER_OF_BARS; i++) {
			tempArray.push(randomIntFromInterval(5, 750));
		}
		setArrayBars(tempArray);
	};
	const randomIntFromInterval = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	return (
		<div className="container">
			<div className="array-container">
				{arrayBars.map((value, index) => {
					return (
						<div
							key={index}
							className="bar"
							style={{ height: `${value}px` }}
						></div>
					);
				})}
			</div>
			<button onClick={generateArray}>Generate New Array</button>
		</div>
	);
};

export default ArrayBar;
