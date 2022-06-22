import { Client, FormRequestConfirm, FormRequestForm, FormRequestItem, ReportItem } from "../../generated/models";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from "react";

let clientService = new Client();

export default function RequestLogic() {
    const history = useNavigate();

    const [requests, setRequests] = useState([new FormRequestItem()]);

    var checkTime = (time: number) => {
        if (time < 10)
            return '0' + time.toString();
        return time;
    }

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

    const confirm = (id: string, formRequestConfirm: FormRequestConfirm) => {
        clientService.comfirm(id, formRequestConfirm)
            .then(() => {
                formRequestConfirm.statusId == 3 ? toast.success("This request is rejected successfully")
                :toast.success("This request is approved successfully");
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

    const postRequest = (formRequestForm: FormRequestForm) => {
        clientService.requestPOST(formRequestForm)
            .then(() => {
                toast.success("Submitted request successfully");
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

    const updateRequest = (id: string, requestForm: FormRequestForm) => {
        clientService.requestPUT(id, requestForm)
            .then(() => {
                toast.success("Updated succesfully");
                setTimeout(() => {
                    window.location.reload()
                }, 2000);
            })
            .catch((error) => {
                if (error.response) {
                    toast.error(error.response);
                }
            })
    }

    return {
        getAllrequests,
        postRequest,
        updateRequest,
        checkTime,
        confirm
    }
}
