import { useNavigate } from "react-router";
import { Button, Card, Row } from "reactstrap";

export default function Tag({ tag }) {
    const navigate = useNavigate();

    const sendToDeletePage = (event) => {
        event.preventDefault();
        navigate(`/tag/delete/${tag.id}`)
    }

    return (
        <Row>
            <Card>
                <p>{tag.name}</p>
                <Button onClick={sendToDeletePage}>Delete</Button>
            </Card>
        </Row>
    );
}