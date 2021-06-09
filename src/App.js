import './App.css';
import { AboveFooter } from './Components/AboveFooter';
import { CarouselBox } from './Components/Carousel';
import { FirstHeaderDiv } from './Components/FirstHeaderDiv';
import FooterPage from './Components/Footer';
import { Navbar } from './Components/Navbar';
import { ThirdHeader } from './Components/ThirdHeaderDiv';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <FirstHeaderDiv />
    <CarouselBox/>
    <ThirdHeader />
    <AboveFooter/>
    <FooterPage/>
    </div>
  );
}

export default App;
