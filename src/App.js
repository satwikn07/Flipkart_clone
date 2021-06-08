import './App.css';
import { CarouselBox } from './Components/Carousel';
import { FirstHeaderDiv } from './Components/FirstHeaderDiv';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <FirstHeaderDiv />
    <CarouselBox/>
    
    </div>
  );
}

export default App;
