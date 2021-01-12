import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNavbar from "./AppNavbar";

test("Renders AppNavbar", async () => {
  render(
    <Provider store={store}>
      <AppNavbar />
    </Provider>
  );
  expect(await screen.getByText("Subway")).toBeTruthy();
  expect(await screen.getByText("Home")).toBeTruthy();
  expect(await screen.getByText("Order")).toBeTruthy();
});
