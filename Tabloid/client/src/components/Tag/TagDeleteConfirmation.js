import { useParams, useNavigate } from "react-router"
import { deleteTag } from "../../modules/tagManager";
import { Card, Button } from "reactstrap";

export default function TagDeleteConfirmation() {
    const { id } = useParams();
    const navigate = useNavigate();


    const confirmDeletion = () => {
        deleteTag(id)
            .then(() => {
                navigate("/tag/manager");
            });
    };

    const denyDeletion = () => {
        navigate("/tag/manager")
    }


    return (
        <Card>
            <p>Are you sure you want to delete this tag?</p>
            <Button onClick={confirmDeletion}>Confirm Deletion</Button>
            <Button onClick={denyDeletion}>Reject Deletion</Button>
        </Card>
    )
}