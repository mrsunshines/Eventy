
var list = document.getElementById('list');

var button = document.getElementById('addElem');

button.addEventListener('click', function() {
	var element = document.createElement('li');
	var orderNb = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + orderNb + '';	
	list.appendChild(element);
});