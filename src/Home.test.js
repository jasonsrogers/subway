import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Home from "./Home";

test("Renders Home", async () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  expect(await screen.getByText("Home")).toBeTruthy();
  expect(await screen.getByText("Previous Order:")).toBeTruthy();
  expect(await screen.getByText("No current order")).toBeTruthy();
});
