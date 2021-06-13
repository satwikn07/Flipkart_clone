import React from 'react';
import styles from "./Checkout_login.module.css";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

const Checkout_Login_Page = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <div className={styles.main}>
        <div className={styles.outerDiv}>
            <div style={{fontWeight:"800"}} className={styles.login}>
            <h6 style={{fontWeight:"500"}}><span className={styles.loginSpan}>1</span>LOGIN OR SIGNUP</h6></div>
            <div style={{display:"flex",padding:"10px"}}>
            <div className={styles.formDiv}>
            <form onSubmit={handleSubmit}>            
                <input className={styles.inp} type="text" placeholder="Enter Email/Mobile number" />
                <p className={styles.para}>By continuing,you agree to Flipkart's <a href="#">Terms of Use</a> and <br/>
                <a href="#">Privacy Policy</a>. </p>
                <button type="submit">CONTINUE</button>
            </form>
            </div>
            <div style={{padding:"25px",marginLeft:"60px"}}>
                <p style={{fontWeight:"500"}} className={styles.para}>Advantages of our secure login</p>
                <ul style={{lineHeight:"2",listStyle:"none",marginLeft:"-35px",fontSize:"14px",lineHeight:"2"}}>
                    <li style={{marginBottom:"10px"}}><i style={{color:"#2874f0",margin:"0 12px 0 0"}} class="fas fa-truck"></i><span style={{fontWeight:"400"}}>Easily Track Orders,Hassle free Returns</span></li>
                    <li style={{marginBottom:"10px"}}><i style={{color:"#2874f0",margin:"0 12px 0 0"}} class="fas fa-bell"></i><span style={{fontWeight:"400"}}>Get Relevent Alerts and Recommendation</span></li>
                    <li><i style={{color:"#2874f0",margin:"0 12px 0 0"}} class="fas fa-star"></i><span style={{fontWeight:"400"}}>Wishlist,Reviews,Ratings and more</span></li>
                </ul>
            </div>
            </div>
        </div>
        <div className={styles.rightDiv}>
            <div style={{width:"29px",height:"36px"}}>
                <img width="100%" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_5f9216.png" alt="pic" />
            </div>
            <div style={{marginLeft:"40px",fontWeight:"500",lineHeight:"1.8",color:"grey"}}>
            Safe and Secure Payments. Easy returns. 100% Authentic products.
            </div>
        </div>
        </div>
    );
};

export default Checkout_Login_Page;