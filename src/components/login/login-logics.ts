import { AuthenUser, Client, LoginForm } from "../../generated/models";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';

let currentUser = new AuthenUser();
let clientService = new Client();

export default function LoginLogic() {
    const history = useNavigate();
    const login = (loginForm: LoginForm) => {
        clientService.authsPOST(loginForm)
            .then((res) => {
                toast.success("Success");
                currentUser = res;
                localStorage.setItem("currentUser", JSON.stringify(res));
                setTimeout(() => {
                    history("/");
                }, 3000);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
        return currentUser
    }

    return {
        login
    }
}
