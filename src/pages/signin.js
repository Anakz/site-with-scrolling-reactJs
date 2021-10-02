import React from 'react'
import ScrollToTop from '../components/ScrollToTop'
import Signin from '../components/Signin'

const SignInPage = ({idUser, isUser}) => {
    return (
        <>
          <ScrollToTop />
          <Signin idUser={idUser} isUser={isUser} />  
        </>
    )
}

export default SignInPage
