import { toast, ToastContainer } from "react-toastify";
import { confirm } from "react-confirm-box";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Client } from "../../generated/models";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function UserThumbnail(props) {
	const user = props.user;
	console.log(user)

	var clientService = new Client();

	const options = {
		labels: {
			confirmable: "Confirm",
			cancellable: "Cancel"
		}
	}

	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = () => {
		clientService.usersDELETE(user.id)
			.then(() => {
				toast.success("Deleted successfully");
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			})
			.catch((error) => {
				if (error.response) {
					toast.error(error.response)
				}
			})
		}

	return (
		<div className="" style={{ marginTop: "-50px", marginLeft: "20%" }}>
			<ToastContainer />
			<tr className="candidates-list" >
				<td className="title col-9">
					<div className="thumb col-4" style={{}}>
						<Image className="img-fluid rounded" src={user.avatarUrl ? user.avatarUrl : "/images/avatardefault.png"} alt="" />
					</div>
					<div className="candidate-list-details col-5" style={{ marginTop: "15px" }}>
						<div className="candidate-list-info">
							<div className="candidate-list-title">
								<h5 className="mb-0"><Link to={`/users/profile/${user.id}`}>{user.username}</Link></h5>
							</div>
							<div>
								<ul className="list-unstyled">
									<span style={{ whiteSpace: "nowrap" }}><li><i className="fas fa-filter pr-1"></i>{user.department ? user.department.name : ""}</li></span>
								</ul>
								<ul className="list-unstyled">
									<span style={{ whiteSpace: "nowrap" }}><li><i className="fas fa-map-marker-alt pr-1"></i>{user.address}</li></span>
								</ul>
							</div>
						</div>
					</div>
				</td>
				<td className="col-3">
					<ul className="list-unstyled mb-0 d-flex justify-content-end ms-6" >
						<li><Link to={`/users/profile/${user.id}`} className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></Link></li>
						<li><i onClick={handleShow} className="far fa-trash-alt text-danger" data-original-title="Delete"></i></li>
					</ul>
				</td>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Deleting user {user.username}</Modal.Title>
					</Modal.Header>
					<Modal.Body>Are you sure?</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							No
						</Button>
						<Button variant="primary" onClick={handleSubmit}>
							Yes
						</Button>
					</Modal.Footer>
				</Modal>
			</tr>
		</div>
	);
}
export default UserThumbnail;