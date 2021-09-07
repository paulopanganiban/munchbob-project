import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { auth, createUserProfileDocument } from '../firebase';
import { Button, Input, Form } from 'antd';
function SignUp() {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
    })
    const handleChange = (e) => {
        const { value, name } = e.target
        setFormValues({ ...formValues, [name]: value })
        console.log(formValues)
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (formValues.password !== formValues.password2) {
            alert(`Passwords don't match`)
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(formValues.email, formValues.password)

            await createUserProfileDocument(user, formValues.firstName)
        } catch (err) {
            console.error(err)
        }
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
            <h1>Create new account</h1>
            <p>Use your email to create a new account</p>
            <FormContainer>


                <Form onSubmit={handleSubmit}
                    name="basic"
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    labelCol={{ span: 10 }}
                    wrapperCol={{ span: 20 }}
                >
                    <Form.Item
                        label="First name"
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your first name' }]}
                    >
                        <Input
                            type="text"
                            value={formValues.firstName}
                            onChange={handleChange} />
                    </Form.Item>
                    <Form.Item
                        label="Lastname"
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your last name' }]}
                    >
                        <Input
                            type="text"
                            value={formValues.lastName}
                            onChange={handleChange} />
                    </Form.Item>
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
            </FormContainer>
            <div className="wrapper">
                <p>Have an account? <Link to="/signin">Sign in</Link></p>
            </div>
        </SignInContainer>
    )
}

export default SignUp
const FormContainer = styled.div`
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
 `
const StyledButton = styled(Button)`
`
const ButtonsContainer = styled.div`
margin-top: 20px;
`
const SignInContainer = styled(motion.div)`
padding: 10px;
overflow-x: hidden;
margin: auto;
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