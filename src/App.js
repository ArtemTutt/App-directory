import React, { useState } from 'react';
import './App.scss';
import Modal from "./Modal";

function App() {
    // 1) первый способ отображать модальное окно это через условный рендеринг(минус: не получится использовать с анимацией)
    // 2) способ второй заключается в том, что мы используем добавление классов
    const [open, setOpen] = useState(false)

    return (

        //(2)
        <div className="App">
            <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
            <Modal open={open} setOpen={setOpen}>
                <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
                <h3>Привет это я, модальное окно</h3>
            </Modal>
        </div>

        // (1)
        // <div className="App">
        //     <button onClick={() => setOpen(true)} className="open-modal-btn">✨ Открыть окно</button>
        //     {open && <div className="overlay" onClick={() => setOpen(false)}>
        //         <div className="modal">
        //             <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
        //                 <title/>
        //                 <path
        //                     d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
        //             </svg>
        //             <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif"/>
        //         </div>
        //     </div>}
        // </div>
    );
}

export default App;
