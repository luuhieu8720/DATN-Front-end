import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, FormRequestConfirm, FormRequestDetail, RequestsFilter } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Table, Button, Modal, Form } from "react-bootstrap";
import moment from "moment";
import RequestLogic from "../requests/request-logics";
import ErrorPage from "../../pages/error-page";

export default function RequestsList() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [dateTime, setDateTime] = useState();
    const [currentItem, setCurrentItem] = useState(new FormRequestDetail());
    var { confirm } = RequestLogic();
    const [listRequests, setListRequests] = useState([]);

    const [confirmRequestId, setConfirmRequestId] = useState();

    const [show, setShow] = useState(false);

    const handleReject = () => {
        confirm(confirmRequestId, new FormRequestConfirm({ statusId: 3 }));
        setShow(false);
    }

    const handleApprove = () => {
        confirm(confirmRequestId, new FormRequestConfirm({ statusId: 2 }));
        setShow(false);
    }

    const handleClose = () => setShow(false);

    const [departments, setDepartments] = useState([])

    const [requestType, setRequestType] = useState([])

    const [status, setStatus] = useState([])

    const [selectedValue, setSelectedValue] = useState()

    const [selectedTypeValue, setSelectedTypeValue] = useState()

    const [selectedStatusValue, setSelectedStatusValue] = useState()

    const handleChangeFilter = (evt) => {
        var value = evt.target.value;

        if (evt.target.name == "dateTime") {
            setFilterRequest({ ...filterRequest, dateTime: moment(value.toLocaleString()).format("YYYY-MM-DD") })
        }
        else if (evt.target.name == "departmentId") {
            setSelectedValue(value);
            if (value == "None") {
                setFilterRequest({ ...filterRequest, departmentId: "" })
            }
            else {
                setFilterRequest({ ...filterRequest, departmentId: value })
            }
        }
        else if (evt.target.name == "typeId") {
            setSelectedTypeValue(value);
            if (value == "None") {
                setFilterRequest({ ...filterRequest, typeId: "" })
            }
            else {
                setFilterRequest({ ...filterRequest, typeId: value })
            }
        }
        else if (evt.target.name == "formStatusId") {
            setSelectedStatusValue(value);
            if (value == "None") {
                setFilterRequest({ ...filterRequest, formStatusId: "" })
            }
            else {
                setFilterRequest({ ...filterRequest, formStatusId: value })
            }
        }

        setDateTime(moment(filterRequest.dateTime).format("YYYY-MM-DD"));
    }

    const handleFilter = () => {
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
        dateTime: new Date(),
    }));

    const Items = ({ currentItems }) => {
        return (
            <div>
                <div className="mt-4" style={{ width: "109%", marginLeft: "-1%" }}>
                    <h3 className="text-center">User requests list</h3>
                    <Form className="row ms-3">
                        <Form.Group className="mb-3 col-3" style={{ width: "200px" }}>
                            <Form.Label>Filter by month</Form.Label>
                            <Form.Control value={moment(filterRequest.dateTime).format("YYYY-MM-DD")} type="date" name="dateTime"
                                onChange={handleChangeFilter} />

                        </Form.Group>
                        <Form.Group className="mb-3 col-3 ms-3">
                            <Form.Label className="ms-1">By department</Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={handleChangeFilter} name="departmentId" value={selectedValue}>
                                <option value={"None"}>None</option>
                                {
                                    departments.map((option, index) => {
                                        return (<option key={option.name} value={option.id}>{option.name}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-3 ms-3" style={{ width: "200px" }}>
                            <Form.Label className="ms-1">By type</Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={handleChangeFilter} name="typeId" value={selectedTypeValue}>
                                <option value={"None"}>None</option>
                                {
                                    requestType.map((option, index) => {
                                        return (<option key={option.typeName} value={option.id}>{option.typeName}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-3 ms-3" style={{ width: "200px" }}>
                            <Form.Label className="ms-1">By status</Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={handleChangeFilter} name="formStatusId" value={selectedStatusValue}>
                                <option value={"None"}>None</option>
                                {
                                    status.map((option, index) => {
                                        return (<option key={option.status} value={option.id}>{option.status}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Button className="col-1" style={{ height: "35px", marginTop: "34px" }}
                            onClick={handleFilter} >Filter</Button>
                    </Form>
                    <Table striped bordered hover className="mt-4" >
                        <thead >
                            <tr>
                                <th style={{ width: "50px" }}>#</th>
                                <th style={{ width: "250px" }}>Content</th>
                                <th style={{ width: "250px" }}>User</th>
                                <th style={{ width: "150px" }}>Request type</th>
                                <th style={{ width: "150px" }}>Date off</th>
                                <th style={{ width: "100px" }}>Status</th>
                                <th style={{ width: "100px", textAlign: "center" }}>Detail</th>
                            </tr>
                        </thead>
                        {
                            currentItems &&
                            currentItems.map((item, index) => {

                                return (
                                    <tbody>
                                        <Modal data={item} show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Request detail</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Group className="form-group mb-1">
                                                        <Form.Label><h5>Content</h5></Form.Label>
                                                        <Form.Control as="textarea" className="form-control" disabled={true}
                                                            name="content" rows={2} value={currentItem.content} />
                                                    </Form.Group>
                                                    <Form.Group className="form-group mb-2">
                                                        <Form.Label><h5>Reason</h5></Form.Label>
                                                        <Form.Control as="textarea" className="form-control" disabled={true}
                                                            name="reason" rows={2} value={currentItem.reason} />
                                                    </Form.Group>
                                                    <Form.Group className="form-group row mb-2">
                                                        <div className="col-6">
                                                            <Form.Label><h5>Request type</h5></Form.Label>
                                                            <Form.Control type="text" className="form-control" disabled={true}
                                                                name="status" value={currentItem.requestType ? currentItem.requestType.typeName : ""} />
                                                        </div>
                                                        <div className="col-6">
                                                            <Form.Label><h5>Status</h5></Form.Label>
                                                            <Form.Control type="text" className="form-control" disabled={true}
                                                                name="status" value={currentItem.formStatus ? currentItem.formStatus.status : ""} />
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group className="form-group row">
                                                        <div className="col-6">
                                                            <Form.Label><h5>Requested day</h5></Form.Label>
                                                            <Form.Control type="text" className="form-control" disabled={true}
                                                                name="status" value={moment(currentItem.submittedTime).format('DD-MM-YYYY')} />
                                                        </div>
                                                        <div className="col-6">
                                                            <Form.Label><h5>Date off</h5></Form.Label>
                                                            <Form.Control type="text" className="form-control" disabled={true}
                                                                name="status" value={moment(currentItem.requestDate).format('DD-MM-YYYY')} />
                                                        </div>
                                                    </Form.Group>
                                                    <p hidden={currentItem.formStatus ? (currentItem.formStatus.status == "Pending") : false}>This request has been {currentItem.formStatus ? (currentItem.formStatus.status) : ""}</p>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>

                                                <Button variant="secondary" hidden={currentItem.formStatus ? (currentItem.formStatus.status != "Pending") : false} onClick={handleReject}>
                                                    Reject
                                                </Button>
                                                <Button variant="primary" hidden={currentItem.formStatus ? (currentItem.formStatus.status != "Pending") : false} onClick={handleApprove}>
                                                    Approve
                                                </Button>

                                            </Modal.Footer>
                                        </Modal>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.content}</td>
                                            <td>{item.user.username}</td>
                                            <td>{item.requestType.typeName}</td>
                                            <td>{moment(item.requestDate).format('DD-MM-YYYY')}</td>
                                            <td>{item.formStatus.status}</td>
                                            <td style={{ textAlign: "center" }}>
                                                <Button className="btn-primary"
                                                    onClick={() => {
                                                        setShow(true);
                                                        setConfirmRequestId(item.id);
                                                        setCurrentItem(item)
                                                    }} >
                                                    View
                                                </Button>
                                            </td>
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

    const itemsPerPage = 4;
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
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

        clientService.departmentsAll()
            .then((res) => {
                setDepartments(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        clientService.requesttypeAll()
            .then((res) => {
                setRequestType(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        clientService.formstatusesAll()
            .then((res) => {
                setStatus(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }, [itemOffset, itemsPerPage, listRequests.length, filterRequest.departmentId,
        departments.length, filterRequest.departmentId, filterRequest.typeId, filterRequest.formStatusId]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % listRequests.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    if (!currentUser || currentUser.role != "Admin") return (<ErrorPage />)
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

        </div>
    );
}