import React from 'react'
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarWrapper,
        SidebarMenu,
        SidebarLink,
        SideBtnWrap,
        SidebarRoute} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon>
                    <CloseIcon onClick={toggle} />
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink onClick={toggle} to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</SidebarLink>
                        <SidebarLink onClick={toggle} to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Discover</SidebarLink>
                        <SidebarLink onClick={toggle} to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Services</SidebarLink>
                        <SidebarLink onClick={toggle} to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80} >Sing Up</SidebarLink>
                    </SidebarMenu>

                    <SideBtnWrap>
                        <SidebarRoute to="/signin">Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
