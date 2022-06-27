import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, ReportsFilter, WorkingTimeFilter } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { Button, Table } from "react-bootstrap";
import moment from "moment";
import { Link } from "react-router-dom";
import ErrorPage from "../../pages/error-page";

export default function UsersWorkingTime() {
    const [workingTimeList, setWorkingTimeList] = useState([]);

    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleFilter = () => {
        clientService.filter3(workingTimeFilter)
            .then((res) => {
                setWorkingTimeList(res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const [departments, setDepartments] = useState([])

    const [selectedValue, setSelectedValue] = useState()

    const [workingTimeFilter, setWorkingTimeFilter] = useState(new WorkingTimeFilter({
        dateTime: new Date(),
    }));

    const handleChange = (evt) => {
        var value = evt.target.value;

        if (evt.target.name == "dateTime") {
            setWorkingTimeFilter({ ...workingTimeFilter, dateTime: moment(value.toLocaleString()).format("YYYY-MM-DD") })
        }
        else if (evt.target.name == "departmentId") {
            setSelectedValue(value);
            if (value == "None") {
                setWorkingTimeFilter({ ...workingTimeFilter, departmentId: "" })
            }
            else {
                setWorkingTimeFilter({ ...workingTimeFilter, departmentId: value })
            }
        }
        console.log(workingTimeFilter)
    }

    const Items = ({ currentItems }) => {
        return (
            <div>
                <div className="mt-4" style={{ width: "109%", marginLeft: "-1%" }}>
                    <h3 className="text-center">User Working Timesheets</h3>
                    <Form className="row">
                        <Form.Label className="ms-3"><h4>Filter</h4></Form.Label>
                        <Form.Group className="mb-3 col-3 ms-3">
                            <Form.Label className="ms-1">By month</Form.Label>
                            <Form.Control type="date" name="dateTime"
                                onChange={handleChange} value={moment(workingTimeFilter.dateTime).format("YYYY-MM-DD")} />
                        </Form.Group>
                        <Form.Group className="mb-3 col-3 ms-3">
                            <Form.Label className="ms-1">By department</Form.Label>
                            <Form.Select aria-label="Default select example"
                                onChange={handleChange} name="departmentId" value={selectedValue}>
                                <option value={"None"}>None</option>
                                {
                                    departments.map((option, index) => {
                                        return (<option key={option.name} value={option.id}>{option.name}</option>)
                                    })
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-3 ms-3">
                            <Form.Label className="ms-3"></Form.Label>
                            <Button className="" style={{ height: "38px", width: "50%", marginTop: "30px" }}
                                onClick={handleFilter} >Filter</Button>
                        </Form.Group>
                    </Form>
                    <Table striped bordered hover className="mt-4" >
                        <thead >
                            <tr>
                                <th style={{ width: "50px" }}>#</th>
                                <th style={{ width: "150px" }}>User</th>
                                <th style={{ width: "150px" }}>Month</th>
                                <th style={{ width: "150px" }}>Working time</th>
                                <th style={{ width: "150px" }}>Punished time(s)</th>
                                <th style={{ width: "150px" }} className="text-center">View detail timesheet</th>
                            </tr>
                        </thead>
                        {
                            currentItems &&
                            currentItems.map((item, index) => (
                                <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{`${item.user.firstName} ${item.user.lastName}`}</td>
                                        <td>{moment(workingTimeFilter.dateTime).format('YYYY-MM')}</td>
                                        <td>{item.time.toFixed(2)}</td>
                                        <td>{item.punishedTime}</td>
                                        <td style={{ textAlign: "center" }}><Button className="btn-primary" >
                                            <Link to={`/workingtime-tracking/manage/${item.userId}/${workingTimeFilter.dateTime ? moment(workingTimeFilter.dateTime.toLocaleString()).format("YYYY-MM-DD") : ""}`}
                                                params={{ id: item.userId }} style={{ textDecoration: "none", color: "white" }}>View</Link>
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
        clientService.filter3(workingTimeFilter)
            .then((res) => {
                setWorkingTimeList(res);
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
        setCurrentItems(workingTimeList.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(workingTimeList.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, workingTimeList.length, departments.length, workingTimeFilter.departmentId]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % workingTimeList.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    if (!departments || !workingTimeList) return (<p>Loading</p>)

    if (!currentUser || (currentUser ? currentUser.role != "Admin" : false)) return (<ErrorPage />)

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