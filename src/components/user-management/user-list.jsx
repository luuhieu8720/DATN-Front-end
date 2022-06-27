import { Client, Role, UserFormCreate } from "../../generated/models";
import { useState, useEffect } from "react";
import UserThumbnail from "./user-thumbnail";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { Button } from "react-bootstrap";
import './css/user-list.css';
import ReactPaginate from 'react-paginate';
import { Modal, Form } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import ErrorPage from "../../pages/error-page";

function UserList() {
    const [userList, setUserList] = useState([]);
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let clientServices = new Client();

    const itemsPerPage = 4;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    const [createUserForm, setCreateUserForm] = useState(new UserFormCreate({
        role: 1
    }));

    const handleSubmit = () => {
        console.log(createUserForm);
        clientServices.usersPOST(createUserForm)
            .then(() => {
                toast.success("Created successfully");
                window.location.reload();
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const [selectedValue, setSelectedValue] = useState()

    const [departments, setDepartments] = useState([])

    const handleShow = () => setShow(true);

    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);

    const handleChange = (evt) => {
        const value = evt.target.value;
        if (evt.target.name == "dateOfBirth") {
            setCreateUserForm({
                ...createUserForm,
                dateOfBirth: moment(value).format("YYYY-MM-DD"),
            });
        }
        else if (evt.target.name == "departmentId") {
            setSelectedValue(value);
            if (value == "None") {
                setCreateUserForm({ ...createUserForm, departmentId: "" })
            }
            else {
                setCreateUserForm({ ...createUserForm, departmentId: value })
            }
        }
        else {
            setCreateUserForm({
                ...createUserForm,
                [evt.target.name]: value,
            });
        }
    }

    const handleChangeRole = (evt) => {
        const value = evt.target.value;
        setCreateUserForm({ ...createUserForm, role: value })
    }

    var history = useNavigate();
    useEffect(
        () => {
            clientServices.usersAll()
                .then((res) => {
                    setUserList(res);
                }).catch(function (error) {
                    if (error.response) {
                        toast.error(error.response);
                    }
                });

            clientServices.departmentsAll()
                .then((res) => {
                    setDepartments(res);
                })
                .catch(function (error) {
                    if (error.response) {
                        toast.error(error.response);
                    }
                });

            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(userList.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(userList.length / itemsPerPage));

        }, [itemOffset, itemsPerPage, userList.length])

    const listUser = userList.map((user) => (
        <div class="" style={{ margin: "auto", width: "50%" }}>
            <ToastContainer />
        </div>
    ));

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % userList.length;
        setItemOffset(newOffset);
    }

    const Items = ({ currentItems }) => {
        return (
            <div className="" >
                <div className="user-dashboard-info-box shadow-sm">
                    <table className="manage-candidates-top" style={{ width: "100%" }}>
                        {
                            currentItems &&
                            currentItems.map((item) => {
                                return (
                                    <UserThumbnail user={item}></UserThumbnail>
                                )
                            })}
                    </table>
                </div>
            </div>
        )
    }

    if (!currentUser) return (<ErrorPage />)

    if (currentUser.role != "Admin") return (<ErrorPage />)

    return (
        <div className="">
            <ToastContainer />
            <h3 className="text-center mt-3" style={{ marginBottom: "20px" }}>User management</h3>
            <Button style={{ marginBottom: "30px", marginLeft: "80%" }} onClick={handleShow}>Create user<i className="fa fa-plus ms-2"></i></Button>
            <div>
                <Items currentItems={currentItems} />
            </div>

            <div style={{ marginLeft: "50%" }}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={10}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="form-group row mb-2">
                            <div className="col-6">
                                <Form.Label>Firstname (*)</Form.Label>
                                <Form.Control type="text" className="form-control"
                                    name="firstName" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                <Form.Label>Lastname (*)</Form.Label>
                                <Form.Control type="text" className="form-control"
                                    name="lastName" onChange={handleChange} />
                            </div>
                        </Form.Group>
                        <Form.Group className="row">
                            <div className="col-6">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" className="form-control"
                                    name="phone" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" className="form-control"
                                    name="username" onChange={handleChange} />
                            </div>

                        </Form.Group>
                        <Form.Group className="form-group mb-2">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" className="form-control"
                                name="address" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="form-group row mb-2">
                            <div className="col-6">
                                <Form.Label>Email (*)</Form.Label>
                                <Form.Control type="text" className="form-control"
                                    name="email" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                <Form.Label>Password (*)</Form.Label>
                                <Form.Control type="password" className="form-control"
                                    name="password" onChange={handleChange} />
                            </div>
                        </Form.Group>
                        <Form.Group className="form-group row mb-2">
                            <div className="col-6">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control type="date" className="form-control"
                                    name="dateOfBirth" onChange={handleChange} />
                            </div>
                            <div className="col-6">
                                <Form.Label className="ms-1">Choose department</Form.Label>
                                <Form.Select aria-label="Default select example"
                                    onChange={handleChange} name="departmentId" value={selectedValue}>
                                    <option value={"None"}>None</option>
                                    {
                                        departments.map((option, index) => {
                                            return (<option key={option.name} value={option.id}>{option.name}</option>)
                                        })
                                    }
                                </Form.Select>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3" onChange={handleChangeRole}>
                                <Form.Check
                                    inline
                                    label="Employee"
                                    name="role"
                                    type="radio"
                                    value="1"
                                    defaultChecked
                                />
                                <Form.Check
                                    inline
                                    label="Manager"
                                    name="role"
                                    type="radio"
                                    value="2"
                                />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleSubmit}>
                        Save
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default UserList;
