import SideBar from "../components/home/sidebar";
import { Outlet } from "react-router-dom";

function Homepage() {
    return (
        <div className="row">
            <div className="col-2 bg-dark min-height-100percent" style={{ width: "max-content" }}>
                <SideBar />
            </div>
            <div className="col-9">
                <Outlet />
            </div>
        </div>
    )
}
export default Homepage;