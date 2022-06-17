import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client, ReportItem } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import moment from "moment";

export default function ListReports() {
    const [listRequests, setListRequests] = useState([]);
    var numberedItem = 0;
    const Items = ({ currentItems }) => {
        return (
            <div>
                <div className="mt-4" style={{ width: "109%", marginLeft: "-1%" }}>
                    <h3 className="text-center">My request list</h3>
                    <Table striped bordered hover className="mt-4" >
                        <thead >
                            <tr>
                                <th style={{ width: "50px" }}>#</th>
                                <th style={{ width: "200px" }}>Created time</th>
                                <th style={{ width: "200px" }}>Updated time</th>
                                <th style={{ width: "200px" }} className="text-center">View</th>
                            </tr>
                        </thead>
                        {
                            currentItems &&
                            currentItems.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{numberedItem++}</td>
                                        <td>{moment(item.createdTime).format('DD-MM-YYYY')}</td>
                                        <td>{moment(item.updatedTime).format('DD-MM-YYYY')}</td>
                                        <td style={{alignItems:"center"}}><Button className="btn-primary" >View</Button></td>
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
        clientService.reportsAll()
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
            <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
}