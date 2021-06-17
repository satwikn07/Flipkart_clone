import styled from "styled-components"
export const Subnavbar = ()=>{
    const Divi = styled.div`
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        &:hover{
            color: #2874f0;
        }
        
    `
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",borderBottom:"1px solid #E4E4E4",background:"white",height:"5.5vh"}}>
            <Divi>Electronics <i class="fa fa-angle-down" style={{fontWeight:"200",color:"#878787"}}></i></Divi>
            <Divi>TV & Appliances <i class="fa fa-angle-down" style={{fontWeight:"200",color:"#878787"}}></i></Divi>
            <Divi>Men <i class="fa fa-angle-down" style={{fontWeight:"200",color:"#878787"}}></i></Divi>
            <Divi>Women <i class="fa fa-angle-down" style={{fontWeight:"200",color:"#878787"}}></i></Divi>
            <Divi>Baby & Kids <i class="fa fa-angle-down" style={{fontWeight:"200",color:"#878787"}}></i></Divi>
            <Divi>Home and Furniture <i class="fa fa-angle-down" style={{fontWeight:"200",color:"#878787"}}></i></Divi>
            <Divi>Sports, books & More <i class="fa fa-angle-down" style={{fontWeight:"200",color:"#878787"}}></i></Divi>
            <Divi>Flights</Divi>
            <Divi>Offer Zone</Divi>
        </div>
    )
}