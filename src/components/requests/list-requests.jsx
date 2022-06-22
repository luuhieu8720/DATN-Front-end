import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, FormRequestForm, RequestsFilter } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Table, Button, Modal, Form } from "react-bootstrap";
import moment from "moment";
import RequestLogic from "./request-logics";

export default function ListRequests() {
    const [dateTime, setDateTime] = useState();
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var { checkTime, postRequest } = RequestLogic();
    var userId = JSON.parse(localStorage.getItem("currentUser")).userId;
    const [listRequests, setListRequests] = useState([]);

    const [createForm, setCreateForm] = useState(new FormRequestForm({
        statusId: 1,
        userId: currentUser.userId
    }));

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = () => {
        postRequest(createForm);
    }

    const handleChangeCreate = (evt) => {
        var value = evt.target.value;

        if (evt.target.name == "requestDate") {
            setCreateForm({ ...createForm, requestDate: moment(value) })
        }

        else if (evt.target.name == "requestTypeId") {
            setCreateForm({
                ...createForm,
                [evt.target.name]: Number.parseInt(value),
            });
        }

        else {
            setCreateForm({
                ...createForm,
                [evt.target.name]: value,
            });
        }
    }

    const handleChangeFilter = (evt) => {
        var value = evt.target.value;

        setFilterRequest({ ...filterRequest, dateTime: moment(value) });

        setDateTime(moment(filterRequest.dateTime).format("YYYY-MM-DD"));
    }

    const handleFilter = (evt) => {
        clientService.user(filterRequest)
            .then((res) => {
                setListRequests(res);
                console.log(listRequests)
                
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const [filterRequest, setFilterRequest] = useState(new RequestsFilter({
        userId: userId,
        dateTime: new Date(),
    }));

    var numberedItem = 0;
    const Items = ({ currentItems }) => {
        return (
            <div>
                <div className="mt-4" style={{ width: "109%", marginLeft: "-1%" }}>
                    <h3 className="text-center">My request list</h3>
                    <Form className="row ms-3">
                        <Form.Group className="mb-3 col-3">
                            <Form.Label>Filter by month</Form.Label>
                            <Form.Control value={dateTime} type="date" name="dateTime"
                                onChange={handleChangeFilter} />

                        </Form.Group>
                        <Button className="col-1" style={{ height: "35px", marginTop: "34px" }}
                            onClick={handleFilter} >Filter</Button>
                    </Form>
                    <Table striped bordered hover className="mt-4" >
                        <thead >
                            <tr>
                                <th style={{ width: "50px" }}>#</th>
                                <th style={{ width: "250px" }}>Content</th>
                                <th style={{ width: "250px" }}>Reason</th>
                                <th style={{ width: "150px" }}>Submitted time</th>
                                <th style={{ width: "150px" }}>Request type</th>
                                <th style={{ width: "150px" }}>Request date</th>
                                <th style={{ width: "100px" }}>Status</th>
                            </tr>
                        </thead>
                        {
                            currentItems &&
                            currentItems.map((item, index) => (
                                <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.content}</td>
                                        <td>{item.reason}</td>
                                        <td>{moment(item.submittedTime).format('DD-MM-YYYY')}</td>
                                        <td>{item.requestType.typeName}</td>
                                        <td>{moment(item.requestDate).format('DD-MM-YYYY')}</td>
                                        <td>{item.formStatus.status}</td>
                                    </tr>
                                </tbody>

                            ))}
                    </Table>
                </div>
            </div>
        );
    }

    let clientService = new Client();

    const itemsPerPage = 4;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        numberedItem = 0;
        clientService.user(filterRequest)
            .then((res) => {
                setListRequests(res);
                console.log(listRequests)
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(listRequests.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(listRequests.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, listRequests.length]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % listRequests.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    return (
        <div>
            <ToastContainer />
            <div>
                <Items currentItems={currentItems} />
            </div>
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
            <Button onClick={handleShow}>Send request</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Label><h5>Content</h5></Form.Label>
                            <Form.Control as="textarea" className="form-control" onChange={handleChangeCreate}
                                name="content" rows={4} />
                        </Form.Group>
                        <Form.Group className="form-group">
                            <Form.Label><h5>Reason</h5></Form.Label>
                            <Form.Control as="textarea" className="form-control" onChange={handleChangeCreate}
                                name="reason" rows={3} />
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className="mt-3"
                            style={{ width: "40%" }} name="requestTypeId" onChange={handleChangeCreate} >
                            <option>Select request type</option>
                            <option value="1">Off full day</option>
                            <option value="2">Off morning</option>
                            <option value="3">Off afternoon</option>
                            <option value="4">Off by hour</option>
                            <option value="5">Lately checkin-out</option>
                        </Form.Select>
                        <Form.Group className="mt-2 col-3">
                            <Form.Label><h5>Date off</h5></Form.Label>
                            <Form.Control value={moment(createForm.requestDate).format("YYYY-MM-DD")} type="date"
                                onChange={handleChangeCreate} name="requestDate" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}