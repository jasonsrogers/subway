import React from 'react';
import { useDispatch } from 'react-redux'
import { Form, Field } from 'react-final-form'
import { RouteComponentProps } from "@reach/router"

import { addUser } from './redux/actions'

import Styles from './Styles'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


function AddUserForm(props: RouteComponentProps) {
    const dispatch = useDispatch()
    const onSubmit = async (values: any) => {
        await sleep(300)
        window.alert(JSON.stringify(values, undefined, 2))
        dispatch(addUser(values))
    }
    return (
        <Styles>
            <Form
                onSubmit={onSubmit}
                initialValues={{ isAdmin: false }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>First Name</label>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <label>Last Name</label>
                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                                placeholder="Last Name"
                            />
                        </div>
                        <div>
                            <label>Is admin</label>
                            <Field name="isAdmin" component="input" type="checkbox" />
                        </div>
                        <div className="buttons">
                            <button type="submit" disabled={submitting || pristine}>
                                Submit</button>
                            <button
                                type="button"
                                onClick={form.reset}
                                disabled={submitting || pristine}
                            >
                                Reset
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, undefined, 2)}</pre>
                    </form>
                )}
            />
        </Styles >
    );
}


export default AddUserForm