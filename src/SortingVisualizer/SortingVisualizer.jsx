import React, { Fragment, useState, useEffect } from "react";
import * as algorithms from "./algorithms";

const primaryColor = "red";
const secondaryColor = "blue";
const animationSpeed = 5;

const SortingVisualizer = (props) => {
	const [randomArray, setRandomArray] = useState([]);

	useEffect(() => {
		generateNewArray();
	}, []);

	const generateNewArray = () => {
		const array = [];
		for (let i = 0; i < 40; i++) {
			array.push(randomIntegers(5, 700));
		}
		setRandomArray(array);
		resetColors();
	};

	const randomIntegers = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	const insertionSort = () => {
		disableButtons();
		const [animations, sortArray] =
			algorithms.insertionSortAnimations(randomArray);

		for (let i = 0; i < animations.length; i++) {
			const colorChange =
				animations[i][0] === "comparison1" ||
				animations[i][0] === "comparison2";

			const arrayBars = document.getElementsByClassName("array-bar");
			if (colorChange) {
				const [comparison, barOneIndex, barTwoIndex] = animations[i];
				const color =
					animations[i][0] === "comparison1" ? primaryColor : secondaryColor;
				const barOneStyle = arrayBars[barOneIndex].style;
				const barTwoStyle = arrayBars[barTwoIndex].style;

				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * animationSpeed);
			} else {
				setTimeout(() => {
					const [overwrite, barOneIndex, newHeight] = animations[i];

					const barOneStyle = arrayBars[barOneIndex].style;

					barOneStyle.height = `${newHeight}px`;
				}, i * animationSpeed);
			}
		}
		const timeRequired = parseInt(
			(animationSpeed * animations.length) / 2 + 5000
		);
		setTimeout(() => {
			enableButtons();
		}, timeRequired);
	};

	const disableButtons = () => {
		document.querySelector(".resetArray").disabled = true;
		document.querySelector(".insertionSortBtn").disabled = true;
	};

	const enableButtons = () => {
		document.querySelector(".resetArray").disabled = false;
		document.querySelector(".insertionSortBtn").disabled = false;
	};

	const resetColors = () => {
		const arrayBars = document.getElementsByClassName("array-bar");

		for (let i = 0; i < arrayBars.length; i++) {
			arrayBars[i].style.backgroundColor = "pink";
		}
	};

	return (
		<Fragment>
			<div className="array-container">
				{randomArray.map((value, index) => {
					return (
						<div
							key={index}
							className="array-bar"
							style={{ height: `${value}px` }}
						></div>
					);
				})}
			</div>
			<button
				className="resetArray"
				onClick={() => {
					generateNewArray();
				}}
			>
				Generate New Array
			</button>
			<button className="insertionSortBtn" onClick={() => insertionSort()}>
				Insertion Sort
			</button>
		</Fragment>
	);
};

export default SortingVisualizer;
