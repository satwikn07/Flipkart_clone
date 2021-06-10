import React, { useEffect, useState } from "react";
import styles from "../CSS/SixthDiv.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {electronics} from "./sub-json";

function SixthDiv(){

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
}

    return <div className={styles.main}>

    <div className={styles.head}>
    <div>
    <h2 style={{marginTop:"15px",fontSize:"22px",lineHeight:"1.2",fontWeight:"500px"}}>Top Deals on Electronics 
    <p><small style={{fontSize:"14px"}}>Devices and Accessories</small></p></h2>
    </div>
    <button className={styles.button}>VIEW ALL</button>
    </div>
        <div style={{padding:"10px"}}>

        <Carousel
  swipeable={false}
  draggable={false}
//   showDots={true}
  responsive={responsive}
  infinite={false}
//   autoPlay={true}
  autoPlaySpeed={1000}
//   keyBoardControl={true}
  customTransition="all .1"
  transitionDuration={500}
  containerClass="carousel-container"
  itemClass="carousel-item-padding-40-px"
>

{electronics.map(el=>{
    return <div className={styles.card} >
           <div style={{height:"150px"}}><img width="100%" height="90%" src={el.src} alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <strong>{el.heading}</strong>
            <p style={{color:"green"}}>{el.discount}</p>
            <p style={{lineHeight:".8"}}>{el.desc}</p>
            </div>
            </div>
})}

</Carousel>

        </div>
    </div>    
    
}
export {SixthDiv};