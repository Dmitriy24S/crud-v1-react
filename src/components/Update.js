import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import { useLocation } from "react-router";

const Update = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  const location = useLocation();
  const { id } = location.state ? location.state : "";

  const { firstNameState } = location.state ? location.state : "";
  const { lastNameState } = location.state ? location.state : "";
  const { checkboxState } = location.state ? location.state : "";

  let history = useHistory();

  const updateAPIData = () => {
    axios
      .put(`https://6130665a5fc50700175f189a.mockapi.io/mockData/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => history.push("/crud-v1-react/read"));
  };

  useEffect(() => {
    setFirstName(firstNameState);
    setLastName(lastNameState);
    setCheckbox(checkboxState);
  }, []);

  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckbox(!checkbox)}
          checked={checkbox}
        />
      </Form.Field>
      <Button color="green" type="submit" onClick={updateAPIData}>
        Update
      </Button>
    </Form>
  );
};

export default Update;
