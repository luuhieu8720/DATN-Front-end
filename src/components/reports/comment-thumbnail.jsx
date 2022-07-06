import moment from "moment"
import { Card } from "react-bootstrap"

export default function CommentThumbnail(props) {
    var comment = props.comment
    return (
        <div className="" style={{ width: "50%" }} >
            <Card body>
                <Card.Subtitle style={{ whiteSpace:"nowrap", display: "inline" }}>{ comment.commentedUser ? comment.commentedUser.firstName + " " + comment.commentedUser.lastName : ""}</Card.Subtitle>
                <p style={{ fontSize: "12px", display: "inline", marginLeft:"20px" }}>{moment(comment.commentedTime).format("YYYY-MM-DD hh:mm:ss A")}</p>
                <Card.Text>{comment.content}</Card.Text>
            </Card>
        </div>
    )
}