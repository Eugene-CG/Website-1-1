window.onscroll = function() {scrollFunc()};

const header = document.getElementById("header");
const sticky = header.offsetTop;

function scrollFunc() {
	window.pageYOffset > sticky ? header.classList.add("sticky"): header.classList.remove("sticky");
}