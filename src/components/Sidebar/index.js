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
    const webcolor = '#3195AD';
    return (
        <>
            <SidebarContainer isOpen={isOpen}>
                <Icon>
                    <CloseIcon onClick={toggle} webcolor={webcolor} />
                </Icon>

                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink onClick={toggle} webcolor={webcolor} to="about">About</SidebarLink>
                        <SidebarLink onClick={toggle} webcolor={webcolor} to="discover">Discover</SidebarLink>
                        <SidebarLink onClick={toggle} webcolor={webcolor} to="services">Services</SidebarLink>
                        <SidebarLink onClick={toggle} webcolor={webcolor} to="signup">Sing Up</SidebarLink>
                    </SidebarMenu>

                    <SideBtnWrap>
                        <SidebarRoute webcolor={webcolor} to="/signin">Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
