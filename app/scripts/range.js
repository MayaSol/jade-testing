function makeRange(rangeId) {
	const slider = document.querySelector(rangeId);
	const button = slider.querySelector(rangeId + ' .range__button');

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
		};

		return false;
	};

	// Disable hthml5 drag and drop
	button.ondragstart = function () {
		return false;
	};

	slider.onclick = function (evt) {
		const dotStart = slider.querySelector('.dots-range__item--start');
		const shiftX = dotStart.offsetLeft;
		if (evt.target.classList.contains('dots-range__title'))
		{
			button.style.left = (evt.target.parentElement.offsetLeft - shiftX) + 'px';
		}
	};

}

makeRange('#range-level-js');
