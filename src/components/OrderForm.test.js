import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import OrderForm from "./OrderForm";

test("Renders OrderForm", async () => {
  render(
    <Provider store={store}>
      <OrderForm />
    </Provider>
  );
  expect(
    screen.getByText("No open order, please check with an admin")
  ).toBeTruthy();
});
