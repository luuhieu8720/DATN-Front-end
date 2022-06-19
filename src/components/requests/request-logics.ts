import { AuthenUser, Client, LoginForm, ReportFormDto, ReportItem } from "../../generated/models";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from "react";

let clientService = new Client();

export default function RequestLogic() {
    const history = useNavigate();

    const [requests, setRequests] = useState([new ReportItem()]);

    const getAllrequests = () => {
        clientService.requestAll()
            .then((res) => {
                setRequests(res);
                setTimeout(() => {
                    history("/");
                }, 3000);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
        return requests;
    }

    const postReport = (reportForm: ReportFormDto) => {
        clientService.requestPOST(reportForm)
            .then(() => {
                toast.success("Submitted report successfully");
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response);
                }
            })
    }

    const updateReport = (id: string, reportForm: ReportFormDto) => {
        clientService.requestPUT(id, reportForm)
            .then(() => {
                toast.success("Updated succesfully");
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response);
                }
            })
    }

    return {
        getAllrequests,
        postReport,
        updateReport
    }
}
