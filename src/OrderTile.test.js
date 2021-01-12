import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import OrderTile from "./OrderTile";

test("Renders OrderTile", async () => {
  render(
    <Provider store={store}>
      <OrderTile order={{ toppings: [], vegetables: [] }} />
    </Provider>
  );
  expect(screen.getByText("Order:")).toBeTruthy();
  expect(screen.getByText("Size: Long (30cm)")).toBeTruthy();
  expect(screen.getByText("Toppings:")).toBeTruthy();
  expect(screen.getByText("Vegetables:")).toBeTruthy();
});
