import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl'

const controls =  [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: {props.currentPrice} </p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                more={() => {props.ingredientAdd(ctrl.type)}}
                less={() => {props.ingredientRemove(ctrl.type)}}
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            disabled={!props.purchaseable}
            className={classes.OrderButton}
            onClick={props.OrderNowClicked} >ORDER NOW</button>
    </div>
);

export default buildControls;