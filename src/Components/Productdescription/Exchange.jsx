import { useState } from "react"
import styled from "styled-components"
export const Exchange = ({a,b,id})=>{
    const [chec,setChec] = useState(false)
    const Divi = styled.div`
        border: 1px solid rgb(240,240,240);
        padding-top: 1.5vh;
        background: ${chec?`white`:`white`};
        cursor: pointer;
        &:hover{
            background-color: #F5FAFF;
        }
    `
    
    return(
        <Divi>
            <input type="radio" name="exchange" value={id} onClick={(e)=>console.log(e.target.value)}/>
            <span style={{padding:"5%",color:"#212121",fontSize:"14px",fontWeight:"400"}}>
                {a} 
                <span style={{padding:"10%",color:"#212121",fontSize:"14px",fontWeight:"500"}}>  ₹{b}</span>
            </span> 
        </Divi> 

    )
} 