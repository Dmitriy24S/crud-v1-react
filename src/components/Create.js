import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";

const Create = ({ fetchData }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const postData = () => {
    console.log(firstName);
    console.log(lastName);
    console.log(checkbox);
    axios
      .post("https://6130665a5fc50700175f189a.mockapi.io/mockData", {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => fetchData());
  };

  const handleSubmit = () => {
    postData();
  };

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button color="blue" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default Create;
