import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTags } from "../../modules/tagManager";
import Tag from "./Tag";
import { Button, Col } from "reactstrap";

export default function TagManager() {
    const navigate = useNavigate();
    const [tags, setTags] = useState([])

    const handleClick = () => {

        navigate("/tag/add")
    }

    useEffect(() => {
        getAllTags().then(setTags);
    }, []);

    return (
        <div>
            <Button onClick={handleClick}>Create a tag</Button>
            <Col className="col-3">
                {tags.map((tag) => (
                    <Tag key={tag.id} tag={tag} />
                ))}
            </Col>
        </div>
    );
}