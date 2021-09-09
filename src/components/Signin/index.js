import React from 'react'
import {Container,
        FormWrap,
        Icon,
        FormContent,
        Form,
        FormH1,
        FormLabel,
        FormInput,
        FormButton,
        Text} from './SigninElements'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>

                    <Icon to='/'>Logo</Icon>
                    
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign In To Your Account</FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' required/>
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password ?</Text>
                        </Form>
                    </FormContent>

                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
