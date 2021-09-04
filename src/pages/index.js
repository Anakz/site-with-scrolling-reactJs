import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <Navbar toggle={toggle} />
            <HeroSection />
        </>
    )
}

export default Home
