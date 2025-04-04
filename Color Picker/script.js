document.querySelectorAll(".color-box").forEach(box =>{
	box.addEventListener("mouseover",function() {
		let bgColor = window.getComputedStyle(this).backgroundColor;
		let hexColor = rgbToHex(bgColor).toUpperCase();
		document.getElementById("colorCode").textContent = "HEX Code : "+hexColor;
	});

	box.addEventListener("click",function(){
		let bgColor = window.getComputedStyle(this).backgroundColor;
		let hexColor = rgbToHex(bgColor).toUpperCase();

		navigator.clipboard.writeText(hexColor).then(() =>{

			let copiedMessage = document.createElement("div");

			copiedMessage.textContent = "Copied!";
			copiedMessage.style.position = "absolute";
			copiedMessage.style.background = "rgba(0,0,0,0.1)";
			copiedMessage.style.color = "white";
			copiedMessage.style.padding = "5px 10px";
			copiedMessage.style.borderRadius = "5px";
			copiedMessage.style.fontSize = "11px";
			copiedMessage.style.top = "50%";
			copiedMessage.style.left = "50%";
			copiedMessage.style.transform = "translate(-50% , -50%)";
			copiedMessage.style.pointerEvent = "none";
			copiedMessage.style.zIndex = "10";

			this.style.position="relative";
			this.appendChild(copiedMessage);

			setTimeout(() =>{
				copiedMessage.remove();
			},1200);
		}).catch(err => {
			
			console.error("Copy error:",err);
		});
	});

});

function rgbToHex(rgb){
	let rgbValues = rgb.match(/\d+/g);
	return "#" + rgbValues.map(val =>{
		let hex = parseInt(val).toString(16);
		return hex.lenght == 1 ? "0" + hex : hex;
	}).join("");
}

