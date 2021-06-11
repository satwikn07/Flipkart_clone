import React from 'react';
import { AboveFooter } from './AboveFooter';
import { BestAppliances } from './BestAppliances';
import { CarouselBox } from './Carousel';
import FifthDiv from './FifthDiv';
import { FirstHeaderDiv } from './FirstHeaderDiv';
import FooterPage from './Footer';
import FourthDiv from './FourthDiv';
import { Furniture } from './Furniture';
import { Games } from './Games';
import { MensClothingdiv} from './MensClothingdiv';
import { Navbar } from './Navbar';
import { SixthDiv } from './SixthDiv';
import { ThirdHeader } from './ThirdHeaderDiv';
import { TopFaishionDiv } from './TopFaishion';

const Home = () => {
    return (
        <div>
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
};

export default Home;