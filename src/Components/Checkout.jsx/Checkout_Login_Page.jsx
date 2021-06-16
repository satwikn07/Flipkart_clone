import React, { useState } from 'react';
import styles from "./Checkout_login.module.css";
import {Navbar} from "../Landing_Page/Navbar";

const Checkout_Login_Page = () => {

    document.title=`flipkart.com:secure payment>login>select shipping address`;
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [flag,setFlag] = useState(false);
    const [isAuth,setIsAuth] = useState(false);
    const [delivered,setDelivered] = useState(false);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userName && userName.trim()!="" && flag==false){
            return setFlag(true);
        }else{
            if(!flag){
                return alert("email/mobile no missing")
            }
        }
        if(userName && userName.trim()!="" && password && password.trim()!=""){
             alert("success")
        }else{
            return alert("email/password not ok")
        }
        setIsAuth(true)
    }

    const deliver =()=>{
        setDelivered(true)
    }

    return (
        <div>
        <Navbar />
        {!isAuth ? <>
            <div className={styles.main}>
        <div className={styles.outerDiv}>
            <div className={styles.login}>
            <h6><span className={styles.loginSpan}>1</span>LOGIN OR SIGNUP</h6></div>
            <div style={{display:"flex",padding:"10px"}}>
            <div className={styles.formDiv}>
            <form onSubmit={handleSubmit}>
                <input className={styles.inp} type="text" placeholder="Enter Email/Mobile number"
                onChange={e=>setUserName(e.target.value)} value={userName} />
                <input style={{display:`${!flag ? "none":"block"}`}} className={styles.inp} type="password" placeholder="Enter password"
                onChange={e=>setPassword(e.target.value)} value={password} />
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
        </>:<>
                
            <div className={styles.main}>
             {/* show this div when loggedin, contains user info  */}
                 <div style={{width:"59.8%",display:"flex",justifyContent:"space-between"}} className={`${styles.login} ${styles.divs}`}>
        <div><span className={styles.loginSpan}>1</span>
        LOGIN <i style={{color:"blue",marginLeft:"5px",fontWeight:"500"}} class="fas fa-check fa-1x"></i><br/>
        <span className={styles.userDetails}>Afzal Ahmad 7753816370</span>
        </div>
        <button style={{outline:"none"}} className={styles.changeButton}>CHANGE</button>
        </div>
         {/* show this div when loggedin, contains item info in cart at right side */}
        <div className={styles.rightDiv} style={{width:"400px"}}>
            {/* <div style={{width:"29px",height:"36px"}}>
                <img width="100%" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/shield_5f9216.png" alt="pic" />
            </div> */}
            <div style={{marginLeft:"40px",fontWeight:"500",lineHeight:"1.8",color:"grey"}}>
            Price details section...shown here
            </div>
        </div>
        </div>
        </>}

        <div style={{width:"64.8%"}}>
        {!isAuth ? <div className={`${styles.login} ${styles.divs}`}><span className={styles.loginSpan}>2</span>DELIVERY ADDRESS</div> :<> 
       {/* delivery div when loggedin */}
    
       {!delivered ? <> <div style={{justifyContent:"space-between",backgroundColor:"#2874f0",color:"white"}} className={`${styles.login} ${styles.divs}`}>
        <div><span className={styles.loginSpan}>2</span>
        DELIVERY ADDRESS
        </div>
        </div> 
        <div className={`${styles.divs} ${styles.loginSpan}`} style={{width:"92.3%",marginTop:0,color:"black"}}>        
        <div style={{width:"90%",padding:"10px",paddingLeft:"35px"}}>
        
        <div style={{display:"flex",marginTop:"10px"}}>
            <div><input type="radio" name="radio" value="hello" /></div>
            <div className={styles.addressLabel} ><span style={{fontWeight:"500",marginBottom:"20px"}}>Afzal Ahmad, 7753816370</span><br/>
            Address village and pst rasulabad musafirkhana sulatnpur</div>
        </div>
        <button onClick={deliver} type="submit" style={{width:"200px",marginLeft:"25px",marginTop:"10px",padding: "15px 10px"}}>DELIVER HERE</button>     
        </div>
        </div></>:<>
        {/* delivery div after clicking deliver here button */}
        <div style={{width:"92.3%",display:"flex",justifyContent:"space-between"}} className={`${styles.login} ${styles.divs}`}>
        <div><span className={styles.loginSpan}>2</span>
        DELIVERY ADDRESS <i style={{color:"blue",marginLeft:"5px",fontWeight:"500"}} class="fas fa-check fa-1x"></i> <br/>
        <span className={styles.userDetails}>Address village and pst rasulabad musafirkhana sulatnpur</span>
        </div>
        <button style={{outline:"none"}} className={styles.changeButton}>CHANGE</button>
        </div>
        </>}
        </> }
        
        {/* <div style={{width:"92.3%",display:"flex",justifyContent:"space-between"}} className={`${styles.login} ${styles.divs}`}>
        <div><span className={styles.loginSpan}>2</span>
        DELIVERY ADDRESS <i style={{color:"blue",marginLeft:"5px",fontWeight:"500"}} class="fas fa-check fa-1x"></i> <br/>
        <span className={styles.userDetails}>Address village and pst rasulabad musafirkhana sulatnpur</span>
        </div>
        <button style={{outline:"none"}} className={styles.changeButton}>CHANGE</button>
        </div> */}

        <div className={`${styles.login} ${styles.divs}`}><span className={styles.loginSpan}>3</span>ORDER SUMMARY</div>
        <div className={`${styles.login} ${styles.divs}`}><span className={styles.loginSpan}>4</span>PAYMENT OPTIONS</div>
        </div>
        
        </div>
    );
};

export default Checkout_Login_Page;