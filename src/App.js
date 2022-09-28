import React, { useState } from 'react';
import './App.scss';




const questions = [
    {
        title: 'React - это ... ?',
        variants: ['библиотека', 'фреймворк', 'приложение'],
        correct: 0,
    },
    {
        title: 'Компонент - это ... ',
        variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
        correct: 1,
    },
    {
        title: 'Что такое JSX?',
        variants: [
            'Это простой HTML',
            'Это функция',
            'Это тот же HTML, но с возможностью выполнять JS-код',
        ],
        correct: 2,
    },
];

function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

function Game({question, onCLickVariant, step}) {

    const percentage = Math.round(step/ questions.length * 100);

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) => <li onClick={() => onCLickVariant(index)} key={index}>{text}</li>)
                }
            </ul>
        </>
    );
}

function App() {

    const [step, setStep] = useState(0); // для получения вопроса
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
            {step !== questions.length ? <Game step={step} question={question} onCLickVariant={onCLickVariant} /> : <Result correct={correct}/>}
            {/*{step === 2 && <Result/>}*/}
        </div>
    );
}

export default App;