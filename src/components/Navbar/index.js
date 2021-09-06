import React from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/Logo.png'
import {Nav,
        NavContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink,
        NavLogoImg} from './NavbarElements'



const Navbar = ({toggle}) => {
    
    return (
        <>
            <Nav >
                <NavContainer>

                    <NavLogo to="/"><NavLogoImg src= {Logo} alt="Logo" /></NavLogo>
                    <MobileIcon>
                        <FaBars onClick={toggle} />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to="/signin" >Sign In</NavBtnLink>
                    </NavBtn>

                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar