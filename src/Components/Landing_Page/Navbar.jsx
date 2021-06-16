import React from 'react'
import  styles from '../../CSS/Landing_page_css/Navbar.module.css'
import { Link } from 'react-router-dom'
export const Navbar =() =>{
  //<i class="fa fa-search" ></i>
  return (
    <div style={{display:"grid", gridTemplateColumns:"13vw 5vw 38vw 13vw 8vw 9vw 4vw 10vw", gridTemplateRows:"8vh", background:"#2874F0"}}>
        <div style={{border:"1px solid black"}}>1</div>
        <div style={{border:"1px solid black"}}> <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" style={{width:"100%", height:"20px"}}/>
             <span style={{fontSize:"11px", fontStyle:"italic", color:"#f0f0f0"}}>Explore</span> <span style={{fontSize:"11px", fontStyle:"italic", color:"#ffe500"}}>Plus</span> <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" style={{height:"10px"}}/>
         </div>
        <div style={{border:"1px solid black",paddingTop:"1vh", paddingLeft:"1vh"}}>
            <input type="text" style={{border:"none",height:"4.9vh", borderRadius:"1px", outline:"none", width:"93%"}} placeholder={'Search for products, brands and more'} />
            <button style={{background:"white", color:"#2874F0", border:"none",height:"5vh",outline:"none"}}><i class="fa fa-search"></i></button>
        </div>
        <div style={{border:"1px solid black"}}>4</div>
        <div style={{border:"1px solid black"}}>5</div>
        <div style={{border:"1px solid black"}}>6</div>
        <div style={{border:"1px solid black"}}>7</div>
        <div style={{border:"1px solid black"}}>8</div>
    </div>
  )
}
        