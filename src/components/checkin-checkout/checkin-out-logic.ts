import 'react-toastify/dist/ReactToastify.min.css';
import { Client, TimeKeepingForm } from '../../generated/models';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

let clientService = new Client();

export default function CheckInOutLogic() {
    const history = useNavigate();
    const [result, setResult] = useState("");

    var checkTime = (time: number) => {
        if (time < 10)
            return '0' + time.toString();
        return time;
    }

    const checkIn = (timeKeepingForm: TimeKeepingForm) => {
        clientService.timekeepingPOST(timeKeepingForm)
            .then((res) => {
                toast.success("Successfully check-in");
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
                return (res);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            })
            .finally(() => {
                return "";
            });
    }

    const checkOut = (timeKeepingForm: TimeKeepingForm) => {
        clientService.timekeepingPUT(timeKeepingForm)
            .then((res) => {
                toast.success("Successfully check-out");
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
            .catch(function (error) {
                console.log("err");
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const getTimeKeepingByUserId = (userId: string) => {
        clientService.timekeepingAll2(userId)
            .then(() => {
                toast.success("Successfully check-out");
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    const validateCheckinToday = (userId: string) => {
        clientService.validate(userId)
            .then((res) => {

            })
            .catch(function (error) {
                if (error.response == "This user didnt checkin today") {

                }
                else if (error.response) {
                    toast.error(error.response);
                }
            });
        return result;
    }

    var today = new Date();
    var date = today.getFullYear() + '-' + (checkTime(today.getMonth() + 1)) + '-'
        + checkTime(today.getDate());
    var time = checkTime(today.getHours()) + ":" +
        checkTime(today.getMinutes()) + ":" +
        checkTime(today.getSeconds());
    var datetimeLocalInput = date + 'T' + time;

    return {
        datetimeLocalInput,
        checkIn,
        checkOut,
        getTimeKeepingByUserId,
        validateCheckinToday,
        checkTime
    }
}
