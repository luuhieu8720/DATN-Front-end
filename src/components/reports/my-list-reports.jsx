import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, ReportFormDto, ReportItem, ReportsFilter } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
import ReportLogic from "./report-logics";

export default function ListReports() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const [listRequests, setListRequests] = useState([]);
    const [isReported, setIsReported] = useState(false);

    const [reportForm, setReportForm] = useState(new ReportFormDto({
        userId: currentUser.userId
    }));

    var { postReport } = ReportLogic();

    const handleChangeImage = (evt) => {
        const value = evt.target.files[0];

        if (value != null) {
            getBase64(value).then((res) => setReportForm({
                ...reportForm,
                ["uploadFileLink"]: res,
            }));
        }
    }

    const handleSubmit = () => {
        postReport(reportForm);
    }

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    const handleChange = (evt) => {
        const value = evt.target.value;

        setReportForm({
            ...reportForm,
            [evt.target.name]: value,
        });
    }

    var numberedItem = 0;
    const Items = ({ currentItems }) => {
        return (
            <div>
                <div className="mt-4" style={{ width: "109%", marginLeft: "-1%" }}>
                    <h3 className="text-center">My reports</h3>
                    <Table striped bordered hover className="mt-4" >
                        <thead >
                            <tr>
                                <th style={{ width: "50px" }}>#</th>
                                <th style={{ width: "150px" }}>Date</th>
                                <th style={{ width: "150px" }}>Created time</th>
                                <th style={{ width: "150px" }}>Updated time</th>
                                <th style={{ width: "150px" }} className="text-center">View</th>
                            </tr>
                        </thead>
                        {
                            currentItems &&
                            currentItems.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{numberedItem++}</td>
                                        <td>{moment(item.createdTime).format('DD-MM-YYYY')}</td>
                                        <td>{moment(item.createdTime).format('hh:mm:ss A')}</td>
                                        <td>{moment(item.updatedTime).format('DD-MM-YYYY hh:mm:ss A')}</td>
                                        <td style={{ textAlign: "center" }}><Button className="btn-primary" >
                                            <Link to={`/report-detail/${item.id}`}
                                                params={{ id: item.id }} style={{ textDecoration: "none", color: "white" }}>View</Link>
                                        </Button></td>
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

    const [reportFilter, setReportFilter] = useState(new ReportsFilter({userId: currentUser.userId}));

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    //modal react bootstrap
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        numberedItem = 0;
        clientService.allPOST(reportFilter)
            .then((res) => {
                setListRequests(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        var today = new Date();

        if (listRequests) {
            listRequests.map((request) => {
                if (request.createdTime) {
                    if (request.createdTime.getDate() == today.getDate()
                        && request.createdTime.getMonth() == today.getMonth()
                        && request.createdTime.getFullYear() == today.getFullYear()) {
                        setIsReported(true);
                    }
                }
            })
        }

        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
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
            <Button disabled={isReported} onClick={handleShow}>{isReported ? "You have reported today" : "Create reports"}</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="form-group">
                            <Form.Label><h5>Content</h5></Form.Label>
                            <Form.Control as="textarea" className="form-control" onChange={handleChange}
                                name="content" rows={5} />
                        </Form.Group>
                        <Form.Group className="mt-2 mb-2" >
                            <Form.Label className="text-center" style={{ margin: "auto" }}>Link your evidence here</Form.Label>
                            <Form.Control style={{ width: "40%", margin: "5px auto" }} type="file"
                                className="text-center center-block file-upload mt-2" name="uploadFileLink"
                                onChange={handleChangeImage} />
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