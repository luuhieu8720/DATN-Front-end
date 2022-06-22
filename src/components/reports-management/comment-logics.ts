import { Client, CommentForm } from "../../generated/models";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

let clientService = new Client();

export default function CommentLogics() {
    const comment = (commentForm: CommentForm) => {
        clientService.commentsPOST(commentForm)
            .then((res) => {
                toast.success("Successfully commented");
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
        comment
    }
}
