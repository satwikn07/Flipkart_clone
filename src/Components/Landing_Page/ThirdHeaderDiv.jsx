import React, { useEffect, useState } from "react";
import styles from "../../CSS/Landing_page_css/ThirdDiv.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {thirdHeaderData} from "./sub-json";

function ThirdHeader(){
    let [hr,setHr] = useState(23);
    let [min,setMin] = useState(59);
    let [sec,setSec] = useState(59);
    var x;
    if(sec==0 && min==0 && hr==0){
        clearInterval(x);
    }
    else if(sec==-1){
        setMin(pre=>pre-1);
        setSec(59);
    }
    else if(min==-1){
        setHr(pre=>pre-1);
        setMin(59);
    }

    useEffect(()=>{
        x= setInterval(function() {
            setSec(pre=>pre-1);
      }, 1000);
      
        return ()=>{
            clearInterval(x)
        }
    },[])

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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

    return <div style={{backgroundColor:"white"}}>

    <div style={{display:"flex"}}>
    <div style={{width:"1100px"}}>
    <div className={styles.timerDiv}>
    <span style={{display:"flex"}}>
    <h4 style={{marginLeft:"50px",fontWeight:"500"}}>Deals of the day</h4> :<span className={styles.timerSpan}><span style={{marginRight:"10px"}}><img width="28px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" /></span>{hr}:{min}:{sec} left</span></span>
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

{thirdHeaderData.map(el=>{
    return <div className={styles.card} >
           <div style={{height:"200px"}}><img width="100%" height="80%" src={el.src} alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <strong>{el.heading}</strong>
            <p style={{color:"green"}}>{el.discount}</p>
            <p style={{lineHeight:"1.1"}}>{el.desc}</p>
            </div>
            </div>
})}

</Carousel>

        </div>
    </div>    
        <div className={styles.lastDiv} style={{width:"250px",padding:"10px"}}>
            <img width="100%" height="100%" src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="pic" />
        </div>
    </div>
        </div>
}
export {ThirdHeader};