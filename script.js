//parallax effect

//window.addEventListener('scroll',function(){
//    //const parallax = document.querySelector('.hero-section');
//    let scrollPosition = window.pageYOffset;
//    console.log(scrollPosition);
//    const parallax = document.getElementsByClassName('parallax');
//    //parallax.style.transform='translateY('+scrollPosition*0.5+'px)';
//    parallax.style.backgroundPositionY=scrollPosition*0.5+'px'
//})

//preloader
$(window).on('load',function(){
    console.log("entered onload!")
    $(".loader-wrapper").hide();
    console.log("should have executed hide function");
});

// navbar color change
$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#about');
    var offset = startchange.offset();
     if (startchange.length){
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $(".navbar").css('background-color', '#4b4b4b');
           $(".navbar").css('transition', '0.85s','ease-in-out');
           $(".navbar").css('background', 'rgba(240, 106, 91,0.85)');
           $("#logo-text").css('border','none');
        } else {
           $('.navbar').css('background-color', 'transparent');
           $("#logo-text").css('border-top','1px solid #fff');
           $("#logo-text").css('border-bottom','1px solid #fff');
        }
    });
     }
 });

//type write effect

const textArray=["an IOT Enthusiast", "a Web Developer", "a Designer"];
const typingDelay=100;
const erasingDelay=70;
const nextTextDelay=2000;

let textArrayIndex = 0;
let charIndex=0;

const dynamicText = document.querySelector(".dynamic-text");

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        dynamicText.textContent+=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }
    else{
        setTimeout(erase,nextTextDelay);
    }
}

function erase(){
    if(charIndex >0){
        dynamicText.textContent=textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
    }
    else{
        textArrayIndex++;
        if(textArrayIndex>=textArray.length){
            textArrayIndex=0;
        }
        setTimeout(type,typingDelay+1100);
    }
}

document.addEventListener("DOMContentLoaded",function(){
    setTimeout(type,nextTextDelay+250);
});


// show more button action

const showmore = document.getElementsByClassName("pro-btn");
const extra = document.getElementsByClassName("extra-project");
showmore.addEventListener('click',function(){
    extra.style.display='none';
});
