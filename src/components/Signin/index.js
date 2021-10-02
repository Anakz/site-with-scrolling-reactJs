import React,{useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
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

const Signin = ({ idUser, isUser }) => {

    let history = useHistory();

    
    // const [isUser, setIsUser] = useState(-999)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const signin = (e) => {

        setErrorEmail(false)
        setErrorPassword(false)

        
        if (email.length < 8) {
            e.preventDefault();
            alert("Please verify your email")
            setErrorEmail(true)
        }
        if (password.length < 8) {
            alert("Please verify your password")
            e.preventDefault();
            setErrorPassword(true)
        }

        if (email && password && !errorEmail  && !errorPassword) {
            Axios.post( "http://localhost:3030/api/users/login" , {
            email:email ,
            password: password
            })
            .then(res => {
                if (res.data.token.length > 100) {
                    // setIdUser(res.data.userId);
                    // alert(res.data.userId);
                    isUser(res.data.userId, res.data.token);
                }
                console.log(res.data)
            })
            // window.location.reload(false);
            }
    }
            // Redirect to home page
            if (idUser!== -999) {
                history.push('/')                       
            }

    return (
        <>
            <Container>
                <FormWrap>

                    <Icon to='/'>Logo</Icon>
                    
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign In To Your Account {idUser} ok</FormH1>

                            <FormLabel htmlFor='email' >Email</FormLabel>
                            <FormInput type='email' onChange={(e) => setEmail(e.target.value)} required/>

                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' onChange={(e) => setPassword(e.target.value)} required/>

                            <FormButton type='submit' onClick={signin}>Continue</FormButton>
                            <Text>Forgot password ?</Text>
                        </Form>
                    </FormContent>

                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
