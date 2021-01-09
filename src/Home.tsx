import React from 'react';
import { RouteComponentProps } from "@reach/router"
import UserSwitch from './UserSwitch'
import { useSelector } from 'react-redux'
import { getOrdersState } from './redux/selectors'
function Home(props: RouteComponentProps) {
    const { previousOrders, currentOrder } = useSelector(getOrdersState)
    return (
        <>
            <h1>Home</h1>
            <h2>Please select who you want to be logged in as</h2>
            <UserSwitch />

            --- Current Order: <pre>{JSON.stringify(currentOrder, undefined, 2)}</pre> ---
            --- Orders: {previousOrders.length} ---
        </>
    )
}

export default Home