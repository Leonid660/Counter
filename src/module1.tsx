import React from "react";
import s from "./App.module.css";

 const Module1 = (props:any) => {
     const resetValue = () => {
         props.setMinValue(props.saveValue)
     }
    return(
        <div className={s.logo}>
            <div className={s.button}>
                <h1 className = {(props.minValue === props.maxValue ? s.red:"")}>{props.minValue}</h1>
            </div>
            <div className={s.button}>
                <button
                    className={s.buttonSize}
                    disabled={props.minValue === props.maxValue}
                    onClick={props.increment}>inc</button>
                <button
                    onClick = {resetValue}
                    className={s.buttonSize}
                    >reset</button>
            </div>
        </div>
    )
}

export default Module1