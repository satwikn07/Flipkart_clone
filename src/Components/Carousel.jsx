import React, { useEffect, useRef, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';
 
function CarouselBox() {
//     var x = document.getElementsByClassName("mySlides");
//    console.log(x)
//     var slideIndex = 0;
// var timeOutId;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     // Stop the timeout from triggering.
//     clearTimeout(timeOutId);

//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n==undefined){n = ++slideIndex;}
//     if (n > x.length) {slideIndex = 1;} 
//     if (n < 1) {slideIndex = x.length;}
//     for (let i = 0; i < x.length; i++) {
//          x[i].style.display = "none"; 
//     }
//     x[slideIndex+1].style.display = "block"; 
//     //Schedule a new timeout.
//     timeOutId = setTimeout(showDivs, 8000); // Change image every 8 seconds
// }

        return (
            <Carousel  showThumbs={false}  infiniteLoop={true}  useKeyboardArrows={true} autoPlay={true} >
                 

                 
                <div     className="mySlides">
                <img    style={{width:"1366px", height:"267px"}} src="https://rukminim1.flixcart.com/flap/844/140/image/7795510bfaf2adcf.jpg" alt="HMAK1X4NM5ZI"/>
                </div>
                <div  className="mySlides">
                <img style={{width:"1366px", height:"267px"}} src="https://i.imgur.com/qH1ZkQw.png?1" alt="POCOM3Pro"/>
                </div>
                <div  className="mySlides">
                <img style={{width:"1366px", height:"267px"}} src="https://i.imgur.com/0AuZYLH.png?1" alt="Syska"/>
                </div>
                <div  className="mySlides">
                <img width="100%" src="https://i.imgur.com/bOo2LdK.png?1" alt="Fireboltt"/>
                </div>
               
            </Carousel>
        );
    }

export {CarouselBox}