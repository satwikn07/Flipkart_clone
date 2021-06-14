import styles  from '../../CSS/AddToCart.module.css' 

function AddToCart(){
    return(
        <div className={styles.box} style={{ backgroundColor: "#f1f3f6"}}>
           <div className={styles.bigcont}>
               <div className={styles.smallone}>
                   <div className={styles.item} className={styles.head}>My Cart(no of itms)</div>
                   <div>
                   <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" />
                   </div>
                   <div style={{border:"1px solid grey"}}>
                      <div>Minakshi Das, <span className={styles.addrs}>Nearby GP office</span></div>
                   </div>
               </div>
               <hr/>
             
               <div className={styles.products}>
                   <div> 
               <img style={{height:"100px"}} alt="" src="https://rukminim1.flixcart.com/image/224/224/kbb49zk0/computer/d/e/h/lenovo-na-laptop-original-imafsnkx6gytzqzh.jpeg?q=90"/>
                   <div className={styles.incbtn}>
                        <button>-</button>
                        <div style={{border:"1px solid grey" }}>count</div>
                        <button>+</button> 
                   </div>
               </div>
                  <div>
                      <a   style={{fontSize: "16px", color:"#212121", lineHeight:"1",display:"inline",fontFamily: "Roboto,Arial,sans-serif", fontWeight:"500"}}>Lenovo Ideapad Core i3 10th Gen (..</a>
                     <p style={{display:" block", color: "#878787", fontSize: "14px",  height: "20px"}}>15.6 inch, Platinum Grey, 1.85 kg, With MS Office</p>
                    <p style={{display:" block", color: "#878787", fontSize: "14px",  height: "20px"}}>Seller:PETILANTE Online  <span><img height="30px" width="100px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"/></span>  </p> 
                      <div style={{fontSize: "18px", fontWeight: "500", color:" #212121"}}>₹35,990 <span style={{color: "#878787", textDecoration: "line-through",  fontSize:"15px"}}>₹45,090</span><span className={styles.offer} >20% Off  11 offers applied</span></div>
                     <div className={styles.mbtn}>
                         <span><button>SAVE FOR LATER</button> <button>REMOVE</button></span>
                     </div>
                  </div>
                  <div>
                   <p>Delivery by Wed Jun 16 | <span style={{color:"#388e3c"}}>Free</span> <span style={{textDecoration:"line-through"}}>₹40</span></p>
                   <p style={{fontSize: "12px", color: "#878787"}}>7 Days Replacement Policy</p>
                  </div>
                   
               </div>
               <div> 
                      <button className={styles.placebtn}>PLACE ORDER</button>
                  </div>
             
           </div>
            
              <div className={styles.proddet}>
                  <div>PRICE DETAILS</div>
                  <hr/>
                  <div className={styles.prodbox}>
                      <div>
                          <div>Price (2 items)  </div>
                          <div>Discount</div>
                          <div>Delivery Charges</div>
                      </div>
                      <div>
                          <div>₹1,27,370</div>
                          <div style={{color:" #388e3c"}} >− ₹25,400</div>
                        <div  style={{color:" #388e3c", marginLeft:"30px"}}>FREE</div>  
                      </div>  
                  </div>
                  <div style={ {border: "none",borderTop: "1px dotted grey"}}></div>
                  <div className={styles.pp}>
                      <div>Total Amount </div>
                      <div  style={{ marginLeft:"70px"}} >₹1,01,970</div>
                  </div>
                  <div style={ {marginTop:"10px" , border: "none",borderTop: "1px dotted grey"}}></div>
                  <div className={styles.save}>You will save ₹25,400 on this order</div>
                
                  <hr/>
                  <div className={styles.prodlast}>
                      <div>Save extra ₹52 using 52 SuperCoins on the next step</div>
                      <div>Balance: <span><img width="15px" height="15px" src="https://rukminim1.flixcart.com/www/100/100/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png?q=90"/></span>  52</div>
                  </div>
                   
              </div>
        </div>
    )
}
export  {AddToCart}