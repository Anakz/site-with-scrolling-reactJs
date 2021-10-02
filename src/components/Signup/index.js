import React,{useState} from 'react'
import Axios from 'axios'
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

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const register = (e) => {
        alert("I am in debut")
        console.log("Variables "+name+email+password)

        setErrorName(false)
        setErrorEmail(false)
        setErrorPassword(false)

        if (name && name.length < 3) {
            alert("I am in name")
            setErrorName(true)
            e.preventDefault();
        }
        if (email && email.length < 8) {
            alert("I am in email")
            setErrorEmail(true)
            e.preventDefault();
        }
        if (password && password.length < 8) {
            alert("I am in pasword")
            setPassword(true)
            e.preventDefault();
        }

        if (name && email && password && !errorName && !errorEmail  && !errorPassword) {
            alert("I am in last if")
            Axios.post( "http://localhost:3030/api/users/register" , {
            username: name,
            email:email ,
            password: password,
            bio: "bio"
            })
            .then(res => {
            console.log(res.data.userId)
            if (res) {
                alert("Vous avez bien créer votre compte")
            }
            }).catch(err => {
                alert("User already exist "+err);
            })
            // window.location.reload(false);
            }
    }

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
                                        
                                        <FormLabel htmlFor='name'  >Full Name</FormLabel>
                                        <FormInput type='text' onChange={ (e) => setName(e.target.value) } />

                                        <FormLabel htmlFor='email'>Email</FormLabel>
                                        <FormInput type='email' onChange={ (e) => setEmail(e.target.value) }  />
                                        
                                        <FormLabel htmlFor='password' >Password</FormLabel>
                                        <FormInput type='password' onChange={ (e) => setPassword(e.target.value) } />

                                        <FormButton type='submit' onClick={register}>Register</FormButton>
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
