import SideBar from "../components/home/sidebar";
import { Outlet } from "react-router-dom";
import { Image } from "react-bootstrap";

function Homepage() {
    return (
        <div className="row">
            <div className="col-2 bg-dark min-height-100percent" style={{ width: "max-content", position: "fixed" }}>
                <SideBar />
            </div>
            <div className="col-9" style={{ marginLeft: "19%" }}>
                <Outlet />
                <Image src="/images/suruga.png"
                    style={{ bottom: "0px", right: "0px", zIndex:"2", position: "fixed" }}
                    width="100px"></Image>
            </div>

        </div>
    )
}
export default Homepage;