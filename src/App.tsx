import React, {useState} from 'react';
import s from './App.module.css';
import Module1 from "./module1";
import Module2 from "./module2";

const App = () => {
    const [maxValue, setMaxValue] = useState<number>(0)
    const [minValue, setMinValue] = useState<number>(0)
    const [saveValue, setSaveValue] = useState("")
    const increment = () => {
        setMinValue(minValue + 1)
    }


    if(minValue >= maxValue){

    }

    return (
        <div className={s.App}>
            <Module2
                setSaveValue={setSaveValue}
                setMaxValue={setMaxValue}
                setMinValue={setMinValue}
                />
            <Module1
                saveValue={saveValue}
                setMinValue={setMinValue}
                maxValue={maxValue}
                minValue={minValue}
                increment={increment}
            />
        </div>
    );
}

export default App;
