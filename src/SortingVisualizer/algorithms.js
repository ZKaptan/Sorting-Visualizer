export const insertionSort = () => {
	const arrayBars = document.getElementsByClassName("array-bar");

	for (
		let firstUnsortedIndex = 1;
		firstUnsortedIndex < arrayBars.length;
		firstUnsortedIndex++
	) {
		let newElement = arrayBars[firstUnsortedIndex].clientHeight;
		setTimeout(() => {
			for (
				let i = firstUnsortedIndex;
				i > 0 && arrayBars[i - 1].clientHeight > newElement;
				i--
			) {
				arrayBars[i].style.backgroundColor = "blue";
				arrayBars[i - 1].style.backgroundColor = "blue";
				swap(arrayBars[i], arrayBars[i - 1]);
			}
		}, 1000);
	}

	return arrayBars;
};

const swap = (node1, node2) => {
	const clonedElement1 = node1.cloneNode(true);
	const clonedElement2 = node2.cloneNode(true);

	node2.parentNode.replaceChild(clonedElement1, node2);
	node1.parentNode.replaceChild(clonedElement2, node1);
};
