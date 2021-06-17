import styles  from '../../CSS/AddToCart.module.css' 
function Prod({count,price, total, discount}){
    return(
        <div>
            
            <div className={styles.proddet}>
                  <div>PRICE DETAILS</div>
                  <hr/>
                  <div className={styles.prodbox}>
                      <div>
                          <div>Price ({count})  </div>
                          <div>Discount</div>
                          <div>Delivery Charges</div>
                      </div>
                      <div>
                          <div>{`₹${price}`}</div>
                          <div style={{color:" #388e3c"}} >{`₹${discount}`}</div>
                        <div  style={{color:" #388e3c"}}>FREE</div>  
                      </div>  
                  </div>
                  <div style={ {border: "none",borderTop: "1px dotted grey"}}></div>
                  <div className={styles.pp}>
                      <div>Total Amount </div>
                      <div  style={{ marginLeft:"70px"}} >{`₹ ${price}`}</div>
                  </div>
                  <div style={ {marginTop:"10px" , border: "none",borderTop: "1px dotted grey"}}></div>
                  <div className={styles.save}>{`You will save ₹${discount} on this order`}</div>
                
                  <hr/>
                  <div className={styles.prodlast}>
                      <div>Save extra ₹52 using 52 SuperCoins on the next step</div>
                      <div>Balance: <span><img width="15px" height="15px" src="https://rukminim1.flixcart.com/www/100/100/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png?q=90"/></span>  52</div>
                  </div>
                   
              </div>
                  
              </div>
              
         
         
             
      
        
        
    )
}

export {Prod}