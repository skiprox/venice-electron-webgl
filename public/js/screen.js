'use strict';

class Screen {
	constructor() {
		this.canvas = document.getElementById('glslCanvas');
		this.adjustSize();
	}
	adjustSize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}
}

new Screen();
