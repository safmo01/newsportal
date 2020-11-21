
$(function() {   
 $('.slick-track1').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
	 nextArrow: '<div class="slick-next"><img src="images/next.svg"></div>',
prevArrow: '<div class="slick-prev"><img src="images/prev.svg"></div>'
	 
  });
});

$(function() {   
 $('.slick-track2').slick({
     slidesToShow: 6,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
	 nextArrow: '<div class="slick-next"><img src="images/next.svg"></div>',
prevArrow: '<div class="slick-prev"><img src="images/prev.svg"></div>'
	 
  });
});


$(function() {   
 $('.slick-track4').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
	 nextArrow: '<div class="slick-next"><img src="images/next.svg"></div>',
prevArrow: '<div class="slick-prev"><img src="images/prev.svg"></div>'
	 
  });
});


$(function() {   
 $('.slick-track3').slick({
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 2000,
	 nextArrow: '<div class="slick-next"><img src="images/next.svg"></div>',
prevArrow: '<div class="slick-prev"><img src="images/prev.svg"></div>'
	 
  });
});

$(function() {   
  $('.slick-track0').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    nextArrow: '<div class="slick-next"><img src="images/next.svg"></div>',
 prevArrow: '<div class="slick-prev"><img src="images/prev.svg"></div>'
    
   });
 });
 

 async function gethighlights() {
  
  let url = 'http://localhost:8084/api/newssection/1';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}
onload()
{gethighlights();}