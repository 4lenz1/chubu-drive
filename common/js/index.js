// JavaScript Document



$(document).ready(function () {

			var swiper = new Swiper('.item_bottom .swiper-container', {
			    slidesPerView: 2,
                //loop:true,
			    spaceBetween: 0,
			    navigation: {
			        nextEl: '.item_bottom .swiper-button-next',
			        prevEl: '.item_bottom .swiper-button-prev',
			    },
			});
			var swiper = new Swiper('.former .swiper-container', {
			    slidesPerView: "auto",
                //loop:true,
			    spaceBetween: 0,
			});

		});
