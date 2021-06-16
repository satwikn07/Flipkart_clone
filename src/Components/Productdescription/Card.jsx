import { useState } from "react"
import { useStore } from "react-redux"
import styled, { css } from "styled-components"
 

export const Card = ({item,setI, setTotalPrice, totalPrice, i})=>{
    const [c, setC] = useState(false);
    const Desp = styled.div`
        font-size: 16px;
        font-weight:400;
        color: black;
        cursor: pointer;
        &:hover{
            color:#2874f0;  
        }
    `
    const IMG = styled.img`
        width: 70%;
        ${
            item.type=="main" || c?css `
               filter: contrast(100%);
               
            `:
            css`
               filter: contrast(70%);
            `
        }
    `
    /*${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};**/
    const handleCheck = (e)=>{
       setC(e.target.checked)
    //    console.log(e.target.checked);
        if(e.target.checked){
            setTotalPrice(totalPrice + item.price)
            setI(prev=>prev+1)
        }else{
            setTotalPrice(totalPrice - item.price)
            setI(prev=>prev-1)
        }
        
    }
    return(
        <div style={{width:"100%"}}>
            <div><IMG src={item.image}/> {item.type!="main" && <input type="checkbox" onClick={handleCheck} style={{height:"10vh", transform: "scale(1.5)"}}/> }</div>
            <Desp>{item.title}</Desp>
            <div><span style={{fontFamily:"roboto",fontSize:"14px",padding:"2px 4px 2px 6px",fontWeight:500,backgroundColor:"rgb(56, 142, 60)",color:"rgb(255, 255, 255)"}}>
                {item.rating}<span class="fa fa-star small" ></span> {/**Rating of product here */}
                </span>
           
                <span style={{fontSize:"14px",fontWeight:"500",color:"rgb(135, 135, 135)"}}>({item.rating_no})</span> {/**ratings here */} <br />
                <span style={{fontSize:"17px",fontWeight:"550"}}>₹{item.price}</span>{/**Rate here */}
            </div>
        </div>
    )
}