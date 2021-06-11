import './App.css';
import { AboveFooter } from './Components/Landing_Page/AboveFooter';
import { BestAppliances } from './Components/Landing_Page/BestAppliances';
import { CarouselBox } from './Components/Landing_Page/Carousel';
import FifthDiv from './Components/Landing_Page/FifthDiv';
import { FirstHeaderDiv } from './Components/Landing_Page/FirstHeaderDiv';
import FooterPage from './Components/Landing_Page/Footer';
import FourthDiv from './Components/Landing_Page/FourthDiv';
import { Furniture } from './Components/Landing_Page/Furniture';
import { Games } from './Components/Landing_Page/Games';
import { MensClothingdiv} from './Components/Landing_Page/MensClothingdiv';
import { Navbar } from './Components/Landing_Page/Navbar';
import { SixthDiv } from './Components/Landing_Page/SixthDiv';
import { ThirdHeader } from './Components/Landing_Page/ThirdHeaderDiv';
import { TopFaishionDiv } from './Components/Landing_Page/TopFaishion';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <FirstHeaderDiv />
    <CarouselBox/>
    <ThirdHeader />
    <FourthDiv />
    <FifthDiv />
    <SixthDiv />
    <MensClothingdiv />
    <TopFaishionDiv />
    <BestAppliances />
    <Furniture />
    <Games />
    <AboveFooter/>
    <FooterPage/>
    </div>
  );
}

export default App;
