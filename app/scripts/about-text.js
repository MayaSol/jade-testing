function makeLines(blockId) {
	const aboutText = document.querySelector(blockId);
	const fields = aboutText.querySelector('.about-text__fields');
	const newLine = aboutText.querySelector('#about-text-field-template').content;

	function nextLine(line, value) {
		if (value.length === line.maxLength) {
			let next = line.tabIndex + 1;
			if (next < fields.children.length) {
				fields.children[next].focus();
			}
			else {
				let newLineItem = newLine.cloneNode(true);
				newLineItem.querySelector('.field-text__input').tabIndex = next;
				fields.appendChild(newLineItem);
				fields.children[next].focus();
			}
		}
	}

	aboutText.onkeyup = function (evt) {
		if (evt.target.classList.contains('field-text__input')) {
			nextLine(evt.target, evt.target.value);
		}
	};

}

makeLines('#about-text');
