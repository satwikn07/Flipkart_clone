import './App.css';
import { CarouselBox } from './Components/Carousel';
import { FirstHeaderDiv } from './Components/FirstHeaderDiv';
import { Navbar } from './Components/Navbar';
import { ThirdHeader } from './Components/ThirdHeaderDiv';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <FirstHeaderDiv />
    <CarouselBox/>
    <ThirdHeader />
    
    </div>
  );
}

export default App;
