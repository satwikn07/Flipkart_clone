import { useRef } from "react"
import { useState } from "react"
import styles from './Warranty.module.css'
import styled from "styled-components"
import { width } from "@material-ui/system"
    export const Warranty = ()=>{
    const [pin, setPin] = useState(831001)
    const [change, setChange] = useState(false)
    const inpRef = useRef();
    return (
        <div className={styles.warranty}>
            <div> {/**Warraty tag and delivery */}
                <div>
                    <img src="https://rukminim1.flixcart.com/image/160/160/prod-fk-cms-brand-images/34c4b092f93b1e0f96f5f6c3b64049b5fda6ab07ed14201466005791b7644994.jpg?q=90" style={{width:"3.5vw",border:"1px solid rgb(240,240,240)",marginRight:"3vw"}} alt="" />    
                    <span style={{fontSize:"14px", fontWeight:"400"}}> 1 Year Onsite Warrant <span style={{color:"#2874F1",fontWeight:"500",marginLeft:"0.5vw",cursor:"pointer"}}>Know More</span></span>
                </div>{/**Lenovo Tag */}
                <div style={{display:"grid", gridTemplateColumns:"7vw 14.7vw"}}>
                    <div style={{color:"#878787",fontSize:"14px",fontWeight:"500",marginTop:"1vh"}}>Delivery</div>
                    <div class="input-icons" style={{borderBottom:"2px solid #2874F1"}}>
                             <i class="fa fa-map-marker-alt" style={{color:"#2874F1",fontSize:"2vh"}}></i>
                            <input class="input-field" 
                            type="text" 
                            ref={inpRef}
                            style={{fontSize:"14px", fontWeight:"500",border:"none",outline:"none"}} 
                            value={pin} 
                            onChange={(e)=>setPin(e.target.value)}/>
                            <span style={{color:"#2874F1",fontWeight:"500", fontSize:"14px", cursor:"pointer"}}
                                onClick={()=>{setChange(prev=>!prev);inpRef.current.focus();}}
                                
                            >{change?`Check`:`Change`}</span>
                            
                    </div>
                    <div></div>
                    <div>
                        <span style={{fontSize:"14px", fontWeight:"500"}}>Delivery by 23 Jun, Wednesday</span> <br />
                        <span style={{color:"#2874F1",fontWeight:"500", fontSize:"14px",cursor:"pointer"}}>View Details</span>
                    </div>
                   
                </div>{/**Delivery */}
            </div>
            <div style={{display:"grid", gridTemplateColumns:"26vw 26vw"}}> {/**3 uls along with headings , diffreent */}
               <div style={{display:"grid", gridTemplateColumns:"4vw 21vw"}}>{/**section div*/}
                   <div style={{color:"#878787",fontSize:"14px",fontWeight:"500",marginTop:"1.5vh"}}>Highlights</div>
                   <div style={{fontSize:"14px", fontWeight:"400"}}>
                        <ul>
                            <li>Stylish & Portable Thin and Light Laptop</li>
                            <li>15.6 inch Full HD LED Backlit Anti-glare TN Display</li>
                            <li>Light Laptop without Optical Disk Drive</li>
                            
                        </ul>
                   </div>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"6vw 21vw"}}>{/**section div*/}
                   <div style={{color:"#878787",fontSize:"14px",fontWeight:"500",marginTop:"1vh"}}>Easy Payment Options</div>
                   <div style={{fontSize:"14px", fontWeight:"400"}}>
                        <ul>
                            <li>No cost EMI starting from ₹4,999/month</li>
                            <li>Cash on Delivery</li>
                            <li>Net banking & Credit/ Debit/ ATM card</li>
                        
                        <span style={{color:"#2874F1",fontWeight:"500", fontSize:"14px",cursor:"pointer",paddingLeft:"1.5vw"}}>View Details</span>
                        </ul>
                   </div>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"4vw 21vw"}}>{/**section div*/}
                   <div style={{color:"#878787",fontSize:"14px",fontWeight:"500",marginTop:"0vh"}}>Seller</div>
                   <div style={{fontSize:"14px", fontWeight:"400"}}>
                        <ul>
                            <span style={{color:"#2874F1",fontWeight:"500", fontSize:"14px",cursor:"pointer",paddingLeft:"0.3vw",marginRight:"0.5vw"}}>PETILANTE online</span>
                            <span style={{borderRadius:"35%" ,fontFamily:"roboto",fontSize:"10px",padding:"2px 4px 2px 6px",fontWeight:500,backgroundColor:"#2874F1",color:"rgb(255, 255, 255)"}}>
                                 4.7    <span class="fa fa-star" style={{fontSize:"8px"}}></span>

                            </span>
                            <li>7 Days Replacement Policy</li>
                            <li>GST invoice available</li>
                            
                            <span style={{fontSize:"14px",paddingLeft:"0.3vw",fontWeight:"400"}}>View <span style={{cursor:"pointer",fontWeight:"500",color:"#2874F1"}}>More Sellers</span> starting from <span style={{fontWeight:"500"}}>₹29,990</span></span>
                        </ul>
                   </div>
                </div>
            </div>
            <div> {/**Super coin picture */}
                <img src="warranty.png" alt="" style={{width:"100%"}}/>
            </div>
        </div>
    )
}