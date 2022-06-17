import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/sidebars.css';
import SignOut from '../../logics/SignOut';

function SideBar() {
    var { signOut } = SignOut();

    return (
        <div className='max-content'>
            <h2 className="my-3 text-white">Suruga</h2>
            <div className="pt-3">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Button variant="btn btn-sidebar rounded text-start" className='dark'>
                            <Link to="/checkin-checkout" style={{ textDecoration: 'none' }}>Checkin - Checkout</Link>
                        </Button>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-sidebar rounded text-start" className='dark'>
                            <Link to="/list-requests" style={{ textDecoration: 'none' }}>My requests</Link>
                        </Button>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-toggle rounded collapsed text-start" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Profile
                        </Button>
                        <div className="collapse" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link to="/profile" className="link-dark rounded">Infomation</Link></li>
                                <li><Link to="/password" className="link-dark rounded">Password</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-toggle rounded collapsed text-start" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                            Dashboard
                        </Button>
                        <div className="collapse" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link to="/" className="link-dark rounded">Overview</Link></li>
                                <li><Link to="/" className="link-dark rounded">Weekly</Link></li>
                                <li><Link to="/" className="link-dark rounded">Monthly</Link></li>
                                <li><Link to="/" className="link-dark rounded">Annually</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <Button variant="btn btn-sidebar rounded text-start" className='dark'>
                            <Link to="/list-reports" style={{ textDecoration: 'none' }}>Reports</Link>
                        </Button>
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