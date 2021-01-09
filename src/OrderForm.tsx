import React from 'react';
import { Form, Field } from 'react-final-form'
import { RouteComponentProps } from "@reach/router"
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersState } from './redux/selectors'

import { addItemToOrder, openNewOrder, closeOrder } from './redux/actions'
import Styles from './Styles'

function OrderForm(props: RouteComponentProps) {
    const dispatch = useDispatch()
    const { previousOrders, currentOrder } = useSelector(getOrdersState)
    const canOrder = Boolean(currentOrder)
    const onSubmit = async (values: any) => {
        dispatch(addItemToOrder(values))
    }

    

    if (!canOrder) {
        return (<div>No open order, please check with an admin</div>)
    }

    return (
        <Styles>
            --- Orders: {previousOrders.length} ---
            ---
            
            --- Current Order: <pre>{JSON.stringify(currentOrder, undefined, 2)}</pre> ---
            <Form
                onSubmit={onSubmit}
                initialValues={{}}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Type of bread</label>
                            <Field name="bread-type" component="select">
                                <option />
                                <option value="wheat">Wheat Bread</option>
                                <option value="white">White Bread</option>
                                <option value="italian">Italian Herb & Cheese</option>
                                <option value="malted">Malted Rye</option>
                                <option value="wrap">Wrap</option>
                                <option value="gluten">Gluten Free Wrap</option>
                                <option value="multi">Multigrain Wrap</option>
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
                                <option value="0">Spicy italian</option>
                                <option value="1">Rotisserie style chicken</option>
                                <option value="2">Carved turkey</option>
                                <option value="3">Turkey breast</option>
                                <option value="4">Black forest ham</option>
                                <option value="5">Roast beef</option>
                                <option value="6">Veggie delite</option>
                                <option value="7">Chicken & bacon ranch melt</option>
                                <option value="8">Cold cut combo</option>
                                <option value="9">Italian b.m.t.®</option>
                                <option value="10">Steak & cheese</option>
                                <option value="11">Meatball marinara</option>
                            </Field>
                        </div>
                        <div>
                            <label>Toppings</label>
                            <Field name="toppings" component="select" multiple>
                                <option value="bacon">Bacon</option>
                                <option value="double-meat">Double meat</option>
                                <option value="pepperoni">Pepperoni</option>
                                <option value="cheese">Extra cheese</option>
                                <option value="tuna">Tuna</option>
                                <option value="pineapple">Pineapple</option>
                            </Field>
                        </div>
                        <div>
                            <label>Vegetables</label>
                            <Field name="vegetables" component="select" multiple>
                                <option value="lettuce">Lettuce</option>
                                <option value="tomatoes">Tomatoes</option>
                                <option value="cucumber">Cucumbers</option>
                                <option value="green-peppers">Green Peppers</option>
                                <option value="red-onion">Red Onions</option>
                                <option value="spinach">Spinach</option>
                            </Field>
                        </div>
                        <div>
                            <label>Sauces</label>
                            <Field name="sauce" component="select">
                                <option value="0">Mustard</option>
                                <option value="1">Sweet Onion</option>
                                <option value="2">Red Wine Vinegar</option>
                                <option value="3">Full Flavor</option>
                                <option value="4">Light Mayo</option>
                                <option value="5">Chipotle Southwest</option>
                                <option value="6">Ranch</option>
                                <option value="7">SUBWAY® Vinaigrette</option>
                                <option value="8">Mayo</option>
                                <option value="9">Honey Mustard</option>
                                <option value="10">Buffalo</option>
                                <option value="11">Spicy Brown Mustard</option>
                                <option value="12">Creamy Sriracha</option>
                            </Field>
                        </div>
                        <div>
                            <label>Notes</label>
                            <Field name="notes" component="textarea" placeholder="Notes" />
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
        </Styles>
    );
}


export default OrderForm