import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserDetail } from "../../generated/models";
import ProfileLogic from "./profile-logics";
import { ToastContainer, toast } from "react-toastify";
import { Client } from "../../generated/models";
import moment from "moment";

export default function Profile() {
    let clientService = new Client();
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [test, setTest] = useState(new UserDetail());
    var { user, getUser, updateUser } = ProfileLogic(currentUser.userId);

    const [dateOfBirth, setDateOfBirth] = useState();

    const [userUpdateForm, setUserUpdateForm] = useState({
        id: "",
        firstName: "",
        lastName: "",
        dateOfBirth: moment("1-01-01T00:00:00"),
        email: "",
        username: "",
        phone: "",
        address: "",
        departmentId: "",
        department: "",
        role: "",
    });

    var checkTime = (time) => {
        if (time < 10)
            return '0' + time.toString();
        return time;
    }

    const convertDateTime = (dateTime) => {
        var date = dateTime.getFullYear() + '-' + (checkTime(dateTime.getMonth() + 1)) + '-'
            + checkTime(dateTime.getDate());
        var time = checkTime(dateTime.getHours()) + ":" +
            checkTime(dateTime.getMinutes()) + ":" +
            checkTime(dateTime.getSeconds());
        return date + "T" + time;
    }

    useEffect(() => {
        var t = getUser();
        clientService.usersGET(currentUser.userId)
            .then((res) => {
                setUserUpdateForm(new UserDetail({
                    id: res.id,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    dateOfBirth: moment(convertDateTime(res.dateOfBirth)),
                    email: res.email,
                    username: res.username,
                    phone: res.phone,
                    address: res.address,
                    departmentId: res.departmentId,
                    department: res.department,
                    role: res.role,
                }));
                setDateOfBirth(convertDateTime(res.dateOfBirth))
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }, [user.id])

    const handleChange = (evt) => {
        const value = evt.target.value;
        if (evt.target.name == "dateOfBirth") {
            console.log("heheh")
            setUserUpdateForm({
                ...userUpdateForm,
                dateOfBirth: moment(value),
            });
        }
        setUserUpdateForm({
            ...userUpdateForm,
            [evt.target.name]: value,
        });
        console.log(userUpdateForm)
    }

    const handleSubmit = () => {
        console.log(userUpdateForm.dateOfBirth)
        updateUser(currentUser.userId, userUpdateForm);
    }

    return (
        <div className="container bootstrap snippet">
            <ToastContainer />
            <div className="row">
                <div className="col-sm-3">
                    <div className="text-center">
                        <div className="col-sm-10 mt-4 ms-3"><h5>{currentUser.username}</h5></div>
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                        <h6>Upload a different photo...</h6>
                        <Form.Control type="file" className="text-center center-block file-upload" />
                    </div>

                </div>
                <div className="col-sm-9 mt-4">
                    <div className="tab-content">
                        <Form.Group id="registrationForm" className="form-group">
                            <div className="col-xs-6">
                                <label><h5>First name</h5></label>
                                <Form.Control type="text" className="form-control" onChange={handleChange}
                                    name="firstName" id="first_name" defaultValue={user.firstName} />
                            </div>
                            <Form.Group className="form-group">
                                <div className="col-xs-6">
                                    <Form.Label><h5>Last name</h5></Form.Label>
                                    <Form.Control type="text" className="form-control" onChange={handleChange}
                                        name="lastName" id="last_name" defaultValue={user.lastName} />
                                </div>
                            </Form.Group>

                            <Form.Group className="form-group">

                                <div className="col-xs-6">
                                    <Form.Label><h5>Phone</h5></Form.Label>
                                    <Form.Control type="text" className="form-control" onChange={handleChange}
                                        name="phone" id="phone" defaultValue={user.phone} />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">

                                <div className="col-xs-6">
                                    <Form.Label><h5>Email</h5></Form.Label>
                                    <Form.Control type="email" className="form-control" onChange={handleChange}
                                        name="email" id="email" defaultValue={user.email} />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">

                                <div className="col-xs-6">
                                    <label><h5>Location</h5></label>
                                    <Form.Control type="text" className="form-control" id="location" onChange={handleChange}
                                        name="address" defaultValue={user.address} />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <div className="col-xs-6">
                                    <label><h5>Date of birth</h5></label>
                                    <Form.Control type="datetime-local" onChange={handleChange}
                                        name="dateOfBirth"
                                        defaultValue={dateOfBirth} />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group">
                                <div className="col-xs-12">
                                    <br />
                                    <Button className="btn btn-lg btn-primary" onClick={handleSubmit} type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</Button>
                                    <Button className="btn btn-lg btn-secondary ms-3" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</Button>
                                </div>
                            </Form.Group>
                        </Form.Group>
                    </div>
                </div>

            </div>
        </div>
    )
}