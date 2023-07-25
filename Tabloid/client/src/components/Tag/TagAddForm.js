import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { addTag } from "../../modules/tagManager";

export default function TagAddForm() {
    const [tagName, setTagName] = useState("")
    const navigate = useNavigate();

    const submitForm = (event) => {
        event.preventDefault();
        addTag({ name: tagName })
            .then(() => navigate("/tag/manager"))
    }

    return (
        <Card style={{
            display: 'block',
            width: 700,
            padding: 30
        }}>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <CardTitle>
                        <h3>
                            New Tag
                        </h3>
                    </CardTitle>
                    <CardBody>

                        <Label for="TagName">
                            <h5>
                                Tag Name:
                            </h5>
                        </Label>
                        <br></br>
                        <Input
                            id="TagName"
                            type="textarea"
                            onChange={(event) => setTagName(event.target.value)}
                        />
                    </CardBody>
                </FormGroup>
                <FormGroup>
                    <Button>Save</Button>
                </FormGroup>
            </Form>
        </Card >
    )
}