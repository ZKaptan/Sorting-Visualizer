export const bubblesort = async (speed) => {
	const array = document.getElementsByClassName("bar");
	const size = array.length;
	let last = size - 1;
	for (let i = 0; i < size - 1; i++) {
		for (let j = 0; j < size - i - 1; j++) {
			array[j].style.backgroundColor = "green";
			array[j + 1].style.backgroundColor = "green";
			if (
				parseInt(array[j].style.height) > parseInt(array[j + 1].style.height)
			) {
				array[j].style.backgroundColor = "red";
				array[j + 1].style.backgroundColor = "red";
				await waitForme(speed);
				swap(array[j], array[j + 1]);
			}
			array[j].style.backgroundColor = "orange";
			array[j + 1].style.backgroundColor = "orange";
		}
		array[last--].style.backgroundColor = "blue";
	}
	array[last].style.backgroundColor = "blue";

	return true;
};

const disableButtons = () => {
	document.getElementById();
};
const waitForme = (speed) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("");
		}, Math.abs(60 - speed));
	});
};

const swap = (bar1, bar2) => {
	let temp = bar1.style.height;
	bar1.style.height = bar2.style.height;
	bar2.style.height = temp;
};

export const bubbleSortTest = (array) => {
	const arr1 = bubblesort(array);
	const arr2 = array.sort();
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
};
