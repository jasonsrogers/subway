import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import OrderDetails from "./OrderDetails";

test("Renders OrderDetails", async () => {
  render(
    <Provider store={store}>
      <OrderDetails />
    </Provider>
  );
  expect(screen.getByText("Order #")).toBeTruthy();
  expect(screen.getByText("No order item yet")).toBeTruthy();
});
