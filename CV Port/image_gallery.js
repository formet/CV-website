
var img;

var model = document.getElementById('myGallery');



var modelImg = document.getElementById('img_0');

var head = document.getElementById( 'title' );

var pages = document.getElementsByClassName( 'gal');

var nex = document.getElementsByClassName('next')[0];

var prev = document.getElementsByClassName('prev')[0];
var index=0;



	
	
// make index not go past begining or end



nex.onclick = function(){
	
	index++;

	img = document.getElementsByClassName('gal')[index];
	modelImg.src=img.src;
	
	
}

	prev.onclick = function(){
	
	index--;
	img = document.getElementsByClassName('gal')[index];
	modelImg.src=img.src;
	
	}




function show(n){
	
		index= (n-1);
		img = document.getElementsByClassName('gal')[index];
		model.style.display = 'block';
		modelImg.src = img.src;
		head.style.display = 'none';

}
	






	




var hid = document.getElementsByClassName('close')[0];



hid.onclick = function() {
	
	model.style.display = 'none';
	
	head.style.display = 'block';
	
}







