import React from 'react';
import {questions} from "./Data/q";



const Game = ({question, step, onCLickVariant}) => {
    const percentage = Math.round(step / questions.length * 100);

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
};

export default Game;