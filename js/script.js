let body = document.body;
const slides = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

let activeSlide = 0;
setBodyBg();
function setBodyBg() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActive() {
	slides.forEach((slide) => {
		slide.classList.remove("slide_active");
		slides[activeSlide].classList.add("slide_active");
	});
}

arrowRight.addEventListener("click", () => {
	activeSlide++;
	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}
	setBodyBg();
	setActive();
});
arrowLeft.addEventListener("click", () => {
	activeSlide--;
	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}
	setBodyBg();
	setActive();
});
