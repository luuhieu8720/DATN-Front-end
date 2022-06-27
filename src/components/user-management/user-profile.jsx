import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserDetail, UserFormUpdate } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Client } from "../../generated/models";
import moment from "moment";
import { useNavigate, useParams } from "react-router";
import ProfileLogic from "../profile/profile-logics";
import { Link } from "react-router-dom";
import ErrorPage from "../../pages/error-page";

export default function UserProfile() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const [listDepartment, setListDepartment] = useState([]);

    const [selectedValue, setSelectedValue] = useState()

    var history = useNavigate();

    var id = useParams();
    let clientService = new Client();
    const [test, setTest] = useState(new UserDetail());
    var { user, getUser, updateUser } = ProfileLogic(id.id);

    const [dateOfBirth, setDateOfBirth] = useState();

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleChangeImage = (evt) => {
        const value = evt.target.files[0];

        if (value != null) {
            getBase64(value).then((res) => setUserUpdateForm({
                ...userUpdateForm,
                ["avatarUrl"]: res,
            }));
        }
    }

    const [userUpdateForm, setUserUpdateForm] = useState(new UserFormUpdate({
        id: "",
        firstName: "",
        lastName: "",
        dateOfBirth: moment("1-01-01"),
        email: "",
        username: "",
        phone: "",
        address: "",
        departmentId: "",
        role: ""
    }));

    useEffect(() => {
        var t = getUser();
        clientService.usersGET(id.id)
            .then((res) => {
                setUserUpdateForm(new UserDetail({
                    id: res.id,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    dateOfBirth: res.dateOfBirth,
                    email: res.email,
                    username: res.username,
                    phone: res.phone,
                    address: res.address,
                    departmentId: res.departmentId,
                    department: res.department,
                    role: res.role,
                    avatarUrl: res.avatarUrl
                }));
                setDateOfBirth(res.dateOfBirth)
                setSelectedValue(res.department ? res.department.name : "None")
                console.log(res.department.name)
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        clientService.departmentsAll()
            .then((res) => {
                setListDepartment(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

    }, [userUpdateForm.id, listDepartment.length])

    const handleChange = (evt) => {
        const value = evt.target.value;
        if (evt.target.name == "dateOfBirth") {
            console.log("heheh")
            setUserUpdateForm({
                ...userUpdateForm,
                dateOfBirth: moment(value).format("YYYY-MM-DD"),
            });
        }

        else if (evt.target.name == "departmentId") {
            setSelectedValue(value);
            if (value == "None") {
                setUserUpdateForm({ ...userUpdateForm, departmentId: "" })
            }
            else {
                setUserUpdateForm({ ...userUpdateForm, departmentId: value })
            }
        }

        else {
            setUserUpdateForm({
                ...userUpdateForm,
                [evt.target.name]: value,
            });
        }
        console.log(userUpdateForm)
    }

    const handleSubmit = () => {
        console.log(userUpdateForm)
        updateUser(id.id, userUpdateForm);
    }

    if (!user || !listDepartment || !selectedValue) return (<p>Loading</p>)

    if ( !currentUser && (currentUser ? (currentUser.role != "Admin" && currentUser.role != "Manager") : true)) return (<ErrorPage />)

    return (
        <div className="container bootstrap snippet">
            <ToastContainer />
            <div className="row">
                <div className="col-sm-4">
                    <div className="text-center">
                        <div className="col-sm-10 mt-4 ms-3"><h5>{user.username}</h5></div>
                        <img src={userUpdateForm.avatarUrl ? userUpdateForm.avatarUrl : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className="avatar img-circle img-thumbnail" alt="avatar" />
                        <h6>Upload a different photo...</h6>
                        <Form.Control type="file"
                            className="text-center center-block file-upload" onChange={handleChangeImage} />
                    </div>
                </div>
                <div className="col-sm-8 mt-4">
                    <div className="tab-content">
                        <Form.Group id="registrationForm" className="form-group">
                            <Form.Group className="col-xs-6" style={{ width: "60%" }}>
                                <Form.Label><h5>First name</h5></Form.Label>
                                <Form.Control type="text" className="form-control" onChange={handleChange}
                                    name="firstName" id="first_name" defaultValue={user.firstName} />
                            </Form.Group>
                            <Form.Group className="form-group" style={{ width: "60%" }}>
                                <div className="col-xs-6">
                                    <Form.Label><h5>Last name</h5></Form.Label>
                                    <Form.Control type="text" className="form-control" onChange={handleChange}
                                        name="lastName" id="last_name" defaultValue={user.lastName} />
                                </div>
                            </Form.Group>

                            <Form.Group className="form-group" style={{ width: "60%" }}>

                                <div className="col-xs-6">
                                    <Form.Label><h5>Phone</h5></Form.Label>
                                    <Form.Control type="text" className="form-control" onChange={handleChange}
                                        name="phone" id="phone" defaultValue={user.phone} />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group" style={{ width: "60%" }} >

                                <div className="col-xs-6">
                                    <Form.Label><h5>Email</h5></Form.Label>
                                    <Form.Control disabled={true} type="email" className="form-control" onChange={handleChange}
                                        name="email" id="email" defaultValue={user.email} />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group" style={{ width: "60%" }}>

                                <div className="col-xs-6">
                                    <label><h5>Location</h5></label>
                                    <Form.Control type="text" className="form-control" id="location" onChange={handleChange}
                                        name="address" defaultValue={user.address} />
                                </div>
                            </Form.Group>
                            <Form.Group className="form-group" style={{ width: "60%" }}>
                                <div className="col-xs-6">
                                    <label><h5>Date of birth</h5></label>
                                    <Form.Control type="date" onChange={handleChange}
                                        name="dateOfBirth"
                                        value={moment(userUpdateForm.dateOfBirth).format("YYYY-MM-DD")} />
                                </div>
                            </Form.Group>
                            <Form.Group className="" style={{ width: "60%" }}>
                                <Form.Label><h5>Department</h5></Form.Label>
                                <Form.Select aria-label="Default select example"
                                    value={selectedValue}
                                    defaultValue={"Dev back-end"}
                                    onChange={handleChange} name="departmentId"
                                >
                                    <option value={"None"}>None</option>
                                    {
                                        listDepartment.map((option, index) => {
                                            return (<option key={option.name} value={option.id}>{option.name}</option>)
                                        })
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group className="form-group" style={{ width: "50%" }}>
                                <div className="col-xs-12">
                                    <br />
                                    <Button onClick={handleSubmit} type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</Button>
                                    <Button className="btn-secondary ms-3" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</Button>
                                </div>
                            </Form.Group>
                        </Form.Group>
                    </div>
                </div>

            </div>
        </div>
    )
}