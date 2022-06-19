import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TimeKeepingDetail, TimeKeepingForm, Client } from '../../generated/models';
import CheckInOutLogic from './checkin-out-logic';
import { ToastContainer, toast } from 'react-toastify';
import moment from 'moment';
import { useState } from 'react';
import ListCheckin from './list-checkin-out';

function CheckInOutComponent() {
    var { datetimeLocalInput, checkIn, checkOut, checkTime } = CheckInOutLogic();
    let clientService = new Client();

    const [isCheckedIn, setIsCheckedIn] = useState(false);

    const [checkinTime, setCheckinTime] = useState("");

    const [checkoutTime, setCheckoutTime] = useState("");

    const [result, setResult] = useState(new TimeKeepingDetail());

    const handleSubmit = () => {
        if (isCheckedIn == false) {
            var checkinObject = new TimeKeepingForm(
                {
                    checkinTime: moment(datetimeLocalInput),
                    userId: currentUser.userId
                }
            );
            checkIn(checkinObject)
        }

        else {
            var checkoutObject = new TimeKeepingForm(
                {
                    checkinTime: moment(checkinTime),
                    checkoutTime: moment(datetimeLocalInput),
                    userId: currentUser.userId
                }
            );
            checkOut(checkoutObject)
        }
    }

    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    useEffect(() => {
        currentUser = JSON.parse(localStorage.getItem("currentUser"));
        var userId = currentUser.userId;
        clientService.validate(userId)
            .then((res) => {
                setResult({
                    checkinTime: res.checkinTime,
                    checkoutTime: res.checkoutTime,
                    userId: res.userId
                });
            })
            .catch(function (error) {
                if (error.response == "This user didnt checkin today") {

                }
                else if (error.response) {
                    toast.error(error.response);
                }
            });

        if (result.checkinTime) {
            var dateGetFromResult = result.checkinTime;

            var date = dateGetFromResult.getFullYear() + '-' + (checkTime(dateGetFromResult.getMonth() + 1)) + '-'
                + checkTime(dateGetFromResult.getDate());
            var time = checkTime(dateGetFromResult.getHours()) + ":" +
                checkTime(dateGetFromResult.getMinutes()) + ":" +
                checkTime(dateGetFromResult.getSeconds());

            setCheckinTime(date + 'T' + time);
            setIsCheckedIn(true);
        }
        else {
            setCheckinTime(datetimeLocalInput);
        }

        if (result.checkoutTime) {
            var dateGetFromResult = result.checkoutTime;

            var date = dateGetFromResult.getFullYear() + '-' + (checkTime(dateGetFromResult.getMonth() + 1)) + '-'
                + checkTime(dateGetFromResult.getDate());
            var time = checkTime(dateGetFromResult.getHours()) + ":" +
                checkTime(dateGetFromResult.getMinutes()) + ":" +
                checkTime(dateGetFromResult.getSeconds());

            setCheckoutTime(date + 'T' + time);
        }
        else {
            setCheckoutTime(datetimeLocalInput);
        }

    }, [result.userId]);
    return (
        <div className='mt-4'>
            <h3>Today</h3>
            <ToastContainer />
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Checkin</Form.Label>
                    <Form.Control type="datetime-local"
                        defaultValue={checkinTime}
                        readOnly={true} />
                    <Form.Text className="text-muted">
                        Checkin time
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Checkout</Form.Label>
                    <Form.Control type="datetime-local"
                        defaultValue={checkoutTime}
                        readOnly={true} />
                    <Form.Text className="text-muted">
                        Checkout time
                    </Form.Text>
                </Form.Group>
            </Form>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
            <p
                className="position-abs"
                style={{
                    color: "rgba(0, 0, 0, 0.5)",
                    width: "0px",
                    height: "90%",
                    left: "15%",
                    border: "1px solid #8d8989",
                    marginLeft: "35%",
                    top: "5%",
                }}
            ></p>
            <div className='position-abs list-checkin'>
                <ListCheckin userId={currentUser.userId} />
            </div>
        </div>
    )
}
export default CheckInOutComponent;