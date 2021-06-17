import { Redirect, useHistory } from "react-router"
import styled from "styled-components"
const Btn = styled.button`
        color: white;
        background-color: ${props=>props.colour};
        height: ${props=>props.height};
        font-size: 16px;
        padding: 14px;
        font-weight: 500;
        width: 15vw;
        outline: none;
        border: none;
        cursor: pointer;
        cursor: ${props=>props.cursor};
    `
export const Gallery = ()=>{
    const history = useHistory();
    
    const checkout =()=>{
        history.push("/checkout")
        
    }
    const addToCart =()=>{
        history.push("/viewcart")
    }
    
    return(
        <div style={{textAlign:"right",background:"white"}}>
            <img src="product_gallery.png" alt="" style={{width:"90%",height:"70vh"}} />
            <div style={{paddingRight:"4vw",background:"white",height:"30vh"}}>
                <Btn colour="#ff9f00"  onClick={addToCart}><i class="fa fa-shopping-cart" style={{fontSize:"18px", color:"white"}}></i>{`  ADD TO CART`}</Btn> {/**Link the page */}
                <Btn colour="#fb641b"  onClick={checkout}><i class="fa fa-bolt" style={{fontSize:"18px", color:"white"}}></i>{`  BUY NOW`}</Btn>{/**Link page */}
            </div>
           
        </div>
    )
}
export {Btn}