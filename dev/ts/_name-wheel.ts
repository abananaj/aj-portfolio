import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';

let select = e => document.querySelector(e);
let i = 0;
let fontSizeStr = gsap.getProperty('.name-wheel', '--fontSize');
let fontSize = typeof fontSizeStr === 'number' ? fontSizeStr : parseFloat(fontSizeStr as string);
let txt = select('.txt');
let wheel = select('.wheel');
let numLines = 20;
let radius = (fontSize/2)/Math.sin((180/numLines)*(Math.PI/180)); // from Pythagoras Eq
let angle = 360/numLines;
let origin = `50% 50% -${radius}px`;
let mySplitText = new SplitText(txt, {type:"chars", charsClass:"char", position: "absolute" }); 

function cloneTxt() {
	for (i=0; i<numLines-1; i++) {
		var clone = txt.cloneNode(true);
		wheel.appendChild(clone);
	}
}

function positionTxt() {
	gsap.set('.txt', {
		rotationX: function(index) {
			return angle*index;
		},
		z: radius,
		transformOrigin: origin
	});
}

cloneTxt();
positionTxt();

gsap.set('.container', { autoAlpha: 1 });

let charEase = "power4.inOut";
let gtl = gsap.timeline({
	defaults: {
		ease: 'power2.inOut',
		duration: 3
	},
	repeat: -1
});

gtl.to(wheel, {
		rotationX: -(360/(numLines/5)),
		transformOrigin: "50% 50%"
	})
	.to('.char:nth-of-type(even)', {
		rotationX: (360/numLines),
		transformOrigin: origin,
		duration: 2
	}, "-=1")
	.to('.char:nth-of-type(odd)', {
		fontWeight: 100,
		fontStretch: '10%',
		ease: charEase
	}, "-=2")
	.to(wheel, {
		rotationX: -((360/(numLines/5))*2),
		transformOrigin: "50% 50%"
	}, "-=0.5")
	.to('.char:nth-of-type(odd)', {
		rotationX: ((360/numLines)*2),
		transformOrigin: origin,
		duration: 2
	}, "-=1")
	.to('.char:nth-of-type(even)', {
		fontWeight: 100,
		fontStretch: '10%',
		ease: charEase
	}, "-=2")
	.to(wheel, {
		rotationX: -((360/(numLines/5))*3),
		transformOrigin: "50% 50%"
	}, "-=0.5")
	.to('.char:nth-of-type(even)', {
		rotationX: ((360/numLines)*3),
		transformOrigin: origin,
		duration: 2
	}, "-=1")
	.to('.char:nth-of-type(odd)', {
		fontWeight: 900,
		fontStretch: '400%',
		ease: charEase
	}, "-=2")
	.to(wheel, {
		rotationX: -((360/(numLines/5))*4),
		transformOrigin: "50% 50%"
	}, "-=0.5")
	.to('.char:nth-of-type(odd)', {
		rotationX: ((360/numLines)*4),
		transformOrigin: origin,
		duration: 2
	}, "-=1")
	.to('.char:nth-of-type(even)', {
		fontWeight: 900,
		fontStretch: '400%',
		ease: charEase
	}, "-=2")
	.set('.char', {
		rotationX: 0,
		immediateRender: false
	})
	.set(wheel, {
		rotationX: 0,
		immediateRender: false
	})

gtl.timeScale(3);