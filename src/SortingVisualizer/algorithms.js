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
