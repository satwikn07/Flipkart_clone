import React, { useEffect, useState } from "react";
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import {slidesToShowPlugin} from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import styles from "../CSS/ThirdDiv.module.css";

function ThirdHeader(){
    let [hr,setHr] = useState(2);
    let [min,setMin] = useState(2);
    let [sec,setSec] = useState(2);
    var x;
    if(sec==0 && min==0 && hr==0){
        clearInterval(x);
    }
    else if(sec==-1){
        setMin(pre=>pre-1);
        setSec(2);
    }
    else if(min==-1){
        setHr(pre=>pre-1);
        setMin(2);
    }

    useEffect(()=>{
        x= setInterval(function() {
            setSec(pre=>pre-1);
      }, 1000);
      
        return ()=>{
            clearInterval(x)
        }
    },[])
    // function clockStart() {

        // if(min==0){
        //     setHr(pre=>pre-1);
        //     setMin(59);
        // }
        // if(hr==0){
        //     console.log("expired");
        // }

//   }

    return <div style={{backgroundColor:"white"}}>

    <div style={{display:"flex"}}>
    <div style={{width:"1100px"}}>
    <div className={styles.timerDiv}>
    <span style={{display:"flex"}}>
    <h4 style={{marginLeft:"50px"}}>Deals of the day</h4> :<span className={styles.timerSpan}>{hr}:{min}:{sec} left</span></span>
    <button className={styles.button}>VIEW ALL</button>
    </div>
        <div style={{padding:"10px"}}>
        <Carousel
            plugins={[
                'arrows',
                {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 5
                }
                },
            ]}
        >
            <div className={styles.card}>
            <div style={{height:"150px"}}><img width="100%" height="80%" src="https://rukminim1.flixcart.com/image/150/150/jmjhifk0/sanitary-pad-pantyliner/s/z/6/ultra-clean-plus-xl-44-sanitary-pad-whisper-original-imaf9ezuqgkpayhc.jpeg?q=70" alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <h6>Healthcare</h6>
            <p>Extra 5% off</p>
            <p>masks, body pain,relief </p>
            </div>
            </div>

            <div className={styles.card} >
           <div style={{height:"150px"}}><img width="100%" height="80%" src="https://rukminim1.flixcart.com/image/150/150/kevpwnk0/vehicle-pull-along/k/5/b/35300-2319a-adventure-force-original-imafvgmmuzhjvaej.jpeg?q=70" alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <h6>Healthcare</h6>
            <p>Extra 5% off</p>
            <p>masks, body pain,relief </p>
            </div>
            </div>

            <div className={styles.card} >
           <div style={{height:"150px"}}><img width="100%" height="80%" src="https://rukminim1.flixcart.com/image/150/150/k65d18w0pkrrdj/shoe/h/m/f/6-xxzbnnwkov-kraasa-original-imafnbtjwgzbgwzn.jpeg?q=70" alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <h6>Healthcare</h6>
            <p>Extra 5% off</p>
            <p>masks, body pain,relief </p>
            </div>
            </div>

            <div className={styles.card} >
            <div style={{height:"150px"}}><img width="100%" height="80%" src="https://rukminim1.flixcart.com/image/150/150/kikluvk0-0/diaper/v/i/k/m-wonder-pullups-pant-style-premium-diaper-with-wetness-original-imafybngsw38qjrh.jpeg?q=70" alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <h6>Healthcare</h6>
            <p>Extra 5% off</p>
            <p>masks, body pain,relief </p>
            </div>
            </div>

            <div className={styles.card} >
            <div style={{height:"150px"}}><img width="100%" height="80%" src="https://rukminim1.flixcart.com/image/150/150/jsw3yq80/container/b/3/c/magna-12-pcs-container-set-blue-cello-original-imafed34nwvrmshy.jpeg?q=70" alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <h6>Healthcare</h6>
            <p>Extra 5% off</p>
            <p>masks, body pain,relief </p>
            </div>
            </div>

            <div className={styles.card} >
            <div style={{height:"150px"}}><img width="100%" height="80%" src="https://rukminim1.flixcart.com/image/150/150/kehfi4w0/sticker/y/h/r/wallpaper-happy-winter-trees-and-frames-home-diy-self-adhesive-original-imafv5n5qfzwyt8k.jpeg?q=70" alt="pic" /></div>
            <div style={{textAlign:"center"}}>
            <h6>Healthcare</h6>
            <p>Extra 5% off</p>
            <p>masks, body pain,relief </p>
            </div>
            </div>

        </Carousel>
        </div>
    </div>    
        <div style={{width:"250px",padding:"10px"}}>
            <img width="100%" height="100%" src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70" alt="pic" />
        </div>
    </div>
        </div>
}
export {ThirdHeader};