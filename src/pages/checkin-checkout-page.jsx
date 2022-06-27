import CheckInOutComponent from "../components/checkin-checkout/checkin-out";
import ErrorPage from "./error-page";
function CheckinOut() {
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return (<ErrorPage />)
    return (
        <div className="container-fluid">
            <div className="row">
                <main className="col-9">
                    <CheckInOutComponent />
                </main>
            </div>
        </div>
    )
}
export default CheckinOut;