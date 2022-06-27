import { Client, ReportFormDto, ReportItem, ReportDetail, CommentItem } from "../../generated/models";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from "react";

let clientService = new Client();

export default function ReportLogic() {
    const history = useNavigate();

    const [report, setReport] = useState(new ReportDetail({
    }));

    const [reports, setReports] = useState([new ReportItem()]);

    const getAllReports = () => {
        clientService.reportsAll()
            .then((res) => {
                setReports(res);
                setTimeout(() => {
                    history("/");
                }, 3000);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
        return reports;
    }

    const postReport = (reportForm: ReportFormDto) => {
        clientService.reportsPOST(reportForm)
            .then(() => {
                toast.success("Submitted report successfully");
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response);
                }
            })
    }

    const getReportById = (id: string) => {
        clientService.reportsGET(id)
            .then((res) => {
                setReport(res);
                console.log(res);
                setTimeout(() => {
                    console.log(report);
                }, 3000);
                
            })
            .catch((error) => {
                if (error.response) {
                    toast.error("error.response");
                }
            });
        return report;
    }

    const updateReport = (id: string, reportForm: ReportFormDto) => {
        clientService.reportsPUT(id, reportForm)
            .then(() => {
                toast.success("Updated succesfully");
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response);
                }
            })
    }

    return {
        getAllReports,
        postReport,
        updateReport,
        getReportById
    }
}
