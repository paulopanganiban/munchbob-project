import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider, signIn } from '../firebase';
import { FacebookOutlined, GoogleOutlined } from '@ant-design/icons';
import { Button, Input, Form } from 'antd';
const SignIn = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues?.email)
        console.log(formValues?.password)
        signIn(formValues.email, formValues.password)
    }
    const signInWithGoogle = (e) => {
        e.preventDefault()
        setIsLoading(true)
        auth.signInWithPopup(provider)
            .then(result => {
                setIsLoading(false)
                console.log(result)
                history.push('/')
            })
    }
    return (
        <SignInContainer
            initial={{
                marginTop: -999,
            }}
            animate={{
                marginTop: 0,
                opacity: 1,
            }}
        >
            <h1>Sign in</h1>
            <p>Sign in on the internal platform</p>
            <ButtonsContainer>
                <StyledButton variant="contained">
                    <FacebookOutlined />LOGIN WITH FACEBOOK
                </StyledButton>
                {
                    '         '
                }
                <StyledButton variant="contained"
                    disabled={isLoading}
                    // pano po kaya okay na logic for disable and isdirty?
                    onClick={signInWithGoogle}
                >
                    <GoogleOutlined />LOGIN WITH GOOGLE
                </StyledButton>
            </ButtonsContainer>
            <FormContainer>
                <p>or login with email address</p>

                <Form onSubmit={handleSubmit}
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 20 }}
                >
                    <Form.Item
                        label="Email address"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email address!' }]}
                    >
                        <Input
                            type="email"
                            value={formValues.email}
                            onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password value={formValues.password}
                            onChange={handleChange} />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {/* <form onSubmit={handleSubmit}>
                <Input placeholder="Email Address"
                onChange={handleChange}
                value={formValues.email}
                name="email"
                type="email"
                required

                />
                <Input placeholder="Password"
                onChange={handleChange}
                value={formValues.password}
                name="password"
                type="password"
                required
                />
                    <StyledButton color="primary" className="form__button" variant="contained"
                        type="submit"
                    >
                        SIGN IN NOW
                    </StyledButton>
                </form> */}
            </FormContainer>
            <div className="wrapper">
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
            </div>
        </SignInContainer >
    )
}

export default SignIn
const FormContainer = styled.div`
margin-top: 10px;
 > p {
     display: flex;
     justify-content: center;
     color: gray;
 }
 > form {
     margin-top: 10px;
     display: flex;
     flex-direction: column;
 }
 > form > .form__textField {
     margin-top: 10px;
 }
 > form > .form__button {
     margin-top: 10px;
 }
 `
const StyledButton = styled(Button)`
margin: 10px;
`
const ButtonsContainer = styled.div`
margin-top: 20px;
display: flex;
justify-content: center;
flex-direction: column;
`
const SignInContainer = styled(motion.div)`
overflow-x: hidden;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

 > p {
     color: gray;
     font-size: 15px;
 }
 > .wrapper {
     margin-top: 10px;
 }
 > .wrapper > p {
     color: gray;
 }
`