import React, { useEffect, useState } from "react";
import "./arrayBar.css";
import { bubblesort } from "../bubblesort";

const ArrayBar = (props) => {
	const [arrayBars, setArrayBars] = useState([]);
	const [disableButton, setDisableButton] = useState(false);

	useEffect(() => {
		generateArray();
	}, []);

	const NUMBER_OF_BARS = 50;

	const generateArray = (e) => {
		const tempArray = [];
		for (let i = 0; i < NUMBER_OF_BARS; i++) {
			tempArray.push(randomIntFromInterval(5, 750));
		}
		setArrayBars(tempArray);
	};
	const randomIntFromInterval = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const clickHandler = () => {
		generateArray();
		resetArray();
	};

	const resetArray = () => {
		const bars = document.getElementsByClassName("bar");
		for (let i = 0; i < bars.length; i++) {
			bars[i].style.backgroundColor = "pink";
		}
	};

	const disableButtons = () => {};

	const sortClickHandler = () => {
		const speedSlider = document.getElementById("speed_slider");
		const speed = speedSlider.value;

		setDisableButton(true);
		bubblesort(speed).then(() => {
			setDisableButton(false);
		});
	};

	return (
		<div className="container">
			<header>
				<button disabled={disableButton} onClick={clickHandler}>
					New Array
				</button>
				<label htmlFor="speed_slider">Speed</label>
				<input
					type="range"
					id="speed_slider"
					min="5"
					max="50"
					defaultValue="20"
				/>
				<button disabled={disableButton} onClick={sortClickHandler}>
					Bubble Sort
				</button>
			</header>
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
		</div>
	);
};

export default ArrayBar;
