import { useState } from "react"
import { Card } from "./Card"
import { Btn } from "./Gallery"
import { Redirect, useHistory } from "react-router"
export const BoughtTogether = ()=>{
    const a = {display:"flex",alignItems:"center", justifyContent:"center",fontSize:"40px",fontWeight:"700"}
    const history = useHistory();
    const addToCart =()=>{
        history.push("/viewcart")
    }
    
    const items = [
        {
            image:"https://rukminim1.flixcart.com/image/312/312/kbb49zk0/computer/j/3/x/lenovo-na-laptop-original-imafsnkxhmvgrqgu.jpeg?q=70",
            title:"Lenovo IdeaPad 3 Core i5 10th Gen - (8 GB/1 TB HDD/Windows 10 Hom...",
            rating:3.7,
            rating_no:122,
            price:43990,
            type:"main"
        },
        //            image:"https://rukminim1.flixcart.com/image/312/312/kgsb1jk0/keyboard/laptop-keyboard/2/9/r/lenovo-kb-mice-bo-wireless-combo-100-eng-original-imafwy3vpd7gfpxg.jpeg?q=70",

        {   
            image:"https://rukminim1.flixcart.com/image/312/312/kgsb1jk0/keyboard/laptop-keyboard/2/9/r/lenovo-kb-mice-bo-wireless-combo-100-eng-original-imafwy3vpd7gfpxg.jpeg?q=70",

            title:"Lenovo KB MICE_BO Wireless combo 100 Eng Wireless Laptop Keyboard",
            rating:4.3,
            rating_no:"8,325",
            price:1450,
            type:"peri"
        },
        {
            image:"https://rukminim1.flixcart.com/image/312/312/kgsb1jk0/mouse/w/s/h/lenovo-300-original-imafwy3vbmz9kczb.jpeg?q=70",
            title:"Lenovo 300 Wireless Optical Mouse",
            rating:4.5,
            rating_no:"11,136",
            price:799,
            type:"peri"
        },
    ]
    const [totalPrice, setTotalPrice] = useState(0) // here total price is add ons price
    const [i, setI] = useState(1);
    
    return(
        <div>
            <div style={{fontSize:"24px", paddingLeft:"4%", fontWeight:"550", marginBottom:"5vh"}}>Frequently Bought Together</div>
            <div style={{display:"grid", gridTemplateColumns:"25% 8% 25% 8% 25%"}}>
                <div><Card i={i} totalPrice={totalPrice} setTotalPrice={setTotalPrice} setI={setI}  item={items[0]}/></div>
                <div style={a}>+</div>
                <div><Card i={i} totalPrice={totalPrice} setTotalPrice={setTotalPrice} setI={setI}  item={items[1]}/></div>
                <div style={a}>+</div>
                <div><Card i={i} totalPrice={totalPrice} setTotalPrice={setTotalPrice} setI={setI} item={items[2]}/></div>
            </div>
            {
                i > 1?<div style={{display:"grid", gridTemplateColumns:"15% 10% 15% 10% 15% 30%"}}>
                <div>
                   <span style={{color:"#878787", fontSize:"16px"}}>1 item</span> <br />
                   <span style={{color:"#212121",fontSize:"18px",fontWeight:"550"}}>₹{items[0].price}</span>
               </div>
               <div>+</div>
               <div>
                   <span style={{color:"#878787", fontSize:"16px"}}>{i-1==1?'1 Add On':`${i-1} Add ons`}</span> <br />
                   <span style={{color:"#212121",fontSize:"18px",fontWeight:"550"}}>₹{totalPrice}</span>
               </div>
               <div>=</div>
               <div>
                   <span style={{color:"#878787", fontSize:"16px"}}>Total</span> <br />
                   <span style={{color:"#212121",fontSize:"18px",fontWeight:"550"}}>₹{items[0].price + totalPrice}</span>
               </div>
               <div style={{paddingTop:"2%"}}><Btn onClick={addToCart} colour="#ff9f00" height="7vh"><i class="fa fa-shopping-cart" style={{fontSize:"16px", color:"white"}}/>ADD {i} ITEMS TO CART</Btn></div>
          </div>:<div style={{display:"grid", gridTemplateColumns:"70% 30%",paddingRight:"4vw", paddingTop:"1vh"}}>
                 <div style={{paddingTop:"2%", fontWeight:"500", fontSize:"16px", paddingLeft:"4%"}}>
                    Please add at least 1 add-on item to proceed
                </div>
                <div><Btn colour="#878787" height="7vh" cursor="not-allowed" ><i class="fa fa-shopping-cart" style={{fontSize:"16px", color:"white"}}/>{`  ADD TO CART`}</Btn></div>
           </div>
            }
           
        </div>
    )
}
