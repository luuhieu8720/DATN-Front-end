import { AuthenUser, Client, Department, LoginForm, Role, UserDetail, UserFormUpdate } from "../../generated/models";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from "react";

let currentUser = new AuthenUser();
let clientService = new Client();

export default function ProfileLogic(userId: string) {
    const [user, setUser] = useState(new UserDetail(
        {
        }
    ));
    const getUser = () => {
        clientService.usersGET(userId)
            .then((res) => {
                setUser(new UserDetail({
                    id: res.id,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    dateOfBirth: res.dateOfBirth,
                    email: res.email,
                    username: res.username,
                    phone: res.phone,
                    address: res.address,
                    departmentId: res.departmentId,
                    department: res.department,
                    role: res.role,
                }));
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
        return user;
    }

    const updateUser = (userId: string, userForm: UserFormUpdate) => {
        console.log(userForm)
        clientService.usersPUT(userId, userForm)
            .then(() => {
                toast.success("Profile successfully updated");
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

    return {
        user,
        getUser,
        updateUser
    }
}
