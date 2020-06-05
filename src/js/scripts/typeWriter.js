const TypeWriter = function (txtElement, words, wait = 3000) {
	this.txtElement = txtElement;
	this.words = words;
	this.txt = "";
	this.index = 0;
	this.wait = parseInt(wait, 10);
	this.type();
	this.isDeleting = false;
}

TypeWriter.prototype.type = function() {
	const current = this.index % this.words.length;
	const text = this.words[current];
	
	//Check if deleting

	if (this.isDeleting) {
		//Remove char
		this.txt = text.substring(0, this.txt.length - 1);
	} else {
		//Add character
		this.txt = text.substring(0, this.txt.length + 1);
	}

	this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

	//Initial type speed
	let typeSpeed = 300;

	if (this.isDeleting) {
		typeSpeed /= 2;
	}

	if (!this.isDeleting && this.txt === text) {
		typeSpeed = this.wait;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.index++;
		typeSpeed = 500;
	}
	setTimeout(() => this.type(), typeSpeed);
}

// init on DOM Load

document.addEventListener('DOMContentLoaded', init);

function init() {
	 const txtElement = document.querySelector('.txt-type');
	 const words = JSON.parse(txtElement.getAttribute('data-words'));
	 const wait = txtElement.getAttribute('data-wait');
	 //Init typewriter
	 new TypeWriter(txtElement, words, wait);
}
