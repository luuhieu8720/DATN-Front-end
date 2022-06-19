import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function SignOut() {
    const history = useNavigate();

    const signOut = () => {
        localStorage.clear();
        sessionStorage.clear();
        toast.success("Signed out successfully");

        setTimeout(() => {
            history("/login");
        }, 3000);
    }
    return {
        signOut
    }
}