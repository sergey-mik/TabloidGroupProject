import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { addCategory } from "../modules/categoryManager";

export default function CategoryAddForm() {
  const navigate = useNavigate();
  const [newCategoryName, setNewCategoryName] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    addCategory({ name: newCategoryName })
      .then(() => navigate("/category/manager"))
      .catch((err) => alert(`An error ocurred: ${err.message}`));
  };
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
              New Category
            </h3>
          </CardTitle>
          <CardBody>

            <Label for="newCategoryName">
              <h5>
                Category Name:
              </h5>
            </Label>
            <br></br>
            <Input
              id="newCategoryName"
              type="textarea"
              onChange={(e) => setNewCategoryName(e.target.value)}
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