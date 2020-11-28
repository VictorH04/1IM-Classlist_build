// ! Search filter

(function() {
	const form = document.querySelector('.settingsection-form');

	form.addEventListener('submit', (event) => {
		event.preventDefault();
	});

	const searchInput = document.getElementById('searchInput');

	const select = document.getElementById('classSelect');

	const wholeCard = document.querySelectorAll('.cardsection-card');

	const cardClass = document.getElementById('cardClass');

	const cardSection = document.querySelector('.cardsection');

	select.addEventListener('change', intuitiveFilter);

	function intuitiveFilter() {
		//   if the default filter value is selected => show all cards
		if (select.value === 'all') {
			wholeCard.forEach((card) => {
				card.style.setProperty('display', 'grid');
			});
			console.log(select.value);
		} else {
			wholeCard.forEach((card) => {
				//     if the value of the card and of the filter are different => hide the card
				if (card.dataset.klasse != select.value) {
					card.style.setProperty('display', 'none');
				} else {
					//     if both values are the same => show the card
					card.style.setProperty('display', 'grid');
				}
				console.log(select.value);
			});
		}
	}

	let classTitleValue = wholeCard;
	console.log(classTitleValue);

	let selectedValue = select.options;
	console.log((select.children[0].textContent = ''));

	// for (let i = 0; i < wholeCard.length; i++) {

	// 	if (wholeCard[i].children[2].textContent === '1IMA') {

	// 		if (select.children[0].textContent === '') {
	// 			wholeCard[i].style.display = 'grid';

	// 		} else if (select.children[1].textContent === 'A') {
	// 			wholeCard[i].style.display = 'grid';

	// 		} else if (select.children[2].textContent === 'B') {
	// 			wholeCard[i].style.display = 'none';
	// 		}

	// 	} else if (wholeCard[i].children[2].textContent === '1IMB') {

	// 		if (select.children[0].textContent === '') {
	// 			wholeCard[i].style.display = 'grid';

	// 		} else if (select.children[0].textContent === 'A') {
	// 			wholeCard[i].style.display = 'none';

	// 		} else if (select.children[0].textContent === 'B') {
	// 			wholeCard[i].style.display = 'grid';
	// 		}
	// 	}

	// 	// console.log(select.options[i].active);
	// }

	// [].forEach.call(cardSection, (card) => {

	// });

	// [].forEach.call(wholeCard, (card) => {
	// 	let children = select.children;
	// 	console.log(children);

	// 	for (let i = 0; i < children.length; i++) {
	// 		if (children.select = 'A') {
	// 			card.style.display = 'none';
	// 		} else if (children[1]) {
	// 			card.parentElement.style.display = 'none';
	// 		}
	// 	}
	// });

	//eventlistener
	searchInput.addEventListener('keyup', function(event) {
		// getting the searchvalue
		let searchValue = searchInput.value.trim().toLowerCase();

		// selecting all the cardtitles
		const cardsTitle = document.querySelectorAll('.cardsection-card--title');

		const wholeCard = document.querySelectorAll('.cardsection-card');

		// looping through all the items
		[].forEach.call(cardsTitle, (card) => {
			let cardsTitleValue = card.innerHTML;

			// console.log(cardsTitleValue);

			let type = (wholeCard.dataset = cardsTitleValue);

			// console.log(searchValue);

			// console.log(type);

			// Length of the input value
			let length = searchValue.length;

			let match = type.slice(0, length).toLowerCase();

			if (searchValue === match) {
				card.parentElement.style.display = 'block';
			} else {
				card.parentElement.style.display = 'none';
			}
		});
	});
})();
