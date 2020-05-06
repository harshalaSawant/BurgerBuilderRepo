import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>
                        {igKey}
                    </span> : {props.ingredients[igKey]}
                    </li>
        });
    
    return (
        <Aux>
            <h3>Your Orders</h3>
            <p>Adelicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <strong>Total price: {props.totalPrice}</strong>
            <p>Continue to Checkout</p>
            <Button 
                clicked={props.purchaseContinue}
                btnType="Success">CONTINUE</Button>
            <Button 
                clicked={props.purchaseCanceled}
                btnType="Danger">CANCEL</Button>
        </Aux>
    );
}

export default orderSummary;