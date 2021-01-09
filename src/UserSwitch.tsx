import React from 'react';
import { useSelector } from 'react-redux'
import { getUserList } from './redux/selectors'
import { Link } from "@reach/router"

function UserList() {

    const users = useSelector(getUserList)
    return (
        <nav>
            {
                users.map(
                    (user: any) => (
                        <Link to={"/" + user.id}>{user.firstName} {user.lastName} {user.isAdmin ? 'Admin' : 'Employee'}</Link>
                    )
                )

            }
        </nav>
    )
}

export default UserList