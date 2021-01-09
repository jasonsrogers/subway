import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { openNewOrder, closeOrder } from './redux/actions'
import { getOrdersState } from './redux/selectors'

function Admin({ userId }: { userId: string }) {
    const { canOrder } = useSelector(getOrdersState)

    const dispatch = useDispatch()
    const onOpenOrder = () => {
        dispatch(openNewOrder())
    }
    const onCloseOrder = () => {
        dispatch(closeOrder())
    }

    return (
        <>
            {
                canOrder ?
                    <button
                        type="button"
                        onClick={onCloseOrder}
                    >
                        Close Order
                    </button>
                    :
                    <button
                        type="button"
                        onClick={onOpenOrder}
                    >
                        Open Order
                    </button>
            }
        </>
    )
}

export default Admin