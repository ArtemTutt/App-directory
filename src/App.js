import React, {useEffect, useState} from 'react';
import './index.scss';
import {Success} from "./components/Success";
import {Users} from "./components/Users/Users";
import axios from "axios";


// Пользователи: https://reqres.in/api/users

function App() {

    const [users, setUsers] = useState([]);
    const [invites, setInvites] = useState([]); // массив для добавления пользователя
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('') // для поиска по вводу в input

    const [success, setSuccess] = useState(false)

    // useEffect(() => {  // можно переписать на axios
    //     fetch('https://reqres.in/api/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.data)
    //         }).catch(err => {
    //         console.log(err)
    //         alert('Произошла ошибка на стороне сервера')
    //         }).finally(() => setLoading(false))
    //
    // }, []);

    useEffect(() => {  // можно переписать на axios
        axios.get('https://reqres.in/api/users')
            .then(res => {
               setUsers(res.data.data)
            }).catch(err => {
                    console.log(err)
                    alert('Произошла ошибка на стороне сервера')
            })
            .finally(() => setLoading(false))
    }, []);


    const onChangeSearchValue = (e) => {
        setSearchValue(e.target.value);
    };

    const onClickInvite = (id) => {
        if(invites.includes(id)) {
            setInvites(prevState => prevState.filter(_id => _id !== id)) // если id переданный не совпадает c id который есть в массиве, то оставляй, если нет то исключи этого пользователя
        } else {
            setInvites(prevState => [...prevState, id])
        }
    };

    const onClickSuccess = () => {
            setSuccess(true)
    }

    return (
        <div className="App">
            {
                success ? <Success count={invites}/> :
                    (
                        <Users
                            onChangeSearchValue={onChangeSearchValue}
                            searchValue={searchValue}
                            items={users}
                            isLoading={isLoading}
                            invites={invites}
                            onClickInvite={onClickInvite}
                            onClickSuccess={onClickSuccess}
                            success={success}
                        />
                    )
            }

        </div>
    );
}

export default App;
