import React, { useState } from "react";
import { Form, Field } from "react-final-form";

import { useDispatch, useSelector } from "react-redux";
import { getOrdersState } from "./redux/selectors";
import { getUserById } from "./redux/selectors";
import { addItemToOrder } from "./redux/actions";
import Button from "react-bootstrap/Button";
import OrderTile from "./OrderTile";
// These would normally be calls to db that are loaded into redux and accessed via selectors
import {
  getBreadType,
  getTasteType,
  getToppingsType,
  getSauce,
  getVegetables,
} from "./constants";
import Styles from "./Styles";

/**
 * Form to place sandwich order
 * @param {*} userId
 */
function OrderForm({ userId }) {
  const [editCurrentOrder, setEditCurrentOrder] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => getUserById(state, userId));
  const { currentOrder, canOrder } = useSelector(getOrdersState);

  const onSubmit = async (values) => {
    dispatch(
      addItemToOrder({
        ...values,
        userId: userId,
      })
    );
  };

  const isAdmin = user?.isAdmin;

  if (!canOrder) {
    if (!isAdmin) {
      return <div>No open order, please check with an admin</div>;
    } else {
      return (
        <div>No open order, please go to user admin section to open order</div>
      );
    }
  }

  const userCurrentOrder = currentOrder.items[userId] || {};
  return (
    <>
      {userCurrentOrder && editCurrentOrder ? (
        <>
          <h3>Current Order:</h3>
          <OrderTile order={userCurrentOrder} canOrderAgain={true} />
          <Button onClick={() => setEditCurrentOrder(true)}>Edit order</Button>
        </>
      ) : (
        <>
          <h3>Order form:</h3>
          <Styles>
            <Form
              onSubmit={onSubmit}
              initialValues={userCurrentOrder}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Type of bread</label>
                    <Field name="breadType" component="select">
                      <option />
                      {getBreadType().map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label>Size</label>
                    <div>
                      <label>
                        <Field
                          name="size"
                          component="input"
                          type="radio"
                          value="short"
                        />
                        15 cm
                      </label>
                      <label>
                        <Field
                          name="size"
                          component="input"
                          type="radio"
                          value="long"
                        />
                        30 cm
                      </label>
                    </div>
                  </div>
                  <div>
                    <label>Oven baked</label>
                    <Field name="ovenBaked" component="input" type="checkbox" />
                  </div>
                  <div>
                    <label>Taste</label>
                    <Field name="taste" component="select">
                      <option />
                      {getTasteType().map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label>Toppings</label>
                    <Field name="toppings" component="select" multiple>
                      {getToppingsType().map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label>Vegetables</label>
                    <Field name="vegetables" component="select" multiple>
                      {getVegetables().map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label>Sauces</label>
                    <Field name="sauce" component="select">
                      {getSauce().map((item) => (
                        <option key={item.key} value={item.key}>
                          {item.label}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div>
                    <label>Notes</label>
                    <Field
                      name="notes"
                      component="textarea"
                      placeholder="Notes"
                    />
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
      )}
    </>
  );
}

export default OrderForm;
