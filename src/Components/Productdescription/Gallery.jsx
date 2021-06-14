import { Redirect, useHistory } from "react-router"
import styled from "styled-components"
export const Gallery = ()=>{
    const history = useHistory();
    const Btn = styled.button`
        color: white;
        background-color: ${props=>props.colour};
        font-size: 16px;
        padding: 18px;
        font-weight: 500;
        width: 15vw;
        outline: none;
        border: none;
        cursor: pointer;
    `
    const checkout =()=>{
        history.push("/checkout")
        
    }
    const addToCart =()=>{
        history.push("/viewcart")
    }
    
    return(
        <div >
            <img src="product_gallery.png" alt="" style={{width:"100%",height:"70vh"}} />
            <div style={{paddingLeft:"8vh",background:"white",height:"30vh"}}>
                <Btn colour="#ff9f00" onClick={addToCart}><i class="fa fa-shopping-cart" style={{fontSize:"18px", color:"white"}}></i>ADD TO CART</Btn> {/**Link the page */}
                <Btn colour="#fb641b" onClick={checkout}><i class="fa fa-bolt" style={{fontSize:"18px", color:"white"}}></i>BUY NOW</Btn>{/**Link page */}
            </div>
           
        </div>
    )
}