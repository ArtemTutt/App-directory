import React, {useEffect, useState} from 'react';
import './index.scss';
import {Block} from "./Block";
import axios from "axios";

//https://cdn.cur.su/api/latest.json


function App() {

    const [rates, setRates] = useState({});
    const [formCurrency, setFromCurrency] = useState('RUB')
    const [toCurrency, setToCurrency] = useState('USD');

    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(0)

    useEffect(() => {
        axios.get('https://cdn.cur.su/api/latest.json')
            .then(data => {
                console.log(data.data.rates);
                setRates(data.data.rates)
            }).catch(err => {
                console.error(err)
                alert('Произошла ошибка с сервером')
            })
    }, [])

    const onChangeFromPrice = (value) => {
        const price = value / rates[formCurrency];
        const result = price * rates[toCurrency];
        setToPrice(result);
        setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
        const result = (rates[formCurrency] / rates[toCurrency]) * value;
        setFromPrice(result);
        setToPrice(value);
    }

    const onChangeFromCurrency = (cur) => {
        setFromCurrency(cur);
        onChangeFromPrice(fromPrice)
    }

    return (
        <div className="App">
            <Block value={fromPrice} currency={formCurrency} onChangeCurrency={onChangeFromCurrency} onChangeValue={onChangeFromPrice}/>
            <div>
                <span>{`<- ->`}</span>
            </div>
            <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
        </div>
    );
}

export default App;