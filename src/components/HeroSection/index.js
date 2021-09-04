import React, {useState} from 'react'
import Video from '../../videos/Video.mp4'
import { Button } from "../ButtonElements";

import {HeroContainer,
        HeroBg,
        VideoBg,
        HeroContent,
        HeroH1,
        HeroP,
        HeroBtnWrapper,
        ArrowForward,
        ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                
                <HeroContent>
                    <HeroH1>Laborum do magna voluptate</HeroH1>
                    <HeroP>
                        Tempor sit qui aute culpa aute adipisicing sint eu.
                        Incididunt deserunt voluptate occaecat aliqua aliquip.
                    </HeroP>

                    <HeroBtnWrapper>
                        <Button primary="true" dark='true' onMouseEnter={onHover} onMouseLeave={onHover}>
                            Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
