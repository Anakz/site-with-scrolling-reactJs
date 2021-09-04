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
        BtnWrap} from './InfoElements'

const InfoSection = () => {
    return (
        <>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                            <TextWrapper>
                                <TopLine>TopLine</TopLine>
                                <Heading>Heading</Heading>
                                <Subtitle>Substitle</Subtitle>

                                <BtnWrap>
                                    <Button>Button</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
