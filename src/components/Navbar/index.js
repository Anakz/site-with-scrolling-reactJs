import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,
        NavContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink} from './NavbarElements'



const Navbar = ({toggle}) => {
    const webcolor = '#3195AD';
    return (
        <>
            <Nav >
                <NavContainer>

                    <NavLogo webcolor={webcolor} to="/">Banck</NavLogo>
                    <MobileIcon>
                        <FaBars onClick={toggle} />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks webcolor={webcolor} to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks webcolor={webcolor} to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks webcolor={webcolor} to="services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks webcolor={webcolor} to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink webcolor={webcolor} to="/signin" >Sign In</NavBtnLink>
                    </NavBtn>

                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar