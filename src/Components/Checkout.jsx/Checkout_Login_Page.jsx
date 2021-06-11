import React from 'react';
import styles from "./Checkout_login.module.css";

const Checkout_Login_Page = () => {
    return (
        <div className={styles.main}>
        <div className={styles.outerDiv}>
            <div className={styles.login}><h4>Login or Signup</h4></div>
            <div style={{display:"flex",padding:"10px"}}>
            <div className={styles.formDiv}>
            <form>            
                <input className={styles.inp} type="text" placeholder="Enter Email/Mobile number" />
                <p className={styles.para}>By continuing,you agree to Flipkart's Terms of Use and <br/>
                Privacy Policy. </p>
                <button type="submit">CONTINUE</button>
            </form>
            </div>
            <div style={{border:"1px solid blue"}}>
                <p>Advantages of our secure login</p>
                <ul style={{listStyle:"none",marginLeft:"-30px"}}>
                    <li>Easily Track Orders,Hassle free Returns</li>
                    <li>Get Relevent Alerts and Recommendation</li>
                    <li>Wishlist,Reviews,Ratings and more</li>
                </ul>
            </div>
            </div>
        </div>
        <div style={{width:"30%",border:"1px solid red",height:"50px"}}></div>
        </div>
    );
};

export default Checkout_Login_Page;