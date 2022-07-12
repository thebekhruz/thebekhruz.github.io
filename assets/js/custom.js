$(document).ready(function(){
  //the trigger on hover when cursor directed to this class
    $(".core-menu li").click(
    function(){
      //i used the parent ul to show submenu
        $(this).children('ul').toggleClass(".fast");
    }, 
      //when the cursor away 
    function () {
      var isFast = $(this).children('ul').is('.fast');
       $('.core-menu li ul.fast').removeClass('fast');
       $(this).children('ul').toggleClass('fast', !isFast);
        
    });
  //this feature only show on 600px device width
    $(".hamburger-menu").click(function(){
      $(".burger-1, .burger-2, .burger-3").toggleClass("open");
        $(".core-menu").toggleClass("fast");
      $(".main-menu").toggleClass("menu-open");  
    });
});



 $('.slider-nav').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   dots: false,
   asNavFor: '.slider-for',
     responsive: [
    {
      // If Screen Size More than 768px
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false,
      }
    }
  ]
 });
 $('.slider-for').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-nav',
   dots: false,
   focusOnSelect: true
 });



  $('.testimonial-sec-slider').slick({
    infinite: true,    
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    swipe: true,
         responsive: [
    {
      // If Screen Size More than 768px
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        variableWidth: true,
      }
    }
  ]
  });



  $('.testimonial-sec-slider-city-page').slick({
    infinite: true,    
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    swipe: true,
         responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        variableWidth: true,
      }
    }
  ]
  });


  $('.partners-slider').slick({
    infinite: true,    
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: false,
    swipe: true,
         responsive: [
    {
      // If Screen Size More than 768px
      breakpoint: 1200,
      settings: {
        dots: true,
        arrows: false,
        centerMode: true,
        variableWidth: true,
      }
    }
  ]
  });


  $('.masterhead-slider-banner-slider').slick({
    infinite: true,    
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: false,
    swipe: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          arrows: false,
        }
      }
    ]
  });

// sticky section in scrolling

$(function() {
  var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
  var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

  var maxY = footTop - $('#sidebar').outerHeight();

  $(window).scroll(function(evt) {
    var y = $(this).scrollTop();
    if (y > top) {
      if (y < maxY) {
        $('#sidebar').addClass('fixed').removeAttr('style');
      } else {
        $('#sidebar').removeClass('fixed').css({
          // position: 'absolute',
          // top: (maxY - top) + 'px'
        });
      }
    } else {
      $('#sidebar').removeClass('fixed');
    }
  });
});








$(".button").click(function(){
    $("body") .addClass('modal-open');
    $("#step-form").css("display","block");
    
});


$(".cancel").click(function(){
    $("body") .removeClass('modal-open');
     $("#step-form").fadeOut();
});



$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

current_fs = $(this).parent();
next_fs = $(this).parent().next();

//Add Class Active
$("#progressbar li").eq($("fieldset").index(current_fs)).addClass("active");
//$("#account").addClass("active");

//show the next fieldset
next_fs.show();
//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
});
next_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(++current);
});

$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

//Remove class active
$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

});


var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



const settings={
fill: '#29ABE2',
background: '#d7dcdf'
}

const sliders = document.querySelectorAll('.range-slider');

Array.prototype.forEach.call(sliders,(slider)=>{
slider.querySelector('input').addEventListener('input', (event)=>{
slider.querySelector('span').innerHTML = event.target.value;
applyFill(event.target);
});
applyFill(slider.querySelector('input'));
});

function applyFill(slider) {
const percentage = 100*(slider.value-slider.min)/(slider.max-slider.min);
const bg = `linear-gradient(90deg, ${settings.fill} ${percentage}%, ${settings.background} ${percentage+0.1}%)`;
slider.style.background = bg;
}



