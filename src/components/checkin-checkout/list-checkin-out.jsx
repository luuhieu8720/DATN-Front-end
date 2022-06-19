import { useEffect, useState } from "react";
import ReactPaginate from 'react-paginate';
import { Client } from "../../generated/models";
import { ToastContainer, toast } from "react-toastify";
import { Table } from "react-bootstrap";
import moment from "moment";

export default function ListCheckin(props) {
    var userId = props.userId;
    const [listCheckin, setListCheckin] = useState([]);
    var numberedItem = 0;
    const Items = ({ currentItems }) => {
        return (
            <div className="mt-4">
                <h3 className="text-center">Working timesheets</h3>
                <Table striped bordered hover className="mt-4" >
                    <thead >
                        <tr>
                            <th style={{ width: "40px" }}>#</th>
                            <th style={{ width: "200px" }}>Date</th>
                            <th style={{ width: "200px" }}>Checkin time</th>
                            <th style={{ width: "200px" }}>Checkout time</th>
                        </tr>
                    </thead>
                    {
                        currentItems &&
                        currentItems.map((item) => {
                            return (
                                <tbody>
                                    <tr>
                                        <td>{numberedItem++}</td>
                                        <td>{moment(item.checkinTime).format('DD-MM-YYYY')}</td>
                                        <td>{moment(item.checkinTime).format('hh:mm:ss A')}</td>
                                        <td>{item.checkoutTime ? moment(item.checkoutTime).format('hh:mm:ss A') : ""}</td>
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
        numberedItem = 0;
        clientService.timekeepingAll2(userId)
            .then((res) => {
                setListCheckin(res);
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
    }, [itemOffset, itemsPerPage, listCheckin.length]);

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
            <div style={{marginLeft:"40%"}}>
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
        </div>
    );
}