import React from 'react'
import img from '../../images/svg-7.svg'
import {Container,
        Wrap,
        Row,
        Column1,
        FormWrap,
        FormContent,
        Form,
        Column2,
        FormH1,
        FormLabel,
        FormInput,
        FormButton,
        FormLink,
        ImgWrap,
        Img
        } from './SignupElements'

const Signup = () => {
    return (
        <>
            <Container id='signup'>
                <Wrap>
                    <Row>
                        <Column1>
                            <FormWrap>
                                <FormContent>
                                    <Form>
                                        <FormH1>Please Enter your Information</FormH1>
                                        
                                        <FormLabel htmlFor='name'>Full Name</FormLabel>
                                        <FormInput type='text' />

                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <FormInput type='email' />
                                        
                                        <FormLabel htmlFor='password'>Password</FormLabel>
                                        <FormInput type='password' />

                                        <FormButton type='submit'>Register</FormButton>
                                        <FormLink to='/signin'>Sign In ?</FormLink>
                                    </Form>
                                </FormContent>
                            </FormWrap>
                        </Column1>

                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt="forms" />
                            </ImgWrap>
                        </Column2>
                    </Row>
                </Wrap>
            </Container>
        </>
    )
}

export default Signup
