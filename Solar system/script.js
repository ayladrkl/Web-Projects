window.addEventListener('DOMContentLoaded', function (){
	const belt = document.getElementById('asteroidBelt');
	const beltDiameterPx = 300;
	const emPerPx = 1 / 16;
	const beltDiameterEm = beltDiameterPx * emPerPx;
	const center = beltDiameterEm / 2;
	const minRadius = center * 0.93;
	const maxRadius = center * 0.98;
	const asteroidCount = 80;

	if (belt) {
		for (let i = 0;  i < asteroidCount; i++) {
			const angle = Math.random() * 2 * Math.PI;
			const radius = minRadius + Math.random() * (maxRadius - minRadius);
			const x = center + radius * Math.cos(angle);
			const y = center + radius * Math.sin(angle);

			const asteroid = document.createElement('div');
			asteroid.className = 'asteroid-particle';
			asteroid.style.left = `${x}em`;
			asteroid.style.top = `${y}em`;
			belt.appendChild(asteroid);
		}
	}

});

{
	const belt = document.getElementById('outerAsteroidBelt');
	const beltDiameterEm = 520 / 16;
	const center = beltDiameterEm / 2;
	const minRadius = center * 0.89;
	const maxRadius = center * 0.99;
	const asteroidCount = 110;

	if (belt) {
		for (let i = 0;  i < asteroidCount; i++) {
			const angle = Math.random() * 2 * Math.PI;
			const radius = minRadius + Math.random() * (maxRadius - minRadius);
			const x = center + radius * Math.cos(angle);
			const y = center + radius * Math.sin(angle);

			const asteroid = document.createElement('div');
			asteroid.className = 'asteroid-particle';
			asteroid.style.left = `${x}em`;
			asteroid.style.top = `${y}em`;
			belt.appendChild(asteroid);
		}
	}

}