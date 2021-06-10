import './App.css';
import { AboveFooter } from './Components/AboveFooter';
import { BestAppliances } from './Components/BestAppliances';
import { CarouselBox } from './Components/Carousel';
import FifthDiv from './Components/FifthDiv';
import { FirstHeaderDiv } from './Components/FirstHeaderDiv';
import FooterPage from './Components/Footer';
import FourthDiv from './Components/FourthDiv';
import { Furniture } from './Components/Furniture';
import { Games } from './Components/Games';
import { MensClothingdiv} from './Components/MensClothingdiv';
import { Navbar } from './Components/Navbar';
import { SixthDiv } from './Components/SixthDiv';
import { ThirdHeader } from './Components/ThirdHeaderDiv';
import { TopFaishionDiv } from './Components/TopFaishion';

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
