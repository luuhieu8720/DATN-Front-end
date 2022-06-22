import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, WorkingTimeFilter } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Table, Button } from "react-bootstrap";
import moment from "moment";
import { Form } from "react-bootstrap";

export default function ListCheckin(props) {
    var userId = JSON.parse(localStorage.getItem("currentUser")).userId;
    const [listCheckin, setListCheckin] = useState([]);

    const [totalPunished, setTotalPunished] = useState(0);

    const [filterTimeKeeping, setfilterTimeKeeping] = useState(new WorkingTimeFilter({
        dateTime: new Date(),
        userId: userId
    }));

    const [workingTime, setWorkingTime] = useState(0)

    const [filterWorkingTime, setFilterWorkingTime] = useState(new WorkingTimeFilter({
        dateTime: new Date(),
        userId: userId
    }));

    const [dateTime, setDateTime] = useState();

    const handleChange = (evt) => {
        var value = evt.target.value;

        if (evt.target.name == "dateTime") {
            setfilterTimeKeeping({ ...filterTimeKeeping, [dateTime]: moment(value) });
            setFilterWorkingTime({ ...filterWorkingTime, dateTime: moment(value) })
        }

        setfilterTimeKeeping({
            ...filterTimeKeeping,
            [evt.target.name]: value,
        });
    }

    const handleFilter = () => {
        clientService.filter2(filterTimeKeeping)
            .then((res) => {
                setListCheckin(res);
                console.log(res)
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        clientService.filter3(filterWorkingTime)
            .then((res) => {
                if (res.length != 0) {
                    setWorkingTime(res[0].time);
                    setTotalPunished(res[0].punishedTime);
                }
                else {
                    setWorkingTime(0)
                    setTotalPunished(0)
                }
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const Items = ({ currentItems }) => {
        return (
            <div className="mt-4 me-2">
                <h3 className="text-center">Working timesheets</h3>
                <Form className="row">
                    <Form.Group className="mb-3 col-6">
                        <Form.Label>Filter by month</Form.Label>
                        <Form.Control type="date" name="dateTime"
                            onChange={handleChange} value={filterTimeKeeping.dateTime} />

                    </Form.Group>
                    <Button className="col-2" style={{ height: "40px", marginTop: "30px" }}
                        onClick={handleFilter} >Filter</Button>
                </Form>
                <Table striped bordered hover className="mt-4" >
                    <thead >
                        <tr>
                            <th style={{ width: "30px" }}>#</th>
                            <th style={{ width: "200px" }}>Date</th>
                            <th style={{ width: "150px" }}>Checkin time</th>
                            <th style={{ width: "150px" }}>Checkout time</th>
                            <th style={{ width: "150px" }}>Punished</th>
                        </tr>
                    </thead>
                    {
                        currentItems &&
                        currentItems.map((item, index) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{moment(item.checkinTime).format('DD-MM-YYYY')}</td>
                                        <td>{moment(item.checkinTime).format('hh:mm:ss A')}</td>
                                        <td>{item.checkoutTime ? moment(item.checkoutTime).format('hh:mm:ss A') : ""}</td>
                                        <td>{item.punishedTime}</td>
                                    </tr>
                                </tbody>
                            )
                        })}
                </Table>
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
        clientService.filter2(filterTimeKeeping)
            .then((res) => {
                setListCheckin(res);

            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

        clientService.filter3(filterWorkingTime)
            .then((res) => {
                if (res) {
                    setWorkingTime(res[0].time);
                    setTotalPunished(res[0].punishedTime)
                }
                else {
                    setWorkingTime(0)
                    setTotalPunished(0)
                }
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(listCheckin.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(listCheckin.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, listCheckin.length, workingTime]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % listCheckin.length;
        setItemOffset(newOffset);
    };

    return (
        <div>
            <ToastContainer />
            <div>
                <Items currentItems={currentItems} />
            </div>
            <div style={{ marginLeft: "40%" }}>
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

            <p className="">Total working time this month: {workingTime.toFixed(2)} hours</p>
            <p className="">Total punished times this month: {totalPunished} time(s)</p>
        </div>
    );
}