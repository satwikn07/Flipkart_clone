import {Navbar} from '../Landing_Page/Navbar';
import FooterPage from '../Landing_Page/Footer';
import {Gallery} from './Gallery';
import { Description } from './Description';
import { Subnavbar } from './Subnavbar';
export const The_page = ()=>{
    return(
        <div style={{width:"100%"}}>
            <Navbar />
            <Subnavbar />
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
