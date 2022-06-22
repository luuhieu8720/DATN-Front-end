import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, ReportsFilter } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";

export default function UserReportsManager() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const [listReports, setlistReports] = useState([]);

    const handleFilter = () => {
        clientService.allPOST(reportFilter)
            .then((res) => {
                setlistReports(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const [departments, setDepartments] = useState([])

    const [selectedValue, setSelectedValue] = useState()

    const [reportFilter, setReportFilter] = useState(new ReportsFilter({
        departmentId:"00000000-0000-0000-0000-000000000000"
    }));

    const handleChange = (evt) => {
        var value = evt.target.value;

        if (evt.target.name == "dateTime") {
            setReportFilter({ ...reportFilter, dateTime: moment(value) })
        }
        else {
            setReportFilter({ ...reportFilter, [evt.target.name]: value })
            setSelectedValue(value);
        }
        console.log(reportFilter)
    }

    const Items = ({ currentItems }) => {
        return (
            <div>
                <div className="mt-4" style={{ width: "109%", marginLeft: "-1%" }}>
                    <h3 className="text-center">User reports</h3>
                    <Form className="row">
                        <Form.Label className="ms-3"><h4>Filter</h4></Form.Label>
                        <Form.Group className="mb-3 col-3 ms-3">
                            <Form.Label className="ms-1">By month</Form.Label>
                            <Form.Control type="date" name="dateTime"
                                onChange={handleChange} value={moment(reportFilter.dateTime).format("YYYY-MM-DD")} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-3 ms-3">
                            <Form.Label className="ms-3"></Form.Label>
                            <Button className="" style={{ height: "38px", width: "50%", marginTop:"32px" }}
                                onClick={handleFilter} >Filter</Button>
                        </Form.Group>
                    </Form>
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
                            currentItems.map((item, index) => (
                                <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{moment(item.createdTime).format('DD-MM-YYYY')}</td>
                                        <td>{moment(item.createdTime).format('hh:mm:ss A')}</td>
                                        <td>{moment(item.updatedTime).format('DD-MM-YYYY hh:mm:ss A')}</td>
                                        <td style={{ textAlign: "center" }}><Button className="btn-primary" >
                                            <Link to={`/reports/detail/${item.id}`}
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

    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        clientService.usersGET(currentUser.userId)
            .then((res) => {
                setReportFilter(new ReportsFilter({ ...reportFilter,
                    departmentId: res.departmentId
                }))
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        clientService.allPOST(reportFilter)
            .then((res) => {
                setlistReports(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        clientService.departmentsAll()
            .then((res) => {
                setDepartments(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(listReports.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(listReports.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, listReports.length, departments.length, reportFilter.departmentId]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % listReports.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    console.log(departments)
    if (!departments || !listReports) return (<p>Loading</p>)

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