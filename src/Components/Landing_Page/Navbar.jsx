import React from 'react'
import  '../../CSS/Landing_page_css/Navbar.module.css'
import { Link } from 'react-router-dom'
import { Redirect, useHistory } from "react-router"
import styles from '../Productdescription/Navbar.module.css'

export const Navbar =() =>{
  const history = useHistory();
  const goToLanding = ()=>{
    history.push("/")
  }
  
  //<i class="fa fa-search" ></i>
  //style={{border:"1px solid black"}}
  if(window.location.pathname==="/"){
    return (
      <div  style={{display:"grid", gridTemplateColumns:"13vw 5vw 38vw 13vw 8vw 9vw 6vw 8vw", gridTemplateRows:"8vh", background:"#2874F0",width:"100%"}}>
          <div></div>
          <div style={{lineHeight:"1px",paddingTop:"1.5vh",cursor:"pointer"}} onClick={goToLanding}> <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""
           style={{width:"100%", height:"22px"}}/>
               <span style={{fontSize:"11px", fontStyle:"italic",fontWeight:"500", color:"#f0f0f0"}}>Explore</span>
                <span style={{fontSize:"11px", fontStyle:"italic",fontWeight:"500", color:"#ffe500"}}>{` Plus`}</span>
                 <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" style={{height:"10px"}}/>
           </div>
          <div style={{paddingTop:"1.5vh", paddingLeft:"1vh"}}>
              {/* <input type="text" style={{border:"none",height:"4.9vh", borderRadius:"1px", outline:"none", width:"93%"}} placeholder={'Search for products, brands and more'} /> */}
              {/* <button style={{background:"white", color:"#2874F0", border:"none",height:"4.95vh",outline:"none"}}><i class="fa fa-search"></i></button> */}
            <div className="input-icons" style={{background:"white"}}>
              
              <input style={{border:"none",height:"4.5vh", outline:"none", width:"95%",fontSize:"14px",fontFamily:"sans-serif",fontWeight:"400"}} placeholder={'   Search for products, brands and more'} className={"input-field"} type="text" />
              <i  class="fa fa-search" style={{fontSize:"18px",color:"#2874F0",marginTop:"1.4vh"}}></i>
           
            </div>
          </div>
          <div ></div>
          <div style={{paddingTop:"2vh"}}>
              <button style={{background:"white", color:"#2874F0", fontSize:"16px", fontWeight:"500", border:"none", outline:"none",width:"100%", height:"68%",borderRadius:"1px",cursor:"pointer"}}>Login</button>
          </div>
          <div style={{paddingTop:"2vh"}}>
              <button style={{background:"#2874F0", color:"white", fontSize:"16px", fontWeight:"500", border:"none", outline:"none",width:"100%", height:"65%",cursor:"pointer"}}>{`More `}<i class="fa fa-angle-down" style={{fontWeight:"200"}}></i></button>
          
          </div>
          <div style={{paddingTop:"2vh"}}>
              <button style={{background:"#2874F0", color:"white", fontSize:"16px", fontWeight:"500", border:"none", outline:"none",width:"100%", height:"65%",cursor:"pointer"}}><i class="fa fa-shopping-cart"></i> 
            {`  Cart`}</button>
  
          </div>
          <div></div>
      </div>)
  }
  return (
    <div  style={{display:"grid", gridTemplateColumns:"13vw 5vw 38vw 13vw 8vw 9vw 6vw 8vw", gridTemplateRows:"8vh", background:"#2874F0",width:"100%"}}>
        <div></div>
        <div style={{lineHeight:"1px",paddingTop:"1.5vh",cursor:"pointer"}} onClick={goToLanding}> <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""
         style={{width:"100%", height:"22px"}}/>
             <span style={{fontSize:"11px", fontStyle:"italic",fontWeight:"500", color:"#f0f0f0"}}>Explore</span>
              <span style={{fontSize:"11px", fontStyle:"italic",fontWeight:"500", color:"#ffe500"}}>{` Plus`}</span>
               <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" style={{height:"10px"}}/>
         </div>
        <div style={{paddingTop:"1.5vh", paddingLeft:"1vh"}}>
            {/* <input type="text" style={{border:"none",height:"4.9vh", borderRadius:"1px", outline:"none", width:"93%"}} placeholder={'Search for products, brands and more'} /> */}
            {/* <button style={{background:"white", color:"#2874F0", border:"none",height:"4.95vh",outline:"none"}}><i class="fa fa-search"></i></button> */}
          <div className="input-icons" style={{background:"white"}}>
            
            <input style={{border:"none",height:"4.5vh", outline:"none", width:"95%",fontSize:"14px",fontFamily:"sans-serif",fontWeight:"400"}} placeholder={'   Search for products, brands and more'} className={"input-field"} type="text" />
            <i  class="fa fa-search" style={{fontSize:"18px",color:"#2874F0",marginTop:"1.4vh"}}></i>
         
          </div>
        </div>
        <div ></div>
        <div style={{paddingTop:"2vh"}}>
            
        </div>
        <div style={{paddingTop:"2vh"}}>
        
        </div>
        <div style={{paddingTop:"2vh"}}>
        

        </div>
        <div></div>
    </div>
  )
}
// style={{fontWeight:"200",fontSize:"15px",color:"white"}}
        