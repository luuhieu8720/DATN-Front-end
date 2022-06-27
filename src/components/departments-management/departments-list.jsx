import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, DepartmentForm, DepartmentItem, RequestsFilter } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Table, Button, Modal, Form } from "react-bootstrap";
import moment from "moment";
import ErrorPage from "../../pages/error-page";

export default function DepartmentsList() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const [departments, setDepartments] = useState([])

    const [departmentForm, setDepartmentForm] = useState()

    const handleChange = (evt) => {
        const value = evt.target.value;

        setDepartmentForm({ ...departmentForm, [evt.target.name]: value })
    }

    const handleCreate = () => {
        clientService.departmentsPOST(departmentForm)
            .then(() => {
                toast.success("New department created successfully")
                setTimeout(() => {
                    window.location.reload()
                }, 1000);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const Items = ({ currentItems }) => {
        return (
            <div>
                <div className="mt-4" style={{ width: "70%", marginLeft: "20%" }}>
                    <h3 className="text-center">Departments list</h3>
                    <Table striped bordered hover className="mt-4" >
                        <thead >
                            <tr>
                                <th style={{ width: "50px" }}>#</th>
                                <th style={{ width: "250px" }}>Deparment name</th>
                                <th style={{ width: "250px" }}>Manager</th>
                            </tr>
                        </thead>
                        {
                            currentItems &&
                            currentItems.map((item, index) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.manager ? `${item.manager.firstName} ${item.manager.lastName}` : "Not have manager yet"}</td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </Table>
                </div>
            </div>
        );
    }

    let clientService = new Client();

    const itemsPerPage = 7;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        clientService.departmentsAll()
            .then((res) => {
                setDepartments(res);
                console.log(res)
                console.log(departments)
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(departments.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(departments.length / itemsPerPage));

    }, [itemOffset, itemsPerPage, departments.length]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % departments.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    if (!currentUser || (currentUser ? currentUser.role != "Admin" : false)) return (<ErrorPage />)
    return (
        <div>
            <ToastContainer />
            <div>
                <Items currentItems={currentItems} />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="form-group mb-2">
                            <Form.Label>Department name (*)</Form.Label>
                            <Form.Control type="text" className="form-control"
                                name="name" onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCreate}>
                        Save
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div style={{ marginLeft: "50%" }}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={8}
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
            <Button style={{ marginBottom: "10px", marginLeft: "20%" }} onClick={() => { setShow(true) }}>Create<i className="fa fa-plus ms-2"></i></Button>

        </div>
    );
}