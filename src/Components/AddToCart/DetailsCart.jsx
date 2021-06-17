import React, { useState } from "react";
import styles  from '../../CSS/AddToCart.module.css' 
import Modal from 'react-modal'; 
function DetailsCart(){

    const [isOpen, setIsOpen] = useState(false);
    function toggleModal() {
      setIsOpen(!isOpen);
    }

    const checkout = ()=>{
        history.push("/checkout");
    }

    return (
        <div> 
           <div   className={styles.box} style={{ backgroundColor: "#f1f3f6"}}>
           <div className={styles.bigcont}>
           <div className={styles.smallone}>
                   {/* <div className={styles.item} className={styles.head}>My Cart (1)</div>
                   <div>
                       
                   <img style={{marginLeft:"320px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" />
                     
                   </div>
                   <div style={{fontWeight: "500",color: "#878787"}}>Deliver to</div>
                   <div style={{border:"1px solid grey"}}>
                      <div>Afzal Ahmad, <span className={styles.addrs}>village and pst rasulabad musafirkhana sulatnpur</span></div>
                   </div> */}
               </div>
               <hr/>
             
               <div className={styles.products}>
                   <div> 
               <img style={{height:"100px"}} alt="" src="https://rukminim1.flixcart.com/image/224/224/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=90"/>
                   <div className={styles.incbtn}>
                        <button disabled={false} onClick={()=>handleInc(-1)}>-</button>
                        <div style={{border:"1px solid grey",padding:"5px",paddingLeft:"15px", width:"50px", }}>`count`</div>
                        <button onClick={()=>handleInc(1)}>+</button> 
                   </div>
               </div>
                  <div>
                      <a   style={{fontSize: "16px", color:"#212121", lineHeight:"1",display:"inline",fontFamily: "Roboto,Arial,sans-serif", fontWeight:"500"}}>Lenovo IdeaPad 3 Core i5 10th Gen - (8 GB/1 TB HDD/Windows 10 Home) 15IIL05 Laptop  (15.6 inch, Platinum Grey, 1.85 kg)</a>
                     <p style={{display:" block", color: "#878787", fontSize: "14px",  height: "20px"}}>15.6 inch, Platinum Grey, 1.85 kg</p>
                    <p style={{display:" block", color: "#878787", fontSize: "14px",  height: "20px"}}>Seller:PETILANTE Online  <span><img height="30px" width="100px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"/></span>  </p> 
                      <div style={{fontSize: "18px", fontWeight: "500", color:" #212121"}}> ₹43990 <span style={{color: "#878787", textDecoration: "line-through",  fontSize:"15px"}}>₹52,788</span><span className={styles.offer} >20% Off  11 offers applied</span></div>
                     <div className={styles.mbtn}>
                         <span><button onClick={()=> setSavelater(prev=>!prev)} >SAVE FOR LATER</button> <button onClick={toggleModal}>REMOVE</button></span>
                         
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
       className={styles.modal}
        
      >
        <div className={styles.modalp}>Remove Item</div>
        <div  className={styles.modalk}>Are you sure you want to remove this item?</div>
      <span> <button onClick={toggleModal}>CANCEL</button><button style={{marginLeft:"50px", color:"white", backgroundColor:"#2874f0"}} onClick={()=> setRemove(prev=> !prev)} >REMOVE</button></span>  
      
        </Modal>
                     </div>
                  </div>
                  <div>
                   <p>Delivery by Wed Jun 16 | <span style={{color:"#388e3c"}}>Free</span> <span style={{textDecoration:"line-through"}}>₹40</span></p>
                   <p style={{fontSize: "12px", color: "#878787"}}>7 Days Replacement Policy</p>
                  </div>
                   
               </div>
               <div> 
                      <button onClick={checkout} className={styles.placebtn}>PLACE ORDER</button>
                  </div>
             
           </div>
           </div>
           </div>
    )
}

export {DetailsCart}