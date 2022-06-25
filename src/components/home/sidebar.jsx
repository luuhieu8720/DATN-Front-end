import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './css/sidebars.css';
import SignOut from '../../logics/SignOut';

function SideBar() {
    var { signOut } = SignOut();

    var role = JSON.parse(localStorage.getItem("currentUser")).role;

    return (
        <div className='max-content'>
            <div>
                <h2 className="mt-4 ms-3 text-white">Suruga</h2>
            </div>
            <div className="pt-3">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Button variant="btn btn-sidebar rounded text-start" className='dark'>
                            <Link to="/" style={{ textDecoration: 'none' }}>Dashboard</Link>
                        </Button>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-sidebar rounded text-start" className='dark'>
                            <Link to="/checkin-checkout" style={{ textDecoration: 'none' }}>Checkin - Checkout</Link>
                        </Button>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-sidebar rounded text-start" className='dark' hidden={role == "Admin"} >
                            <Link to="/requests/list" style={{ textDecoration: 'none' }}>My requests</Link>
                        </Button>
                    </li>

                    <li className="mb-1" hidden={role != "Employee"}>
                        <Button variant="btn btn-sidebar rounded text-start" className='dark'>
                            <Link to={"/reports/list"} style={{ textDecoration: 'none' }}>Reports</Link>
                        </Button>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-toggle rounded collapsed text-start" data-bs-toggle="collapse" data-bs-target="#manage-collapse" aria-expanded="true">
                            Profile
                        </Button>
                        <div className="collapse" id="manage-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link to="/profile" className="link-dark rounded">Infomation</Link></li>
                                <li><Link to="/password" className="link-dark rounded">Password</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-toggle rounded collapsed text-start" hidden={role == "Employee"} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Manage
                        </Button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li hidden={role != "Admin"}><Link to="/users/manage/admin" className="link-dark rounded">Users</Link></li>
                                <li hidden={role != "Manager"}><Link to="/users/manage/manager" className="link-dark rounded">Users</Link></li>
                                <li hidden={role != "Admin"}><Link to="/reports/manage/admin" className="link-dark rounded">Reports</Link></li>
                                <li hidden={role != "Manager"}><Link to="/reports/manage/manager" className="link-dark rounded">Reports</Link></li>
                                <li hidden={role != "Admin"}><Link to="/requests/manage/admin" className="link-dark rounded">Requests</Link></li>
                                <li hidden={role != "Manager"}><Link to="/requests/manage/manager" className="link-dark rounded">Requests</Link></li>
                                <li hidden={role != "Admin"}><Link to="/departments" className="link-dark rounded">Departments</Link></li>
                                <li hidden={role != "Admin"}><Link to="/workingtime-tracking/manage/admin" className="link-dark rounded">User working time</Link></li>
                                <li hidden={role != "Manager"}><Link to="/workingtime-tracking/manage/manager" className="link-dark rounded">User working time</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <Button variant="btn btn-sidebar rounded text-start" className='dark' onClick={signOut}>
                            Sign out
                        </Button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default SideBar;