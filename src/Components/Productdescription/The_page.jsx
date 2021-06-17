import {Navbar} from '../Landing_Page/Navbar';
import FooterPage from '../Landing_Page/Footer';
import {Gallery} from './Gallery';
import { Description } from './Description';
import { Subnavbar } from './Subnavbar';
import styled from "styled-components";
export const The_page = ()=>{
    // console.log(window.location);
    const Div = styled.div`
    position:fixed;
    top:0px;
    `
    const SubNav = styled.div`
    margin-top:50px;
    z-index:2;
    `
    return(
        <div style={{width:"100%"}}>
            <Div>
            <Navbar />
            </Div>
            <SubNav>
            <Subnavbar />
            </SubNav>
            {/**Bar />*/} {/**To be implemented like last project */}
            <div style={{display:"grid",gridTemplateColumns:"45vw 55vw",gridTemplateRows:"100vh"}}>
                
                <Gallery /> {/**Picture of the product*/}
                <Description />
                 {/**Scroll Overflow */}
            </div>
            <FooterPage />
        </div>
    )
}
