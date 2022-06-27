import { useState } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import PasswordLogic from "./password-logics";
import ErrorPage from "../../pages/error-page";

export default function UpdatePassword() {
    var { updatePassword } = PasswordLogic();
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const [updatePasswordForm, setUpdatePasswordForm] = useState({
        oldPassword: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (evt) => {
        const value = evt.target.value;

        setUpdatePasswordForm({
            ...updatePasswordForm,
            [evt.target.name]: value,
        });
    }

    const handleSubmit = () => {
        updatePassword(updatePasswordForm);
    }

     if (!currentUser) return (<ErrorPage />)

    return (
        <div className="container bootstrap snippet mt-4">
            <ToastContainer />
            <div className="row">
                <div className="col-sm-10"><h3>Change password</h3></div>
                <div className="col-sm-2"><a href="/users" className="pull-right"></a></div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="tab-content">
                        <Form.Group id="registrationForm" className="form-group">
                            <div className="col-xs-6">
                                <Form.Label><h5>Current password</h5></Form.Label>
                                <Form.Control type="password" className="form-control" onChange={handleChange}
                                    name="oldPassword" />
                            </div>
                            <Form.Group className="form-group">
                                <div className="col-xs-6">
                                    <Form.Label><h5>New password</h5></Form.Label>
                                    <Form.Control type="password" className="form-control" onChange={handleChange}
                                        name="password" />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <div className="col-xs-6">
                                    <Form.Label><h5>Confirm password</h5></Form.Label>
                                    <Form.Control type="password" className="form-control" onChange={handleChange}
                                        name="confirmPassword" />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <div className="col-xs-12">
                                    <br />
                                    <Button className="btn btn-lg btn-primary" onClick={handleSubmit} type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</Button>
                                </div>
                            </Form.Group>
                        </Form.Group>
                    </div>
                </div>

            </div>
        </div>
    )
}