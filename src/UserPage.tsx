import react from 'react'
import { RouteComponentProps } from "@reach/router"
import { useSelector } from 'react-redux'
import { getUserById } from './redux/selectors'
import AddUserForm from './AddUserForm'
import OrderForm from './OrderForm'
import Admin from './Admin'

function UserPage(props: RouteComponentProps<{ userId: string }>) {
    const { userId } = props
    const user = useSelector(state => getUserById(state, userId))
    const isAdmin = user?.isAdmin

    if (!userId) {
        return <>Missing userId</>
    }

    return (
        <>
            {/* <AddUserForm /> */}
            This needs to show what the user can do
            <pre>{JSON.stringify(user, undefined, 2)}</pre>
            <OrderForm />
            {
                isAdmin ? <Admin userId={userId} /> : null
            }
        </>
    )
}

export default UserPage