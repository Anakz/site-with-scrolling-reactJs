import React from 'react'
import {Button} from '../ButtonElements'
import {InfoContainer,
        InfoWrapper,
        InfoRow,
        Column1,
        TextWrapper,
        TopLine,
        Heading,
        Subtitle,
        BtnWrap,
        Column2,
        ImgWrap,
        Img} from './InfoElements'

const InfoSection = ({  id,
                        lightBg,
                        lightText,
                        topLine,
                        headLine,
                        description,
                        buttonLabel,
                        imgStart,
                        img,
                        alt,
                        dark,
                        primary,
                        darkText}) => {

    return (
        <>
            <InfoContainer id={id} lightBg={lightBg} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>

                                <BtnWrap>
                                    <Button 
                                        to='home'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        
                                        primary={primary} 
                                        dark={dark}
                                    >
                                        {buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
