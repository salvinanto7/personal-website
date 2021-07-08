//parallax effect

window.addEventListener('scroll',function(){
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    //console.log(scrollPosition);
    parallax.style.transform='translateY('+scrollPosition*0.5+'px)';
})


//type write effect

const textArray=["an IOT Enthusiast", "a Web Developer", "a Designer"];
const typingDelay=200;
const erasingDelay=100;
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

