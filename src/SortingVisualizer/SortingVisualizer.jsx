import React, { Fragment, useState, useEffect } from "react";
import * as algorithms from "./algorithms";

const SortingVisualizer = (props) => {
	const [randomArray, setRandomArray] = useState([]);

	useEffect(() => {
		generateNewArray();
	}, []);

	const generateNewArray = () => {
		const array = [];
		for (let i = 0; i < 300; i++) {
			array.push(randomIntegers(5, 700));
		}
		setRandomArray(array);
	};

	const randomIntegers = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	const insertionSort = () => {
		algorithms.insertionSort();
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
				onClick={() => {
					generateNewArray();
				}}
			>
				Generate New Array
			</button>
			<button onClick={() => insertionSort()}>Insertion Sort</button>
		</Fragment>
	);
};

export default SortingVisualizer;
