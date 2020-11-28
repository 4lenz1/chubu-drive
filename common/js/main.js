// JavaScript Document

jQuery(document).ready(function($){
	//tab切り替え
	$('.js-tab-btn').click(function(){
		//セレクタ設定
		var thisElm = $(this);
		var thisTabWrap = thisElm.parents('.js-tab-wrap');
		var thisTabBtn = thisTabWrap.find('.js-tab-btn');
		var thisTabContents = thisTabWrap.find('.js-tab-contents');
		
		//current class
		var currentClass = 'current';
		
		//js-tab-btn current 切り替え
		thisTabBtn.removeClass(currentClass);
		thisElm.addClass(currentClass);
		
		//クリックされた tabが何番目か取得
		var thisElmIndex =  thisTabBtn.index(this);
		
		//js-tab-contents 切り替え
		thisTabContents.removeClass(currentClass);
		thisTabContents.eq(thisElmIndex).addClass(currentClass);
	});
});

$(document).ready(function(){
			$('.slick-slider').slick({
				autoplay:true,
				autoplaySpeed:3000,
				speed:2000,
				dots: true,
				arrows:false,
				fade: true,
				appendDots:$("#apDots")
			});
		});
$(document).ready(function(){
			$('.slick-slider_sp').slick({
				autoplay:true,
				autoplaySpeed:3000,
				speed:2000,
				dots: true,
				arrows:false,
				fade: true,
				appendDots:$("#apDots_sp")
			});

		});

jQuery(function($){
    $('.slider').slick({
		autoplay:true,
		autoplaySpeed:5000,
		dots:false,
		arrows:false,
		slidesToShow:3
    });
    var swiper3d = new Swiper('.test_look .swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 5,
        initialSlide:1,
        centeredSlides: true,
        loop: true,
        slideToClickedSlide: true,

    });
});

//ハンバーガーメニュー
jQuery(document).ready(function(){

  jQuery('.hamburger').on('click', function(){
    //jQuery('#navigation').slideToggle(400);
	 $(".hamburger2").removeClass("active");
	$("nav#navigation2").removeClass("visible2");
    jQuery(this).toggleClass('active');
	$('nav').toggleClass('visible');
  });

});

//ハンバーガーメニュー
jQuery(document).ready(function(){

  jQuery('.hamburger2').on('click', function(){
	   $(".hamburger").removeClass("active");
	$("nav").removeClass("visible");
    jQuery(this).toggleClass('active');
	$('nav#navigation2').toggleClass('visible2');
  });
});


