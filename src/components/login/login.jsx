import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import LoginLogic from './login-logics';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

function Login() {
    const { login } = LoginLogic();

    const [currentUser, setCurrentUser] = useState({ role: '' });
    const [loginForm, setLoginForm] = useState({
        emailOrUsername: "",
        password: ""
    });

    const handleChange = (evt) => {
        const value = evt.target.value;
        setLoginForm({
            ...loginForm,
            [evt.target.name]: value,
        });
    };

    const doLogin = () => {
        setCurrentUser(login(loginForm))
    }

    return (
        <div>
            <body className="align" style={{ backgroundColor: "#1d1e1f" }}>
                <h1 className="text-light mt--5">Login</h1>
                <div className="grid">
                    <ToastContainer />
                    <Form className="form login">
                        <Form.Group className="mt-3">
                            <Form.Label className="mb-2" >Email address</Form.Label>
                            <Form.Control type="text" name='emailOrUsername' placeholder="Enter email or username" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter password" onChange={handleChange} />
                        </Form.Group>
                    </Form>
                    <Button type="submit" className="mt-3 submit-login" onClick={doLogin}>
                        Submit
                    </Button>
                    <p className="text-center text-light">Not a member? <Link to="/">Sign up now</Link> <svg className="icon">
                    </svg></p>

                </div>
            </body>
        </div>

    )
}
export default Login;