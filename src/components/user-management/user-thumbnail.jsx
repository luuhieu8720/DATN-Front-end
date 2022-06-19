import { Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

function UserThumbnail(props) {
	const user = props.user;
	console.log(user)

	return (
		<Card className="card-tutor-info" style={{ borderRadius:"20px" }}>
			<ToastContainer />
			<Card.Body>
				<Image
					src={
						user.avatarUrl == "" || user.avatarUrl == null
							? "images/avatardefault.png"
							: user.avatar
					}
					className="position-abs"
					style={{ alignItems: "center", margin: "auto", display:"block" }}
					width="120"
					height="120"
					alt="image"
					aria-expanded="false"
					roundedCircle
				></Image>
				<Card.Text>{user.name}</Card.Text>
				<Card.Text style={{ marginTop: "-5%" }}>
					<span className="fw-bold">Email:</span> {user.email}
				</Card.Text>
				<Card.Text style={{ marginTop: "-3%" }}>
					<span className="fw-bold">Address:</span> {user.address}
				</Card.Text>
				<Card.Text style={{ marginTop: "-3%" }}>
					<span className="fw-bold">Name:</span> {user.firstName + " "  +user.lastName}
				</Card.Text>
				<div className="dropdown">
					<i
						className="fa fa-ellipsis-v"
						style={{ marginLeft: "455%", marginTop: '-100%' }}
						type=""
						id="dropdownMenuButton2"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					></i>
					<ul
						className="dropdown-menu dropdown-menu-light"
						aria-labelledby="dropdownMenuButton2"
					>
						{/* <li>
										<Link
											className="dropdown-item"
											to={`/tutor/detail/${tutor.username}`}
											params={{ id: tutor.username }}
										>
											View detail
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/">
											Rate
										</Link>
									</li> */}
					</ul>
				</div>

			</Card.Body>
		</Card>
	);
}
export default UserThumbnail;