// declaring consts 
const searchIcon = document.querySelector('.fa-search');
const input = document.querySelector('input');


// Functions that fire from HTML element input

// turns icon blue when you click in the search box
function changeIconColor() {
	searchIcon.style.color = '#448AFF';
}

// turns icon back to gray when you click outside of the search box
function revertIconColor() {
	searchIcon.style.color = '#757575'
}

// function used to call wikipedia api and return the 
function searchWiki() {
	let searchItem = input.value;
	let endpoint = `https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&origin=*&limit=10&search=${searchItem}`
	fetch(endpoint)
	.then(blob => blob.json())
	.then(data => console.log(data));
}


// Event Listeners

// listens for a mouse click on the search icon then runs the searchWiki function
searchIcon.addEventListener('click', searchWiki);

// listens on the window for the 'enter' key to be pressed and will also run searchWiki function
// window.addEventListener('keyup');
