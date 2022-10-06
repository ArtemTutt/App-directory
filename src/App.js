import React, {useEffect, useRef, useState} from 'react';
import './index.scss';
import Collection from "./Collection";
import axios from "axios";
import {Link, Route, Routes} from "react-router-dom";
import Photo from "./Photo";
import Home from "./components/Home";




function App() {


    return (
        <>
            <Routes>
                <Route path='/photo' element={<Photo />}/>
                <Route path='/' element={<Home />}/>
             </Routes>
        </>

    );
}

export default App;