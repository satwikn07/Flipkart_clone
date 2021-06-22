import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";  
import { Carousel } from 'react-responsive-carousel';

 
function CarouselBox() {
 

        return (
                 
            <div     className="mySlides">
            <div style={{marginTop:"10px",marginLeft:"10px"}}> 
            <Carousel   showThumbs={false}  infiniteLoop={true}  useKeyboardArrows={true} autoPlay={true} >
                <div>
                <img    style={{width:"1366px", height:"267px"}} src="https://rukminim1.flixcart.com/flap/844/140/image/7795510bfaf2adcf.jpg" alt="HMAK1X4NM5ZI"/>
                </div>
                <div>
                <img style={{width:"1366px", height:"267px"}} src="https://i.imgur.com/qH1ZkQw.png?1" alt="POCOM3Pro"/>
                </div>
                <div>
                <img style={{width:"1366px", height:"267px"}} src="https://i.imgur.com/0AuZYLH.png?1" alt="Syska"/>
                </div>
                <div>
                <img width="100%" src="https://i.imgur.com/bOo2LdK.png?1" alt="Fireboltt"/>
                </div>  
            </Carousel>
            </div>
            </div>
        );
    }

export {CarouselBox}