import { AuthenUser, Client, LoginForm, UpdatePasswordForm } from "../../generated/models";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.min.css';

let clientService = new Client();

export default function PasswordLogic() {
    const history = useNavigate();
    const updatePassword = (updatePasswordForm: UpdatePasswordForm) => {
        clientService.update(updatePasswordForm)
            .then(() => {
                toast.success("Success");
                setTimeout(() => {
                    history("/password");
                }, 3000);
            })
            .catch(function (error) {
                if (error.response) {
                    toast.error(error.response);
                }
            });
    }

    return {
        updatePassword
    }
}
