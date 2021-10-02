import React, {useState, useEffect} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Services from '../components/Services'
import Signup from '../components/Signup'
import Axios from 'axios'

const Home = ({ idUser, isUser, token}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [me, setMe] = useState([])
    const [loading, setLoading] = useState(true)
    
    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    // Get all formation for the profile connected
useEffect(() => {
    if (token) {
        
        Axios.post( "http://localhost:3030/api/users/me" , {
            Authorization : token
        })
        .then(res => {
            setMe(res.data)
            console.log(me)
            // console.log("get profile")
        }).catch(err => console.log(err))
    }
}, [])
    

    return (
        <>
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <Navbar toggle={toggle} idUser={idUser} isAdmin={me.isAdmin} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Signup />
        </>
    )
}

export default Home
