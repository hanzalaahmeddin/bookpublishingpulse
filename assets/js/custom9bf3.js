function openNav() {
  document.getElementById("mySidenav").style.left = "0px";
}
function closeNav() {
  document.getElementById("mySidenav").style.left = "-250px";
}
// END: RESPONSIVE NAVBAR 

function setButtonURL()
{
  $zopim.livechat.window.toggle();
}

// WOW ANIMATION

new WOW().init();

// WOW ANIMATION

function setButtonURL()
{
  $zopim.livechat.window.toggle();
}


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
  }
  var a=getURLParameter('pack');
$('#packages option:eq('+ a +')').prop('selected', true);


$('.logo-platform').slick({
slidesToShow: 7,
slidesToScroll: 1,
loop: true,
autoplay: true,
arrows: false,
dots: false,
autoplaySpeed: 1000,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 995,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 450,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.book_coverslider').slick({
slidesToShow: 4,
slidesToScroll: 1,
loop: true,
autoplay: true,
arrows: false,
dots: false,
autoplaySpeed: 3000,
 responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 995,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 450,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

$('.timeline__slider').slick({
slidesToShow: 3,
slidesToScroll: 1,
loop: true,
autoplay: false,
arrows: false,
dots: true,
autoplaySpeed: 1000,
 responsive: [
  {
    breakpoint: 1040,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 995,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.portfolio-slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
arrows: false,
autoplaySpeed: 2000,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 995,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 580,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.Process__services__slider').slick({
slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
dots: false,
arrows: false,
autoplaySpeed: 2000,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 995,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 780,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.services__boxes__slider').slick({
slidesToShow: 4,
slidesToScroll: 1,
autoplay: true,
dots: true,
arrows: false,
autoplaySpeed: 2000,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 995,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 780,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});


$('.review-slider').slick({
slidesToShow: 1,
slidesToScroll: 1,
autoplay: true,
arrows: true,
dots: false,
autoplaySpeed: 2000,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 995,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 780,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

// $(document).ready(function() {
//     $('.slider-for').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         fade: true,
//         dots: true,
//         asNavFor: '.slider-nav'
//     });
//     $('.slider-nav').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         asNavFor: '.slider-for',
//         dots: false,
//         centerMode: false,
//         focusOnSelect: true
//     });

// });

// Counter JS

const counterUp = window.counterUp.default

const callback = entries => {

  entries.forEach(entry => {

    const el = entry.target

    if (entry.isIntersecting && !el.classList.contains('is-visible')) {

      counterUp(el, {

        duration: 2000,

        delay: 16,

      })

      el.classList.add('is-visible')

    }

  })

}



const IO = new IntersectionObserver(callback, {

  threshold: 1

})



const els = document.querySelectorAll('.counter__number');

els.forEach((el) => {

  IO.observe(el)

});


$('.count').each(function () {
$(this).prop('Counter',0).animate({
Counter: $(this).text()
}, {
duration: 10000,
easing: 'swing',
step: function (now) {
$(this).text(Math.ceil(now));
}
});
});


// $('.slider-for-images').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//     centerMode: false,
//   fade: true,
//   asNavFor: '.slider-nav-content'
// });
// $('.slider-nav-content').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   asNavFor: '.slider-for-images',
//   dots: true,
//   centerMode: false,
//   focusOnSelect: true
// });



//=========== FLOATING FORM STARTS
$(".clickbutton").click(function(){
 $('.floatbutton').toggleClass("active");
 //$('.crossplus').toggleClass("rotate");
});
//=========== FLOATING FORM ENDS

function order_now_value(objButton, packid=1){
  x = objButton.name;
  $('#packages').val($('#packages').find('[pack="'+packid+'"]').attr('value'));
  try{
      document.getElementById('lead_area_popup1').value = x;
      document.getElementById('lead_text').innerHTML = x;
  }catch(ex){}
}


// intel Tel Input
let ip; 
let ip_value;
$("#phone-country,#phone-coun,#phone-order").intlTelInput({
   
    allowDropdown: false,
    // autoHideDialCode: false,
    // autoPlaceholder: "off",
    // dropdownContainer: "body",
    // excludeCountries: ["us"],
    // formatOnDisplay: false,
  geoIpLookup: function(callback) {
          $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
            ip=resp.ip;
          
            
          });
        },
     initialCountry: "auto",
     nationalMode: true,
     separateDialCode: true,
    // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    // placeholderNumberType: "MOBILE",
    // preferredCountries: ['cn', 'jp'],
   // utilsScript: "<?php echo $basesurl;?>js/utils.js"
  });

setTimeout(function(){
  $('input[name="quote[pc]"]').val($('.selected-dial-code').text());
  $('input[name="quote[cip]"]').val(ip);
  $('input[name="quote[ctry]"]').val( $('.country-list .country.active .country-name').text());
}, 3000);


$('body').delegate('.country','click',function(){
$('input[name="quote[pc]"]').val($(this).find('.dial-code').text());
$('input[name="quote[cip]"]').val(ip);
$('input[name="quote[ctry]"]').val($(this).closest("form").find('.country-list .country.active .country-name').text());

/*var oldString2=$('.selected-flag').attr('title').toUpperCase();
var newString12 = oldString2.split(':',1)[0];
             $('input[name="ctry"]').val(newString12);*/
});



if($(window).innerWidth() <= 751) {
$('.portfolio_slid').slick({
     dots: true,
     infinite: true,
     autoplay:true,
     speed: 300,
     arrows:false,
     slidesToShow: 1,
     adaptiveHeight: true
  });
}


// const stats = document.querySelectorAll(".counter");

// stats.forEach(stat => {
//   // pattern used to seperate input number from html into an array of numbers and non numbers. EX $65.3M -> ["$65.3M", "$", "65", ".", "3", "M"]
//   const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?/;
//   const time = 1000;
//   let result = [...patt.exec(stat.textContent)];
//   let fresh = true;
//   let ticks;

//   // Remove first full match from result array (we dont need the full match, just the individual match groups).
//   result.shift();
//   // Remove undefined values from result array where they didnt have a match in one of the optional regex groups
//   result = result.filter(res => res != null);

//   while (stat.firstChild) {
//     stat.removeChild(stat.firstChild);
//   }

//   for (let res of result) {
//     if (isNaN(res)) {
//       stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
//     } else {
//       for (let i = 0; i < res.length; i++) {
//         stat.insertAdjacentHTML(
//           "beforeend",
//           `<span data-value="${res[i]}">
//             <span>&ndash;</span>
//             ${Array(parseInt(res[i]) + 1)
//               .join(0)
//               .split(0)
//               .map(
//                 (x, j) => `
//               <span>${j}</span>
//             `
//               )
//               .join("")}
//           </span>`
//         );
//       }
//     }
//   }

//   ticks = [...stat.querySelectorAll("span[data-value]")];

//   let activate = () => {
//     let top = stat.getBoundingClientRect().top;
//     let offset = window.innerHeight * 0.8;

//     setTimeout(() => {
//       fresh = false;
//     }, time);

//     if (top < offset) {
//       setTimeout(() => {
//         for (let tick of ticks) {
//           let dist = parseInt(tick.getAttribute("data-value")) + 1;
//           tick.style.transform = `translateY(-${dist * 100}%)`;
//         }
//       }, fresh ? time : 0);
//       window.removeEventListener("scroll", activate);
//     }
//   };
//   window.addEventListener("scroll", activate);
//   activate();
// });


// document.onkeydown = function(e) {
// if(event.keyCode == 123) {
//    return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
//    return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
//    return false;
// }
// if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
//    return false;
// }
// if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
//    return false;
// }
// }


// $(document).on({
//   "contextmenu": function(e) {
//       console.log("ctx menu button:", e.which); 

//       // Stop the context menu
//       e.preventDefault();
//   },
//   "mousedown": function(e) { 
//       console.log("normal mouse down:", e.which); 
//   },
//   "mouseup": function(e) { 
//       console.log("normal mouse up:", e.which); 
//   }
// });

//*****************************

// Mobile Navigation

//*****************************

$('.mobile-nav-btn').click(function() {

  $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');

});





$('.firstlevel li a').click(function() {

  if ($(this).hasClass('active')) {

      $(this).removeClass('active');

      $(this).siblings('ul').slideUp();

  } else {

      $('.firstlevel li a').removeClass('active');

      $(this).addClass('active');

      $('.dropdown').slideUp();

      $(this).siblings('ul').slideDown();

  }

});



$('.mainnav > li > a').click(function() {

  if ($(this).hasClass('active')) {

      $(this).removeClass('active');

      $(this).parents('li').children('.firstlevel').slideUp();

  } else {

      $(this).addClass('active');

      $(this).parents('li').children('.firstlevel').slideDown();

      $(this).parents('li').siblings('li').children('a').removeClass('active');

      $(this).parents('li').siblings('li').children('.firstlevel').slideUp();

  }

});


// var abc = document.location.href.match(/[^\/]+$/)[0];
// var newabc = abc.split('.').slice(0, -1).join('.');
// // console.log(newabc);
// var myArray = newabc.split("-");
// // console.log(myArray[2]);
// if(myArray[2] == 'package')
// {
// $('body').addClass('packages_banner');
// }



