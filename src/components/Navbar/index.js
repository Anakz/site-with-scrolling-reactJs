import React,{useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import Logo from '../../images/Logo.png'
import {animateScroll as scroll} from 'react-scroll'
import {Nav,
        NavContainer,
        NavLogo,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLinks,
        NavBtn,
        NavBtnLink,
        NavLogoImg,
        NavBLinks} from './NavbarElements'



const Navbar = ({toggle, idUser, isAdmin}) => {
    
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () =>{
        if(window.scrollY >= 160){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>

                    <NavLogo to="/" onClick={toggleHome} ><NavLogoImg src= {Logo} alt="Logo" /></NavLogo>
                    <MobileIcon>
                        <FaBars onClick={toggle} />
                    </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="sign" smooth={true} duration={500} spy={true} exact='true' offset={-80} >To Sign</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Sign Up</NavLinks>
                        </NavItem>

                        {isAdmin ? 
                            <NavItem>
                                <NavBLinks to="allusers" >All users</NavBLinks>
                            </NavItem> 
                        : ''}
                    </NavMenu>

                    <NavBtn>
                        {(idUser === -999) ? <NavBtnLink to="/signin" >Sign In</NavBtnLink> : <NavBtnLink to="/signout" >Sign out</NavBtnLink>}
                    </NavBtn>

                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar