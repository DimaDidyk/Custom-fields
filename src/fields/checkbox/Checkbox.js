import React from "react";
import classes from './Checkbox.module.scss';

const Checkbox = props => {
    return(
        <div>
            <label htmlFor={props.checkboxId}>Checkbox</label>
            <div className={classes.checkboxWrap}>
                <input
                    type="checkbox"
                    id={props.checkboxId}
                    name={props.name}
                    className={classes.checkbox}
                />
                <div className={classes.mark}></div>
            </div>
        </div>
    );
}

export default Checkbox;