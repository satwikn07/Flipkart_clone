import './App.css';
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
    <FooterPage/>
    </div>
  );
}

export default App;
