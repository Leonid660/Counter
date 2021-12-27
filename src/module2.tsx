import React, {ChangeEvent} from "react";
import s from "./App.module.css";



const Module2 = (props:any) => {

    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
        props.setSaveValue(+e.currentTarget.value)
    }
    return (
        <div className={s.logo}>
            <div className={s.logoInput}>
                <div>
                    max value:
                    <input
                        className={s.input}
                        onChange={onChangeMax}
                        type="number"
                    /></div>
                <div>
                    min value:
                    <input
                        onChange={onChangeMin}
                        className={s.input}
                        type="number"
                    /></div>
            </div>
            <div className={s.button}>
                <button
                    className={s.buttonSize}

                >set</button>
            </div>
        </div>
    )
}

export default Module2