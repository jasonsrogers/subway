import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import PreviousOrders from "./PreviousOrders";

test("Renders PreviousOrders", async () => {
  render(
    <Provider store={store}>
      <PreviousOrders orders={[]} canOrder />
    </Provider>
  );
  expect(screen.getByText("Previous Orders:")).toBeTruthy();
  expect(screen.getByText("No previous orders")).toBeTruthy();
});
test("Renders PreviousOrders with order", async () => {
  render(
    <Provider store={store}>
      <PreviousOrders
        orders={[
          {
            breadType: "white",
            id: 1610466396740,
            size: "short",
            taste: "ham",
            toppings: ["cheese"],
            userId: "1",
            vegetables: ["green-pepper"],
          },
        ]}
        canOrder
      />
    </Provider>
  );
  expect(screen.getByText("Previous Orders:")).toBeTruthy();
  expect(screen.getByText("Bread: White Bread")).toBeTruthy();
  expect(screen.getByText("Size: Short (15cm)")).toBeTruthy();
  expect(screen.getByText("Taste: Black forest ham")).toBeTruthy();
  expect(screen.getByText("Toppings: Extra cheese")).toBeTruthy();
  expect(screen.getByText("Vegetables: Green Pepper")).toBeTruthy();
  expect(screen.getByText("Order again")).toBeTruthy();
});
