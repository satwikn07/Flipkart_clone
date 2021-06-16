import styled from "styled-components"

export const Offers = ({head,body,tail})=>{
    const Myspan = styled.span`
        color: ${props=>props.color};
        font-weight: 550;
    `
   return (
   <div> 
        <span style={{fontSize:"16px",display:"flex",alignItems:"center"}}> 
        <img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" style={{height:"18px"}} />
        <Myspan color="#212121">{head}</Myspan> 
        <span style={{fontWeight:"400"}}>{body}</span>
        <Myspan color="#2874f0"> {tail}</Myspan>
        </span>
    </div>
   )

}