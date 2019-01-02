console.log('range.js');

function makeRange(rangeId) {
	const slider = document.querySelector(rangeId);
	const button = document.querySelector(rangeId + ' .range__button');
	console.log('rangeId: ' + rangeId);
	console.log('button: ' + rangeId + ' .range__button');
	console.log(slider);
	console.log(button);

	button.onmousedown = function (evt) {

		function getCoords(elem) {
			const box = elem.getBoundingClientRect();

			return {
				top: box.top + pageYOffset,
				left: box.left + pageXOffset
			};
		}

		const buttonCoords = getCoords(button);
		const shiftX = evt.pageX - buttonCoords.left;
		const sliderCoords = getCoords(slider);
		console.log('Drag started');


		document.onmousemove = function (event) {
			let left = event.pageX - shiftX - sliderCoords.left;
			let right = slider.offsetWidth - button.offsetWidth;

			if (left < 0) {
				left = 0;
			}

			if (left > right) {
				left = right;
			}

			button.style.left = left + 'px';
		};

		document.onmouseup = function () {
			document.onmousemove = document.onmouseup = null;
			console.log('Drag eneded');
		};

		return false;
	};

	// Disable hthml5 drag and drop
	button.ondragstart = function () {
		return false;
	};

}


makeRange('#range-level-js');
