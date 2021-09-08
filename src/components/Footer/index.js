import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer,
        FooterWrap,
        FooterLinksContainer,
        FooterLinksWrapper,
        FooterLinkItems,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebSiteRights,
        SocialIcons,
        SocialIconLink} from './FooterElements'

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Big Title 1</FooterLinkTitle>
                                <FooterLink>How It Works 1</FooterLink>
                                <FooterLink>TesTimonials 1</FooterLink>
                                <FooterLink>Careers 1</FooterLink>
                                <FooterLink>Investors 1</FooterLink>
                                <FooterLink>Terms Of Service 1</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Big Title 2</FooterLinkTitle>
                                <FooterLink>How It Works 2</FooterLink>
                                <FooterLink>TesTimonials 2</FooterLink>
                                <FooterLink>Careers 2</FooterLink>
                                <FooterLink>Investors 2</FooterLink>
                                <FooterLink>Terms Of Service 2</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Big Title 3</FooterLinkTitle>
                                <FooterLink>How It Works 3</FooterLink>
                                <FooterLink>TesTimonials 3</FooterLink>
                                <FooterLink>Careers 3</FooterLink>
                                <FooterLink>Investors 3</FooterLink>
                                <FooterLink>Terms Of Service 3</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Big Title 4</FooterLinkTitle>
                                <FooterLink>How It Works 4</FooterLink>
                                <FooterLink>TesTimonials 4</FooterLink>
                                <FooterLink>Careers 4</FooterLink>
                                <FooterLink>Investors 4</FooterLink>
                                <FooterLink>Terms Of Service 4</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>Logo</SocialLogo>
                            <WebSiteRights>Logo © {new Date().getFullYear()} All rights reserves </WebSiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook" >
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="//www.instagram.com" target="_blank" aria-label="Instagram" >
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter" >
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="linkedin" >
                                    <FaLinkedin />
                                </SocialIconLink>
                                <SocialIconLink href="//R.S.203, Rte Oued Akreuch, Oum Azza, Ain El Aouda 12100" target="_blank" aria-label="GPS" >
                                    <FaMapMarkerAlt/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
