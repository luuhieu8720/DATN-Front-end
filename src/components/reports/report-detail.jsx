import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { ReportDetail } from "../../generated/models";
import { Client } from "../../generated/models";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReportLogic from "./report-logics";

export default function ReportDetailPage() {

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

    var id = useParams();

    console.log(id)

    const handleSubmit = () => {
        console.log(report.uploadFileLink);
        updateReport(report.id, report);
    }

    const handleChange = (evt) => {
        const value = evt.target.value;

        setReport({
            ...report,
            [evt.target.name]: value,
        });
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

    useEffect(() => {
        console.log(report.uploadFileLink)
    }, [report.uploadFileLink])

    useEffect(() => {
        clientService.reportsGET(id.id)
            .then((res) => {
                setReport(res);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error("error.response");
                }
            });
        return report;
    }, [])

    if (!report || !report.user) return (<p>Loading</p>)
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
                                    <h4 className="mb-2">{report.user.firstName + " " + report.user.lastName}</h4>
                                    <p className="text-muted mb-2">
                                        Department:
                                        {report.user.department ? report.user.department.name : " "}</p>
                                    <p className="text-muted mb-2">
                                        Reported date: {moment(report.createdTime).format('DD-MM-YYYY')}</p>
                                    <p className="text-muted mb-2">
                                        Reported time: {moment(report.createdTime.toLocaleString()).format('hh:mm:ss A')}</p>
                                    <p className="text-muted mb-2">Updated time: {moment(report.createdTime.toLocaleString()).format('DD-MM-YYYY hh:mm:ss A')}</p>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className="fw-bold">Report Content</Form.Label>
                                            <Form.Control disabled={!currentUser.userId == report.user.id} as="textarea"
                                                defaultValue={report.content} onChange={handleChange} name="content" rows={8} />
                                        </Form.Group>
                                        <Button variant="primary" className="mb-3" style={{ margin: "auto", display: "block" }}
                                            hidden={!currentUser.userId == report.user.id} onClick={handleSubmit}>
                                            Edit
                                        </Button>
                                        <Button variant="primary mb-3" style={{ margin: "auto", display: "block" }}
                                            hidden={currentUser.role == "Employee"} >
                                            Comment
                                        </Button>
                                    </Form>
                                </div>
                                <div className="col-6">
                                    <Form>
                                        <Form.Group className="mt-5 mb-3" >
                                            <img src={report.uploadFileLink ? report.uploadFileLink : "/images/avatardefault.png"}
                                                className="img-fluid" style={{ margin: "auto", display: "block", width: "400px", borderRadius: "10px" }}
                                            />
                                            <Form.Control style={{ width: "40%", margin: "5px auto" }} type="file"
                                                className="text-center center-block file-upload mt-2" name="uploadFileLink"
                                                onChange={handleChangeImage} />
                                        </Form.Group>
                                    </Form>
                                    {/* <h4 className="mb-2">{report.user.firstName + " " + report.user.lastName}</h4>
                                <p className="text-muted mb-4">
                                    Department:
                                    {report.user.department ? report.user.department.name : " "}</p>
                                <p className="text-muted mb-4">
                                    Reported date: {moment(report.createdTime).format('DD-MM-YYYY')}</p>
                                <p className="text-muted mb-4">
                                    Reported time: {moment(report.createdTime.toLocaleString()).format('hh:mm:ss A')}</p>
                                <Button hidden={(currentUser.role != "Manager")} className="btn btn-primary btn-rounded btn-lg">
                                    Comment
                                </Button> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}