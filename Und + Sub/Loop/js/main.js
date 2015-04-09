(function(){

	var slider = 1;
	var next_img = 2;

	function start_slider(){
		var count = $("#slider img").size();
		var loop = setInterval(function(){



		$("#slider img").fadeOut(300);
		$("#slider img#" + next_img).fadeIn(300);
		slider = next_img;
		next_img++;

		if(next_img > count){
		slider = 0;
		next_img = 1;
		}
		}, 3000);
	}

	$(document).ready(function(){
	$("#slider img#1").fadeIn(300);
	start_slider();
	});﻿


	slider.forEach(function(next_img, index){
			console.log(next_img, index);
			$('#slider').append('<div class="thumbnail" data-index="'+index+'"><img src="imgs/'+next_img+'"/></div>');
		});



	// sliderint = 1;
	// sliderNext = 2;

	// $(document).ready(function(){
	// 	$("#slider > img#1").fadeIn(300);
	// 	startSlider();
	// });	

	// function startSlider(){
	// 	count = $("#slider > img").size();

	// 	loop = setInterval(function(){

	// 		if(sliderNext > count){
	// 			sliderNext = 1;
	// 			sliderInt = 1;
	// 		}

	// 		$("#slider > img").fadeOut(300);
	// 		$("#slider > img#" + sliderNext).fadeIn(300);

	// 		sliderInt = sliderNext;
	// 		sliderNext = sliderNext + 1;

	// 	}, 3000)


	// }

	// function prev(){
	// 	newSlide = sliderInt - 1;
	// 	showSlide(newSlide);

	// }

	// function next(){
	// 	newSlide = sliderInt + 1;
	// 	showSlide(newSlide);
	// }

	// function showSlide(id){
	// 	if(id > count){
	// 			id = 1;
	// 		}else if(id<1){
	// 			id = count;
	// 		}

	// 		$("#slider > img").fadeOut(300);
	// 		$("#slider > img#" + id).fadeIn(300);

	// 		sliderInt = id;
	// 		sliderNext = id + 1;
	// }

	// var 
}).call(this);