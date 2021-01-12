import React from "react";
import { useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";
import Button from "react-bootstrap/Button";
import { addUser } from "./redux/actions";

import Styles from "./Styles";
import styled from "styled-components";
const H3 = styled.h3`
  margin-top: 10px;
`;

/**
 * Add User form
 * Fill in basic information and push new user to Redux
 */
function AddUserForm() {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    dispatch(addUser(values));
  };
  return (
    <>
      <H3>Add user form:</H3>
      <Styles>
        <Form
          onSubmit={onSubmit}
          initialValues={{ isAdmin: false }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <label>First Name</label>
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label>Last Name</label>
                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <label>Is admin</label>
                <Field name="isAdmin" component="input" type="checkbox" />
              </div>
              <div className="buttons">
                <Button type="submit" disabled={submitting || pristine}>
                  Submit
                </Button>
              </div>
            </form>
          )}
        />
      </Styles>
    </>
  );
}

export default AddUserForm;
