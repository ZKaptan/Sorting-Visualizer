import React, { useEffect, useState } from "react";
import "./arrayBar.css";
import { bubblesort } from "../bubblesort";

const ArrayBar = (props) => {
	const [arrayBars, setArrayBars] = useState([]);
	const [disableButton, setDisableButton] = useState(false);
	const [speed, setSpeed] = useState(25);
	const [size, setSize] = useState(50);

	useEffect(() => {
		generateArray();
	}, []);

	const NUMBER_OF_BARS = 40;

	const generateArray = () => {
		const tempArray = [];
		for (let i = 0; i < size; i++) {
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

	const sizeHandler = () => {
		setSize(document.getElementById("size_slider").value);
		generateArray();
	};

	const resetArray = () => {
		const bars = document.getElementsByClassName("bar");
		for (let i = 0; i < bars.length; i++) {
			bars[i].style.backgroundColor = "orange";
		}
	};

	const sortClickHandler = () => {
		setSpeed(document.getElementById("speed_slider").value);
		setDisableButton(true);
		bubblesort(speed).then(() => {
			setDisableButton(false);
		});
	};

	return (
		<div className="container">
			<header>
				<button
					disabled={disableButton}
					className="new_array_btn"
					onClick={clickHandler}
				>
					New Array
				</button>
				<label htmlFor="speed_slider">Speed</label>
				<input
					type="range"
					id="speed_slider"
					min="1"
					max="50"
					disabled={disableButton}
					defaultValue={speed}
					onChange={(e) => setSpeed(e.target.value)}
				/>
				<label htmlFor="size_slider">Size</label>
				<input
					type="range"
					id="size_slider"
					min="5"
					max="50"
					defaultValue={size}
					disabled={disableButton}
					onChange={sizeHandler}
				/>
				<button
					disabled={disableButton}
					className="sort_btn"
					onClick={sortClickHandler}
				>
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
