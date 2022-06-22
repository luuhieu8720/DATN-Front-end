import { Client } from "../../generated/models";
import { useState, useEffect } from "react";
import UserThumbnail from "./user-thumbnail";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { Table } from "react-bootstrap";
import './css/user-list.css';
import ReactPaginate from 'react-paginate';

function UserListManager() {
    const [userList, setUserList] = useState([]);
    let clientServices = new Client();

    const itemsPerPage = 4;
    const [currentItems, setCurrentItems] = useState(null);
    const [departmentId, setDepartmentId] = useState();
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    var history = useNavigate();
    useEffect(
        () => {
            var currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if (currentUser.role != "Admin" && currentUser.role != "Manager") {
                alert("You do not have access to this page");
                setTimeout(() => {
                    history("/");
                }, 1000);
            }

            clientServices.usersGET(currentUser.userId)
            .then((res) => {
                setDepartmentId(res.departmentId);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });

            console.log(departmentId)

            clientServices.manager(departmentId)
                .then((res) => {
                    setUserList(res);
                    console.log(res)
                }).catch(function (error) {
                    if (error.response) {
                        toast.error(error.response);
                    }
                });

            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(userList.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(userList.length / itemsPerPage));

        }, [itemOffset, itemsPerPage, userList.length, departmentId])

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

    return (
        <div className="">
            <ToastContainer />
            <h3 className="text-center mt-3" style={{ marginBottom: "60px" }}>User management</h3>
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
        </div>
    );
}
export default UserListManager;
