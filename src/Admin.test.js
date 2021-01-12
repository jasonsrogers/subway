import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Admin from "./Admin";

test("Renders Admin", async () => {
  render(
    <Provider store={store}>
      <Admin />
    </Provider>
  );
  expect(await screen.findByText("Order Action:")).toBeTruthy();
  expect(await screen.findByText("Reset State")).toBeTruthy();
  expect(await screen.findByText("Last Name")).toBeTruthy();
  expect(await screen.findByText("Is admin")).toBeTruthy();

  expect(screen.getByText("Open Order")).toBeTruthy();
  expect(screen.getByText("Reset State")).toBeTruthy();
});
