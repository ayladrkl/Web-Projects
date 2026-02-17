const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

function updateClock() {
	const now = new Date();

	const hours = now.getHours() % 12;
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	const ms = now.getMilliseconds();

	const secondAngle = seconds * 6 + ms * 0.006;
	const minuteAngle = minutes * 6 + seconds * 0.1;
	const hourAngle = hours * 30 + minutes * 0.5;

	hourHand.style.transform =
		`translate(-50%, -100%) rotate(${hourAngle}deg)`;
	minuteHand.style.transform =
		`translate(-50%, -100%) rotate(${minuteAngle}deg)`;
	secondHand.style.transform =
		`translate(-50%, -100%) rotate(${secondAngle}deg)`;
	requestAnimationFrame(updateClock)
}

updateClock();