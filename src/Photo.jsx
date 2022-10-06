import React, {useEffect, useState} from 'react';
import axios from "axios";

const Photo = () => {

    const [collection, setCollection] = useState([])

    useEffect(() => {
        axios.get(`https://633dadfaf2b0e623dc79626b.mockapi.io/photo_collection`)
            .then(data => {
                console.log(data.data)
                setCollection(data.data)
            })
            .catch(err => {
                console.warn(err)
                console.log('Ошибка на стороне сервера')
            })
    }, [])

    return (
        <div className="collection">
            {/*<img className="collection__big" src={images[0]} alt="Item" />*/}
            {/*<img className="collection__mini" src={images[1]} alt="Item" />*/}
            {/*<img className="collection__mini" src={images[2]} alt="Item" />*/}
            {/*<img className="collection__mini" src={images[3]} alt="Item" />*/}
            {/*<h4 className='collection__text'>{name}</h4>*/}
            {
                collection.map((item, index) => (
                    <img className="collection__big" src={item.photos} alt="" />
                ))
            }
        </div>
    );
};

export default Photo;