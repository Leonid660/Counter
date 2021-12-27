import React, {useState} from 'react';
import s from './App.module.css';
import Module1 from "./module1";
import Module2 from "./module2";

const App = () => {
    const [value, setValue] = useState(0)

    const increment = () => {
        setValue(value + 1)
    }
    const decrement = () => {
        setValue(value - 1)
    }

    return (
        <div className={s.App}>

            <Module2 />
            <Module1
                value={value}
                increment={increment}
                decrement={decrement}
            />

        </div>
    );
}

export default App;
