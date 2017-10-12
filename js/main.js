/* =================================
  Accordion
==================================== */

/*Finds all the accordions from the side menu*/
var accordions = document.getElementsByClassName("side-menu__option--accordion");

/*Each accordion will receive this function*/
function assignClickEventToAccordions() {
	/*Finds the submenu of that specific accordion*/
	var submenu = this.childNodes[3];

	/*Adds/removes the class below which changes the arrow icon*/
	this.classList.toggle("side-menu__option--is-open");

	/*Displays/hides the submenu depending if the accordion is open or not*/
	if(this.classList.contains("side-menu__option--is-open")) {
		/*Adds the class is visible which displays block the submenu*/
		submenu.classList.toggle("is-visible");

		/*To make a smooth effect while displaying the submenu, its opacity will receive 1. The setTimeout is to make sure that the element is already on the DOM*/
		setTimeout(function() {
			submenu.style.opacity = 1;
		}, 0);
	} else {
		/*To make a smooth effect while hiding the submenu, its opacity will receive 0. The setTimeout is necessary so the element will receive display none after the transition of the opacity change happens (which is .2 in the css)*/
		submenu.style.opacity = 0;

		setTimeout(function() {
			submenu.classList.toggle("is-visible");
		}, 200);
	}
}

/*Assigns a onclick event to all accordions*/
for(var i = 0; i < accordions.length; i++) {
	accordions[i].onclick = assignClickEventToAccordions;
}



