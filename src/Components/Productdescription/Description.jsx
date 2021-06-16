import { useState } from "react"
import { BoughtTogether } from "./BoughtTogether";
import { Featurecontent } from "./Feature_content"
import { Offers } from "./Offers";
import Styles from './Description.module.css'
export const Description = ()=>{
    const [showMore,setShowMore] = useState(false);
    const offers = [
        {head:"Bank Offer",body:"10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",tail:"T&C"},
        {head:"Bank Offer",body:"10% off on SBI Credit Card EMI, up to ₹1500. On orders of ₹5000 and above",tail:"T&C"},
        {head:"Bank Offer",body:"5% Unlimited Cashback on Flipkart Axis Bank Credit Card",tail:"T&C"},
        {head:"",body:"Get a Google Nest Hub (Chalk) at just ₹5,999 on purchase of select TVs, laptops, ACs and mobile",tail:"T&C"},
        {head:"",body:"Get Google Nest mini at just ₹1999 on purchase of select Smartphones, TVs, Laptops, TV streaming",tail:"T&C"},
        {head:"No cost EMI ₹6,415/month.",body:" Standard EMI also available",tail:"View Plans >"},
        {head:"Bank Offer",body:"Flat ₹100 off on first Flipkart Pay Later order of ₹500 and above",tail:"T&C"},
        {head:"",body:"Get Mi Smart Speaker at just ₹1999 on purchase of select Smartphones, TVs, Laptops,TV streaming & Ac",tail:"T&C"},
        {head:"",body:"Get a Lenovo Smart Clock Essential at just ₹1,999 on purchase of select TVs, laptops, ACs&Mobiles",tail:"T&C"},
        {head:"Partner Offer",body:"GST Invoice Available! Save up to 28% for business purchases",tail:"Know More"},
        {head:"Partner Offer",body:"On Purchase of this device, get ProGrad Junior Spark program worth INR 4,999 for free",tail:"Know More"},
        {head:"Partner Offer",body:"On Purchase of this device, get offers on Codingal Courses worth up to ₹20,000",tail:"Know More"},
        {head:"Partner Offer",body:"On purchase of this device, avail flat 15% off on all courses on Vedantu.",tail:"Know More"},
        {head:"Partner Offer",body:"On purchase of this device, get Edukemy’s Neev course worth ₹4999 for free.",tail:"Know More"},
        {head:"Partner Offer",body:"On purchase of this device, get offers on Avishkaar Courses worth up to ₹9,000",tail:"Know More"},
        {head:"Partner Offer",body:"Purchase now using GST Invoice feature. Get 5% off up to Rs500 on electronics items from 1-15th July",tail:"Know More"},
    ]
    const offers_4 = [
        {head:"Bank Offer",body:"10% off on SBI Credit Card, up to ₹1250. On orders of ₹5000 and above",tail:"T&C"},
        {head:"Bank Offer",body:"10% off on SBI Credit Card EMI, up to ₹1500. On orders of ₹5000 and above",tail:"T&C"},
        {head:"Bank Offer",body:"5% Unlimited Cashback on Flipkart Axis Bank Credit Card",tail:"T&C"},
        {head:"",body:"Get a Google Nest Hub (Chalk) at just ₹5,999 on purchase of select TVs, laptops, ACs and mobile",tail:"T&C"},
    ]   
    const specifications = [
        {
            type:"General",
            data:{
                "Sales Package":"Laptop, Power Adaptor, User Guide, Warranty Documents",
                "Model Number":"15IIL05",
                "Part Number":"81WE0144IN",
                "Series":"IdeaPad 3",

            }
        },
        {
            type:"Processor And Memory Features",
            data:{
               
"Processor":"Brand Intel",
"Processor Name":"Core i5",
"Processor Generation":"10th Gen",
"SSD":"No",
"RAM":"8GB",
"RAM Type" :"DDR4 HDD Capacity 1TB",
"Processor Variant":"1035G7",
"Chipset":"Intel SoC Platform",
"Clock Speed":"1.0 GHz with Turbo Boost Upto 3.6 GHz",
"Memory Slots":"2 Slots",
"RAM Frequency":"2666 MHz",
"Cache ":"6 RPM 5400",
"Graphic":"Processor Intel Integrated UHD",
"Number of Cores" :"4",

            }
        }
    ]
    return (
        <div style={{fontSize:"20px",overflow:"auto",background:"white",fontFamily:"Roboto"}}>
            <span style={{fontSize:"18px",color:'#212121',fontWeight:400,fontFamily:"sans-serif"}}>Product name and description</span> <br /> {/**Title of product here */}
            <span style={{fontFamily:"roboto",fontSize:"14px",padding:"2px 4px 2px 6px",fontWeight:500,backgroundColor:"rgb(56, 142, 60)",color:"rgb(255, 255, 255)"}}>
                3.9 <span class="fa fa-star small" ></span> {/**Rating of product here */}
            </span>
            <span style={{fontSize:"14px",fontWeight:"500",color:"rgb(135, 135, 135)"}}>5,077 Ratings & 748 Reviews </span> {/**Optional */}
            <span><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" style={{height:21}} alt="" /></span> <br />
            <span style={{color:"#212121",backgroundColor:'rgba(0, 0, 0, 0)',fontSize:"28px",fontWeight:"500",marginRight:"1vw",fontFamily:"Roboto"}}>₹29,990</span> {/**Computed price after discount will be here  */}
            <span style={{color:"#878787",backgroundColor:'white',fontSize:"16px",fontWeight:"400",textDecoration:"line-through solid rgb(135, 135, 135)",marginRight:"1vw",fontFamily:"Roboto"}}>₹37,190</span> {/**Original Price  */}
            <span style={{color:"#388e3c",backgroundColor:'white',fontSize:"16px",fontWeight:"500",textDecoration:"none",marginRight:"1vw",fontFamily:"Roboto"}}>19% off</span> {/**Discount percentage  */} <br />
            <span style={{color:"#212121",backgroundColor:'white',fontSize:"16px",fontWeight:"400",textDecoration:"none",marginRight:"1vw",fontFamily:"Roboto"}}>Or Pay ₹29,890 + <img src="https://rukminim1.flixcart.com/www/100/100/promos/18/07/2019/4aebbd99-7478-411e-aced-265e7722d18d.png?q=90" alt="" style={{height:"12px"}}/> 100</span>{/**Price - 100 */} <br />

            <span style={{color:"#212121",backgroundColor:'rgba(0, 0, 0, 0)',fontSize:"16px",fontWeight:"500",fontFamily:"Roboto"}}>Available Offers</span> <br />
            {showMore?offers.map(el=><Offers head={el.head} tail={el.tail} body={el.body} />):offers_4.map(el=><Offers head={el.head} tail={el.tail} body={el.body} />)} 
            <div style={{color:"#2874f0",fontWeight:"550",fontSize:"16px",cursor:"pointer"}} onClick={()=>{setShowMore(!showMore)}}>{showMore?'View less':'View 13 more offers'}</div><br />
            <div>
               <input type="radio" name="exchange" id="" /><span style={{padding:"5%",color:"#212121",fontSize:"16px",fontWeight:"400"}}>Buy without exchange <span style={{padding:"10%",color:"#212121",fontSize:"14px",fontWeight:"500"}}>  ₹29,990</span></span> <br /> {/**The discounted rate here */}
                <input type="radio" name="exchange" id="" /><span style={{padding:"5%",color:"#212121",fontSize:"16px",fontWeight:"400"}}> Buy with exchange <span style={{padding:"10%",color:"#212121",fontSize:"14px",fontWeight:"500"}}>   up to ₹15,650 off</span></span>
            </div>
            <div>
                <img src="warranty.png" alt="" style={{width:"100%"}}/>
            </div>
            <div style={{fontSize:"24px",fontWeight:"500"}}>Specifications</div>
            {specifications.map(el=><Featurecontent info={el}/>)}
           
            <BoughtTogether />
            <div>
                <img src="Ratings.png" alt="" style={{width:"100%"}}/>
            </div>
            <div>
                <img src="QA.png" alt="" style={{width:"100%"}}/>
            </div>
        </div>
    )
}
    