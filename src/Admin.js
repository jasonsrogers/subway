import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openNewOrder, closeOrder, resetState } from "./redux/actions";
import { getOrdersState } from "./redux/selectors";
import AddUserForm from "./AddUserForm";
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const H3 = styled.h3`
  margin-top: 10px;
`;

const H3Red = styled.h3`
  margin-top: 10px;
  color: red;
`;

/**
 * Display admin functionalities:
 * Open/Close orders
 * Add users
 * Reset state
 */
function Admin() {
  const { canOrder } = useSelector(getOrdersState);

  const dispatch = useDispatch();
  const onOpenOrder = () => {
    dispatch(openNewOrder());
  };
  const onCloseOrder = () => {
    dispatch(closeOrder());
  };
  const onResetState = () => {
    dispatch(resetState());
  };

  return (
    <>
      <H3>Order Action:</H3>
      {canOrder ? (
        <Button type="button" onClick={onCloseOrder}>
          Close Order
        </Button>
      ) : (
        <Button type="button" onClick={onOpenOrder}>
          Open Order
        </Button>
      )}
      <AddUserForm />
      <H3Red>Reset State:</H3Red>
      <Button className="btn btn-danger" type="button" onClick={onResetState}>
        Reset State
      </Button>
    </>
  );
}

export default Admin;
