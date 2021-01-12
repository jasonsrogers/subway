import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import OrderPage from "./OrderPage";

test("Renders OrderPage", async () => {
  render(
    <Provider store={store}>
      <OrderPage />
    </Provider>
  );
  expect(screen.getByText("Missing userId")).toBeTruthy();
});
