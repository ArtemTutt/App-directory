import React, {useEffect, useState} from 'react';
import './index.scss';
import {Block} from "./Block";



function App() {
    return (
        <div className="App">
            <Block value={0} currency="RUB" onChangeCurrency={(cur) => console.log(cur)} />
            <Block value={0} currency="USD" />
        </div>
    );
}

export default App;