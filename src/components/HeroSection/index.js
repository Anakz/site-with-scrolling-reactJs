import React from 'react'
import Video from '../../videos/Video.mp4'
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
    const webcolor = '#3195AD';
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                
                <HeroContent>
                    <HeroH1 webcolor={webcolor}>Laborum do magna voluptate</HeroH1>
                    <HeroP webcolor={webcolor}>
                        Tempor sit qui aute culpa aute adipisicing sint eu.
                        Incididunt deserunt voluptate occaecat aliqua aliquip.
                    </HeroP>

                    <HeroBtnWrapper>
                        <button>
                            Get Started {/* {hover ? <ArrowForward/> : <ArrowRight/>} */}
                        </button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
