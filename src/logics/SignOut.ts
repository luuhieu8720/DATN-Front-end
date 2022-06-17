import { useNavigate } from "react-router-dom";

export default function SignOut() {
    const history = useNavigate();

    const signOut = () => {
        localStorage.clear();
        sessionStorage.clear();
        setTimeout(() => {
            history("/");
        }, 3000);
    }
    return {
        signOut
    }
}