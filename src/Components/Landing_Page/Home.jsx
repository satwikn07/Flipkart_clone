import React from 'react';
import { AboveFooter } from './AboveFooter';
import { BestAppliances } from './BestAppliances';
import { CarouselBox } from './Carousel';
import FifthDiv from './FifthDiv';
import { FirstHeaderDiv } from './FirstHeaderDiv';
import Footer from './Footer';
import FourthDiv from './FourthDiv';
import { Furniture } from './Furniture';
import { Games } from './Games';
import { MensClothingdiv} from './MensClothingdiv';
import { Navbar } from './Navbar';
import { SixthDiv } from './SixthDiv';
import { ThirdHeader } from './ThirdHeaderDiv';
import { TopFaishionDiv } from './TopFaishion';
import styled from "styled-components";

const Home = () => {
    const Div = styled.div`
    position:fixed;
    top:0px;
    z-index:3;
    `
    const First = styled.div`
    margin-top:40px
    `
    return (
        <div>
                {/* <Navbar/> */}
                <Div>
                <Navbar />
                </Div>
                <First>
                <FirstHeaderDiv />
                </First>
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
                <Footer/>
        </div>
    );
};

export default Home;