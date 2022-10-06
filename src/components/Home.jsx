import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Collection from "../Collection";
import axios from "axios";
import '../index.scss';

const cats = [
    { "name": "Все" },
    { "name": "Море" },
    { "name": "Горы" },
    { "name": "Архитектура" },
    { "name": "Города" }
]


const Home = () => {

    const [catID, setCatID] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [collection, setCollection] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const [page, setPage] = useState(1)

    useEffect(() => {
        setIsLoading(true)

        const category = catID ? `category=${catID}` : '';
        const pageParam = `page=${page}`

        axios.get(`https://633dadfaf2b0e623dc79626b.mockapi.io/photo_collection?page=${page}&limit=3&${category}`)
            .then(data => {
                console.log(data.data)
                setCollection(data.data)
            })
            .catch(err => {
                console.warn(err)
                console.log('Ошибка на стороне сервера')
            }).finally(() => setIsLoading(false))
    }, [catID, page])




    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {
                        cats.map((item, index) => (
                            <li onClick={() => setCatID(index)} className={catID === index ? 'active' : ''} key={index}>{item.name}</li>
                        ))
                    }
                </ul>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input" placeholder="Поиск по названию" />
            </div>
            <div className="content">
                {
                    collection.length === 0 ? <h1 className='col_end'>Коллекции закончились(</h1> : (
                        isLoading ? <h2>Идет загрузка...</h2> : (
                            collection.filter(item => {
                                return item.name.toLowerCase().includes(searchValue.toLowerCase())
                            }).map((item, index) => (
                                <Link style={{ textDecoration: 'none' }} to='/photo'>
                                    <Collection
                                        key={index}
                                        name={item.name}
                                        images={item.photos}
                                    />
                                </Link>
                            ))
                        )
                    )
                }
            </div>
            <ul className="pagination">
                {
                    [...Array(5)].map((item, index) => (
                        <li className={page === index + 1 ? 'active' : ''} onClick={() => setPage(index + 1)}>{index + 1}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Home;