// export const insertionSort = () => {
// 	const arrayBars = document.getElementsByClassName("array-bar");

// 	for (
// 		let firstUnsortedIndex = 1;
// 		firstUnsortedIndex < arrayBars.length;
// 		firstUnsortedIndex++
// 	) {
// 		let newElement = arrayBars[firstUnsortedIndex].clientHeight;
// 		setTimeout(() => {
// 			for (
// 				let i = firstUnsortedIndex;
// 				i > 0 && arrayBars[i - 1].clientHeight > newElement;
// 				i--
// 			) {
// 				arrayBars[i].style.backgroundColor = "blue";
// 				arrayBars[i - 1].style.backgroundColor = "blue";
// 			}
// 		}, 1000);
// 	}

// 	return arrayBars;
// };

const swap = (node1, node2) => {
	const clonedElement1 = node1.cloneNode(true);
	const clonedElement2 = node2.cloneNode(true);

	node2.parentNode.replaceChild(clonedElement1, node2);
	node1.parentNode.replaceChild(clonedElement2, node1);
};

export const insertionSortAnimations = (array) => {
	let animations = [];

	let auxArray = array.slice();
	insertionSort(auxArray, animations);
	const sortedArray = array.slice().sort((a, b) => a - b);
	console.log(`Sorted arrays are ${arraysAreEqual(sortedArray, auxArray)}`);

	array = auxArray;
	return [animations, array];
};

const insertionSort = (auxArray, animations) => {
	const N = auxArray.length;

	for (let i = 1; i < N; i++) {
		let key = auxArray[i];
		let j = i - 1;

		animations.push(["comparison1", j, i]);
		animations.push(["comparison2", j, i]);

		while (j >= 0 && auxArray[j] > key) {
			animations.push(["overwrite", j + 1, auxArray[j]]);
			auxArray[j + 1] = auxArray[j];
			j--;
			if (j >= 0) {
				animations.push(["comparison1", j, i]);
				animations.push(["comparison2", j, i]);
			}
		}
		animations.push(["overwrite", j + 1, key]);
		auxArray[j + 1] = key;
	}
};

function arraysAreEqual(firstArray, secondArray) {
	if (firstArray.length !== secondArray.length) {
		return false;
	}
	for (let i = 0; i < firstArray.length; i++) {
		if (firstArray[i] !== secondArray[i]) {
			return false;
		}
	}
	return true;
}
