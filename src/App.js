import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import {Block} from "./Block";
import axios from "axios";

//https://cdn.cur.su/api/latest.json


function App() {

    // const [rates, setRates] = useState({});
    const ratesRef = useRef({})

    const [formCurrency, setFromCurrency] = useState('RUB')
    const [toCurrency, setToCurrency] = useState('USD');

    const [fromPrice, setFromPrice] = useState(0)
    const [toPrice, setToPrice] = useState(1)

    useEffect(() => {
        axios.get('https://cdn.cur.su/api/latest.json')
            .then(data => {
                // setRates(data.data.rates);
                ratesRef.current = data.data.rates
                onChangeToPrice(1)
            }).catch(err => {
                console.error(err)
                alert('Произошла ошибка с сервером')
            })
    }, [])

    const onChangeFromPrice = (value) => {
        const price = value / ratesRef.current[formCurrency];
        const result = price * ratesRef.current[toCurrency];
        setToPrice(result.toFixed(3));
        setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[formCurrency] / ratesRef.current[toCurrency]) * value;
        setFromPrice(result.toFixed(3));
        setToPrice(value);
    }

    useEffect(() => {         // отслеживание за переключением валют
        onChangeFromPrice(fromPrice);
    }, [formCurrency]);

    useEffect(() => {         // отслеживание за переключением валют
        onChangeToPrice(toPrice);
    }, [toCurrency]);


    return (
        <div className="App">
            <Block value={fromPrice} currency={formCurrency} onChangeCurrency={setFromCurrency} onChangeValue={onChangeFromPrice}/>
            <div>
                <span>{`<- ->`}</span>
            </div>
            <Block value={toPrice} currency={toCurrency} onChangeCurrency={setToCurrency} onChangeValue={onChangeToPrice}/>
        </div>
    );
}

export default App;