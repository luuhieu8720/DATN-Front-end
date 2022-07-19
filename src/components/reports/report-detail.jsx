import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { CommentForm, ReportDetail, ReportFormDto } from "../../generated/models";
import { Client } from "../../generated/models";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReportLogic from "./report-logics";
import { Modal } from "react-bootstrap";
import CommentLogics from "../reports-management/comment-logics";
import CommentThumbnail from "./comment-thumbnail";
import ErrorPage from "../../pages/error-page";

export default function ReportDetailPage() {
    const { comment } = CommentLogics();

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    var clientService = new Client();
    var { updateReport } = ReportLogic();

    const [report, setReport] = useState(new ReportDetail());

    const [reportForm, setReportForm] = useState(new ReportFormDto());

    var id = useParams();

    const handleSubmit = () => {
        console.log(report)
        updateReport(report.id, reportForm);
    }

    const handleChange = (evt) => {
        const value = evt.target.value;

        setReportForm({
            ...reportForm,
            [evt.target.name]: value,
        });
    }

    const handleSubmitComment = () => {
        if (commentForm.content == "" || commentForm.content == null) {
            toast.warning("Comment cannot be null or empty");
        }
        else {
            var today = new Date();

            setCommentForm({ ...commentForm, commentedTime: moment(today) })
            console.log(commentForm);

            comment(commentForm);
        }
    }

    const handleChangeImage = (evt) => {
        const value = evt.target.files[0];

        if (value != null) {
            getBase64(value).then((res) => setReport({
                ...report,
                ["uploadFileLink"]: res,
            }));

            console.log(report);
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [commentForm, setCommentForm] = useState(new CommentForm({
        reportId: id.id,
        userId: currentUser ? currentUser.userId : ""
    }))

    useEffect(() => {
        console.log(report.uploadFileLink)
    }, [report.uploadFileLink])

    useEffect(() => {
        clientService.reportsGET(id.id)
            .then((res) => {
                console.log(res)
                setReport(res);
                setReportForm(res);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error("error.response");
                }
            });
        return report;
    }, [])

    const listComment = report.comments ? report.comments.map((comment) => (
        <div className="mt-2">
            <CommentThumbnail comment={comment} />
        </div>
    )) : (<></>);

    if (!currentUser) return (<ErrorPage />)


    if (!report || !report.user || !report.comments) return (<p>Loading</p>)

    if (currentUser.role != "Admin" && currentUser.role != "Manager" && currentUser.userId != report.userId) return (<ErrorPage />)

    return (
        <div>
            <ToastContainer />
            <section style={{ backgroundColor: "#eee", width: "109%", marginLeft: "-1%", minHeight: "100%" }}>

                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="card" style={{ borderRadius: "15px", marginTop: "-25px" }}>
                            <div className="row">
                                <div className="col-5 ms-5">
                                    <div className="mt-3">
                                        <img src={report.user.avatarUrl ? report.user.avatarUrl : "/images/avatardefault.png"}
                                            className="rounded-circle img-fluid" style={{ width: "100px" }} />
                                    </div>
                                    <h4 className="mb-2">{ report.user ? report.user.firstName + " " + report.user.lastName : ""}</h4>
                                    <p className="text-muted mb-2">
                                        Department:
                                        { report.user.department ? report.user.department.name : " "}</p>
                                    <p className="text-muted mb-2">
                                        Reported date: {moment(report.createdTime).format('DD-MM-YYYY')}</p>
                                    <p className="text-muted mb-2">
                                        Reported time: {moment(report.createdTime.toLocaleString()).format('hh:mm:ss A')}</p>
                                    <p className="text-muted mb-2">Updated time: {report.updatedTime ? moment(report.updatedTime.toLocaleString()).format('DD-MM-YYYY hh:mm:ss A') : ""}</p>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="fw-bold">Report Content</Form.Label>
                                            <Form.Control disabled={!currentUser.userId == report.user.id} as="textarea"
                                                defaultValue={report.content} onChange={handleChange} name="content" rows={8} />
                                        </Form.Group>
                                        <Button variant="primary" className="mb-3" style={{ margin: "auto", display: "block" }}
                                            hidden={currentUser.userId != report.user.id || currentUser.role != "Employee"} onClick={handleSubmit}>
                                            Edit
                                        </Button>
                                        <Button variant="primary mb-3" style={{ margin: "auto", display: "block" }}
                                            hidden={currentUser.role == "Employee"} onClick={handleShow} >
                                            Comment
                                        </Button>
                                    </Form>
                                </div>
                                <div className="col-6">
                                    <Form>
                                        <Form.Group className="mt-5 mb-3" >
                                            <img src={report.uploadFileLink ? report.uploadFileLink : "/images/avatardefault.png"}
                                                className="img-fluid" style={{ margin: "auto", display: "block", width: "400px", height: "300px", borderRadius: "10px" }}
                                            />
                                            <div className="text-center">
<a href={report.uploadFileLink ? report.uploadFileLink : ""}>View image</a>
</div>
                                            <Form.Control style={{ width: "40%", margin: "5px auto" }} type="file" hidden={currentUser.userId != report.user.id || currentUser.role != "Employee"}
                                                className="text-center center-block file-upload mt-2" name="uploadFileLink"
                                                onChange={handleChangeImage} />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        {listComment}
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Comment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="form-group">
                                <Form.Label><h5>Content</h5></Form.Label>
                                <Form.Control as="textarea" className="form-control"
                                    rows={4} onChange={(evt) => {
                                        setCommentForm({ ...commentForm, content: evt.target.value });
                                        console.log(commentForm)
                                    }} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmitComment}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </section>
        </div>
    )
}