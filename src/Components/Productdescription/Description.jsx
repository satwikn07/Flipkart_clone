import { Featurecontent } from "./Feature_content"
export const Description = ()=>{
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
            <span style={{fontSize:"14px"}}> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{height:"18px"}} /><span style={{color:"#212121",fontWeight:"500"}}>Bank Offer</span><span style={{fontWeight:"400"}}>  5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span><span style={{color:"#2874f0",fontWeight:"500"}}> T&C</span></span> <br />
            <span style={{fontSize:"14px"}}> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{height:"18px"}} /><span style={{color:"#212121",fontWeight:"500"}}>Bank Offer</span><span style={{fontWeight:"400"}}>  Flat ₹75 discount on UPI transaction above ₹10,000 in a single cart value</span><span style={{color:"#2874f0",fontWeight:"500"}}> T&C</span></span> <br />
            <span style={{fontSize:"14px"}}> <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{height:"18px"}} /><span style={{color:"#212121",fontWeight:"500"}}>Bank Offer</span><span style={{fontWeight:"400"}}>  Flat ₹75 discount on RuPay transaction above ₹7,500/- in a single cart value.</span><span style={{color:"#2874f0",fontWeight:"500"}}> T&C</span></span> <br />
            <span style={{fontSize:"14px"}}><span style={{fontWeight:"400"}}>  Get a Google Nest Hub (Chalk) at just ₹5,999 on purchase of select TVs, laptops, ACs and mobile</span><span style={{color:"#2874f0",fontWeight:"500"}}> T&C</span></span> <br />
            <span style={{color:"#2874f0",fontWeight:"500",fontSize:"14px"}}>View 14 more offers</span><br />
            <div>
               <input type="radio" name="exchange" id="" /><span style={{padding:"5%",color:"#212121",fontSize:"14px",fontWeight:"400"}}>Buy without exchange <span style={{padding:"10%",color:"#212121",fontSize:"14px",fontWeight:"500"}}>  ₹29,990</span></span> <br /> {/**The discounted rate here */}
                <input type="radio" name="exchange" id="" /><span style={{padding:"5%",color:"#212121",fontSize:"14px",fontWeight:"400"}}> Buy with exchange <span style={{padding:"10%",color:"#212121",fontSize:"14px",fontWeight:"500"}}>   up to ₹15,650 off</span></span>
            </div>
            
            <div style={{fontSize:"24px",fontWeight:"500"}}>Specifications</div>
            {specifications.map(el=><Featurecontent info={el}/>)}
            <div>
                <img src="warranty.png" alt="" style={{width:"100%"}}/>
            </div>
            <div>
                <img src="bought_together.png" alt="" style={{width:"100%"}}/>
            </div>
            <div>
                <img src="Ratings.png" alt="" style={{width:"100%"}}/>
            </div>
            <div>
                <img src="QA.png" alt="" style={{width:"100%"}}/>
            </div>
        </div>
    )
}
    