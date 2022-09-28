import React, { useState } from 'react';
import Game from "./Game";
import './App.scss';
import {questions} from "./Data/q";
import Result from "./Result";




// function Result({correct}) {
//
// }


function App() {

    const [step, setStep] = useState(0); // для получения вопроса, index нашего вопроса
    const [correct, setCorrect] = useState(0); // для получени правильного ответа
    const  question = questions[step];

    const onCLickVariant = (index) => {
        console.log(step, index)
        setStep(step + 1)

        if(index === question.correct) {
            setCorrect(correct + 1);
        }
    }


    return (
        <div className="App">
            {step !== questions.length ? <Game step={step} question={question} onCLickVariant={onCLickVariant} /> :
                (<Result correct={correct}>
                    <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
                </Result>)
            }
            {/*{step === 2 && <Result/>}*/}
        </div>
    );
}

export default App;