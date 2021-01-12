import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AddUserForm from "./AddUserForm";

test("Renders Add User Form", async () => {
  render(
    <Provider store={store}>
      <AddUserForm />
    </Provider>
  );
  expect(await screen.findByText("Add user form:")).toBeTruthy();
  expect(await screen.findByText("First Name")).toBeTruthy();
  expect(await screen.findByText("Last Name")).toBeTruthy();
  expect(await screen.findByText("Is admin")).toBeTruthy();
  const button = screen.getByText("Submit");
  expect(button).toBeDisabled();
  const fNameInput = screen.getByPlaceholderText("First Name");
  expect(fNameInput).toBeTruthy();
  fireEvent.change(fNameInput, { target: { value: "fName" } });
  const lNameInput = screen.getByPlaceholderText("Last Name");
  expect(fNameInput.value).toBe("fName");
  expect(lNameInput).toBeTruthy();
  fireEvent.change(lNameInput, { target: { value: "lName" } });
  expect(lNameInput.value).toBe("lName");
  expect(button).toBeEnabled();
});
