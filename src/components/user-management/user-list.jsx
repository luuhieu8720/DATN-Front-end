import { Client } from "../../generated/models";
import { useState, useEffect } from "react";
import UserThumbnail from "./user-thumbnail";
import { toast } from "react-toastify";

function UserList() {
    const [userList, setUserList] = useState([]);
    let clientServices = new Client();
    useEffect(
        () => {
            clientServices.usersAll()
                .then((res) => {
                    setUserList(res);
                }).catch(function (error) {
                    if (error.response) {
                        toast.error(error.response);
                    }
                });
        }, [userList.length])

    const listUser = userList.map((user) => (
        <div className="col-12 col-lg-4">
            <UserThumbnail user={user}></UserThumbnail>
        </div>

    ));

    return (
        <div className="row">
            <h3 className="text-center mt-3">User management</h3>
            {listUser}
        </div>
    );
}
export default UserList;
