import React from 'react';
import {questions} from "./Data/q";

const Result = ({correct, children}) => {
    return (
        <div className="result">
            {children}
            <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
};

export default Result;