import React from 'react'
import  styles from '../CSS/Navbar.module.css'
const Navbar =() =>{
    return(
        <div className={styles.bluenavtop}>
            <div>
                <img className={styles.flipkartlogo} alt="flipkart-logo" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"/>
               <input  className={styles.searchbox}  type="text" placeholder="Search for products brands and more"/>
               <button className={styles.searchicon}>
                        <svg width="20px" height="20px">
                            <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                        </svg>
                    </button>
                    <div className={styles.dropdown}>
  <button className={styles.dropbtn1}>Login</button>
  <div className={styles.dropdowncontent}>
    <a href="#">My Profile</a>
    {/* <a href="#">SuperCoin Zone</a> */}
    <a href="#">Flipkart Plus Zone</a>
    <a href="#">Orders</a>
    <a href="#">Wishlist</a>
    <a href="#">My Chats</a>
    <a href="#">Coupons</a>
    <a href="#">Gift Cards</a>
    <a href="#">Notification</a>
    <a href="#">Logout</a>
  </div>
</div>

       <div className={styles.dropdown}>
  <button className={styles.dropbtn2}>More</button>
  <div className={styles.dropdowncontent}>
    <a href="#">Notification Prefernces</a>
    <a href="#">Sell on Flipkart</a>
    <a href="#">24x7 Customer Care</a>
    <a href="#">Advertise</a>
    <a href="#">Download App</a>
     
  </div>
</div>            
                    
                
                
                <img className={styles.carticon} alt="cart-icon" src="https://image.flaticon.com/icons/png/512/1170/1170678.png"/>
                 
            </div>
            </div>
    )
}
export {Navbar}