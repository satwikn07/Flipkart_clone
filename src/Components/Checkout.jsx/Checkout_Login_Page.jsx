import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./Checkout_login.module.css";
import {Navbar} from "../Landing_Page/Navbar";
import {Link} from "react-router-dom";
import { useHistory } from 'react-router';
import {Prod} from "../AddToCart/Prod";
import prodstyles  from '../../CSS/AddToCart.module.css' 


const Checkout_Login_Page = () => {
    const history = useHistory();
    document.title=`flipkart.com:secure payment>login>select shipping address`;
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [flag,setFlag] = useState(true);
    const [isAuth,setIsAuth] = useState(true);
    const [delivered,setDelivered] = useState(false);
    const [gotoPayment,setGoToPayment] = useState(false);
    const [upi,setUpi] = useState(false);
    const [upiSelect,setUpiSelect] = useState(false);
    const [payNow,setPayNow] = useState(false);
    const [walletSelect,setWalletSelect] = useState(false);
    const [otpSent,setSentOtp] = useState(false);
    const [mNo,setMNo] = useState("");
    const [otp,setOtp] = useState("");
    const [cash,setCash] = useState(false);
    /// add to cart 
    const [count,setCount] = useState(1);

    const handleInc =(num)=> {
        setCount(prev=> prev+num)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userName && userName.trim()!="" && flag==false){
            return setFlag(true);
        }else{
            if(!flag){
                return  toast.error("Email/Mobile no is missing", {
                    position: toast.POSITION.TOP_LEFT
                  });
            }
        }
        if(userName && userName.trim()!="" && password && password.trim()!=""){
            toast.success("Success !", {
                position: toast.POSITION.TOP_CENTER
              });
        }else{
            return toast.error("Email/Mobile no is missing", {
                position: toast.POSITION.TOP_LEFT
              });
        }
        setIsAuth(true)
    }

    const deliver =()=>{
        setDelivered(true)
    }

    const toPayment =()=>{

        setGoToPayment(true);
    }

    const verify =(e)=>{
        toast.success("Verified !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose:1500
          });
        // alert("verified");
        setPayNow(true);
    }

    const storeNo = (e)=>{
        setMNo(e.target.value);
    }

    const sentOtp =(e)=>{
        setPayNow(true);
        if(mNo==" " || mNo.trim().length!==10){
            return  toast.error("mobile no must be of 10 digits !", {
                position: toast.POSITION.TOP_LEFT
              });
        }
        setSentOtp(true);
    }

    const storeOtp =(e)=>{
        setOtp(e.target.value);
    }

    const order = (e)=>{
        if(otp.length!==4){
            return toast.error("entered otp is wrong", {
                position: toast.POSITION.TOP_LEFT
              });
        }
        else{
            
              toast.success("Congratulations ! Order placed successfully,", {
                position: toast.POSITION.TOP_CENTER
              })
            setTimeout(()=>{history.push('/')},5000)
        }
    
        // alert("Order placed successfully");
    }

    const orderByUpi = (e)=>{
            
              toast.success("Congratulations ! Order placed successfully,", {
                position: toast.POSITION.TOP_CENTER
              })
            setTimeout(()=>{history.push('/')},5000)
    
        // alert("Order placed successfully");
    }

    const selectWallet =(e)=>{
        setWalletSelect(true);
        setUpiSelect(false);
        setCash(false);
    }

    const selectedUpi = (e)=>{
        setUpiSelect(true);
        setWalletSelect(false);
        setCash(false);
    }
    const cod = (e)=>{
        setWalletSelect(false);
        setUpiSelect(false);
        setCash(true);
    }
    const orderByCash = (e)=>{
            
        toast.success("Congratulations ! Order placed successfully,", {
          position: toast.POSITION.TOP_CENTER
        })
      setTimeout(()=>{history.push('/')},5000)
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
                <ToastContainer autoClose={3000} />
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
            {/* Price details section...shown here */}
            {/* price section */}
            <div style={{position:"fixed",marginLeft:"320px",top:"80px"}} className={prodstyles.box}>
            <Prod />
            </div>

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
        <div className={`${styles.divs} ${styles.loginSpan}`} style={{width:"92.3%",marginRight:"-130px",marginTop:0,color:"black"}}>        
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
        
        {/* before selecting address */}
        {!delivered ? <div className={`${styles.login} ${styles.divs}`}><span className={styles.loginSpan}>3</span>ORDER SUMMARY</div>:<>
        {/* after delivery address selected */}
        {!gotoPayment && <>
        <div style={{backgroundColor:"#2874f0",color:"white",width:"92.3%"}} className={`${styles.login} ${styles.divs}`}><span className={styles.loginSpan}>3</span>ORDER SUMMARY</div>
        <div className={`${styles.divs} ${styles.loginSpan}`} style={{width:"92.3%",marginTop:0,color:"black"}}>        
        <div style={{width:"90%",padding:"10px",paddingLeft:"35px"}}>
        
        <div style={{display:"flex",marginTop:"10px"}}>

            <div className={styles.addressLabel} >
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <div>
                <h5 style={{lineHeight:".6"}}>Pay Using Super Coins</h5>
                <p>Balance : 0</p>
                </div>
                <div style={{marginRight:"-128px"}}>
                <button style={{outline:"none"}} className={styles.changeButton}>
                <i style={{color:"blue",marginRight:"5PX",fontWeight:"500"}} class="fas fa-check fa-1x"></i>
                APPLIED</button>
                </div>
            </div>
            </div>
        </div>
        <div>
            {/* <DetailsCart /> */}

            <div className={prodstyles.products}>
                   <div> 
               <img style={{height:"100px"}} alt="" src="https://rukminim1.flixcart.com/image/224/224/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=90"/>
                   <div className={prodstyles.incbtn}>
                        <button style={{width:"30px",height:"30px"}} disabled={count==1} onClick={()=>handleInc(-1)}>-</button>
                        <div style={{marginTop:"2px",width:"50px",height:"25px",border:"1px solid black",textAlign:"center"}}>{count}</div>
                        <button style={{width:"30px",height:"30px"}}  onClick={()=>handleInc(1)}>+</button> 
                   </div>
               </div>
                <div>
                      <a   style={{fontSize: "16px", color:"#212121", lineHeight:"1",display:"inline",fontFamily: "Roboto,Arial,sans-serif", fontWeight:"500"}}>Lenovo IdeaPad 3 Core i5 10th Gen - (8 GB/1 TB HDD/Windows 10 Home) 15IIL05 Laptop  (15.6 inch, Platinum Grey, 1.85 kg)</a>
                     <p style={{display:" block", color: "#878787", fontSize: "14px",  height: "20px"}}>15.6 inch, Platinum Grey, 1.85 kg</p>
                    <p style={{display:" block", color: "#878787", fontSize: "14px",  height: "20px"}}>Seller:PETILANTE Online  <span><img height="30px" width="100px" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"/></span>  </p> 
                      <div style={{fontSize: "18px", fontWeight: "500", color:" #212121"}}> ₹43990 <span style={{color: "#878787", textDecoration: "line-through",  fontSize:"15px"}}>₹52788</span><span className={styles.offer} >20% Off  11 offers applied</span></div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
        <div className={`${styles.login} ${styles.divs}`} style={{justifyContent:"center",alignItems:"center"}}>
        <div>
        <p style={{color:"black",fontWeight:"400"}}>order confirmation email will be sent to <span style={{fontWeight:"500"}}> afzal@gmail.com</span> 
        <button onClick={toPayment} type="submit" style={{width:"160px",marginLeft:"607px",padding: "10px 5px"}}>CONTINUE</button>
        </p>
        
        </div>

        </div></>}
        
        </>}

        {gotoPayment &&
        <div style={{width:"92.3%",display:"flex",justifyContent:"space-between"}} className={`${styles.login} ${styles.divs}`}>
        <div><span className={styles.loginSpan}>3</span>
        ORDER SUMMARY <i style={{color:"blue",marginLeft:"5px",fontWeight:"500"}} class="fas fa-check fa-1x"></i> <br/>
        <span className={styles.userDetails}>1 item</span>
        </div>
        <button style={{outline:"none"}} className={styles.changeButton}>CHANGE</button>
        </div>}

        {/* before order */}
        {!gotoPayment &&
        <div className={`${styles.login} ${styles.divs}`}><span className={styles.loginSpan}>4</span>PAYMENT OPTIONS</div>
        } 
        {/* after order */}
        {/* payment options */}
        {gotoPayment && <> 
        <div style={{backgroundColor:"blue",color:"white"}} className={`${styles.login} ${styles.divs}`}><span className={styles.loginSpan}>4</span>PAYMENT OPTIONS</div>
        <div style={{marginTop:"0px"}} className={`${styles.divs}`}>
        <div style={{display:"flex",marginTop:"10px"}}>
        <ul style={{marginTop:"15px"}}>
            <input onClick={selectedUpi} name="radio" style={{marginLeft:"5px"}} type="radio" /><span style={{marginLeft:"20px",color:"black"}}>UPI</span><br/>
            {upiSelect && <> <span style={{marginLeft:"38px",marginTop:"30px",color:"black"}}>Your UPI ID-</span>
            <span style={{marginLeft:"38px",marginTop:"30px"}}><input onClick={e=>setUpi(true)} style={{border:"1px solid black",outline:"none",marginRight:"5px",padding:"10px"}} type="text" placeholder="enter upi id" />
            <button onClick={verify} style={{border:"none",outline:"none",cursor:"pointer",marginRight:"5px"}}>verify</button>
            </span>

            <button onClick={orderByUpi} style={{padding:"10px 20px",color:"white",backgroundColor:"grey",border:"none"}}>Pay Rs- 42950</button>

            </>}<br/>

            <input onClick={selectWallet} name="radio" style={{marginLeft:"5px"}} type="radio" /><span style={{marginLeft:"20px",color:"black"}}>Wallets</span><br/>
            {walletSelect && <> <span style={{marginLeft:"38px",marginTop:"30px",color:"black"}}>Paytm No-</span>
            <span style={{marginLeft:"38px",marginTop:"30px"}}>
            <input onClick={e=>setUpi(true)} onChange={storeNo} style={{border:"1px solid black",outline:"none",marginRight:"5px",padding:"10px"}} type="text" placeholder="paytm no" />
            <button onClick={sentOtp} style={{border:"none",outline:"none",cursor:"pointer",marginRight:"5px"}}>{!otpSent?"send otp":"otp sent"}</button></span>
            {otpSent && <input style={{border:"1px solid black",outline:"none",marginRight:"5px",padding:"10px"}} type="text" placeholder="enter otp" onChange={storeOtp} />
            }
            <button onClick={order} disabled={!payNow} style={{padding:"10px 20px",color:"white",backgroundColor:"grey",border:"none"}}>Pay Rs- 42950</button>
            {/* <ToastContainer /> */}
            <br/>
            <span style={{marginLeft:"38px",marginTop:"60px"}}>Phonepe is coming soon</span><br/>
            </>}
            <input onClick={cod} name="radio" style={{marginLeft:"5px",marginTop:"28px"}} type="radio" /><span style={{marginLeft:"20px",color:"black"}}>Cash On Delivery</span>
            {
                cash && <button onClick={orderByCash} style={{padding:"5px 10px",marginLeft:"50px",color:"white",backgroundColor:"grey",border:"none"}}>Order</button>
            }
            <ToastContainer />
        </ul>

        </div>
        </div>
        </>}


        </div>

        <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"white",
        alignItems:"center",height:"70px",paddingTop:"20px",paddingBottom:"20px",
        marginTop:"20px"}}>
            <div>
            Policies: <span>Returns Policy |</span> <span>Terms of use |</span> <span>Security | </span><span>Privacy |</span> <span>Infringement </span> © 2007-2021 Flipkart.com
            </div>
            <div>
            Need help? Visit the <Link>Help Center</Link> or <Link>Contact Us</Link>
            </div>
        </div>
        </div>
    );
};

export default Checkout_Login_Page;