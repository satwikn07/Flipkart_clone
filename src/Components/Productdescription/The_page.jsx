import {Navbar} from '../Landing_Page/Navbar';
import FooterPage from '../Landing_Page/Footer';
import {Gallery} from './Gallery';
import { Description } from './Description';
export const The_page = ()=>{
    return(
        <div >
            <Navbar />
            {/**Bar />*/} {/**To be implemented like last project */}
            <div style={{display:"grid",gridTemplateColumns:"10vw 40vw 42vw 8vw",gridTemplateRows:"100vh"}}>
                <div></div>
                <Gallery /> {/**Picture of the product*/}
                <Description />
                <div></div> {/**Scroll Overflow */}
            </div>
            <FooterPage />
        </div>
    )
}
