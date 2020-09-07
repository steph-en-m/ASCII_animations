// Author: Mugisha Stephen


// Capturing all necessary variables once the page loads.
// Using window.onload because it loads all scripts and elements when the page loads.

window.onload = function () {
    let textarea = document.getElementById('display');
	let start = document.getElementById('start');
	let stop = document.getElementById('stop');
	let animationOp = document.getElementById('animations');
	let size = document.getElementById('size');
	let turbo = document.getElementById('turbo');
	let normal = document.getElementById('normal');
	let slow = document.getElementById('slo-mo');

	start.disabled = true;
    stop.disabled = true;
    
	animationOp.onchange = function () {
		start.disabled = false;
		let animationType = animationOp.value;
		textarea.value = ANIMATIONS[animationType];
    }
    
	size.onchange = function(){
		
		let fontsize = size.value;
		textarea.style.fontSize = fontsize;
    }
    
	let counter=0;
	let delay = 250;	// Normal speed uses this delay (units: ms)

	start.onclick = function () {
		animationOp.disabled = true;
		start.disabled = false;
		stop.disabled = false;

		// The animation frames are separated by 5 equality signs hence
		// animation will require running/playing the frames in series with each other

		let frame = textarea.value;
		let array = frame.split("=====\n");
		let timer = setInterval(function () {
			if(counter < array.length){
			textarea.value = array[counter];
			counter++;
		}
		else{
			counter=0;
		}
        }, delay);
        
		stop.onclick = function () {
			clearInterval(timer);
			animationOp.disabled = false;
			let animationType = animationOp.value;
			textarea.value = ANIMATIONS[animationType];
			stop.disabled = true;
		}
	}

	// turbo delay changes to 50ms when the turbo button is selected.
	turbo.onchange = function () {
			if (turbo.checked) {
				delay = 50;
			}
		}

	// setting the delay for slow-mo to 1000 when its selected
	slow.onchange = function(){
			if(slow.checked){
				delay = 1000;
			}
		}
	// setting the normal delay manually to ensure it functions as expected 
	// when manually checked otherthan it being default
	normal.onchange = function(){
		if(normal.checked){
			delay = 250;
		}
	}
	
}
