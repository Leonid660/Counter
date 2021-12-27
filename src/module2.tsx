import React, {useState} from "react";
import s from "./App.module.css";

const Module2 = () => {
    const [maxValue, setMaxValue] = useState(0)
    const [minValue, setMinValue] = useState(0)


    return (
        <div className={s.logo}>
            <div className={s.logoInput}>
                <div>
                max value:<input
                    className={s.input}
                    type="number"
                    /></div>
                <div>
                min value:<input
                    className={s.input}
                    type="number"
                    /></div>
            </div>
            <div className={s.button}>
                <button className={s.buttonSize}>set</button>
            </div>
        </div>
    )
}

export default Module2