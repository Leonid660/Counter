import React from "react";
import s from "./App.module.css";

 const Module1 = (props:any) => {
    return(
        <div className={s.logo}>
            <h1 className = {(props.value === 5 ? s.red:"") + s.button}>{props.value}</h1>
            <div className={s.button}>
                <button className={s.buttonSize} disabled={props.value === 5} onClick={props.increment}>inc</button>
                <button className={s.buttonSize} onClick={props.decrement}>dec</button>
            </div>
        </div>
    )
}

export default Module1