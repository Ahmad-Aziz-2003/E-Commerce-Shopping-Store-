import React from 'react';
import { useState,useEffect } from 'react';
import './LatestFragrence.css';
import Item from '../Item/Item';

const LatestFragrences = () => {
    const [fragrances, setFragrances] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4002/product/latestfragrences')
            .then((response) => response.json())
            .then((data) => setFragrances(data));
    }, []);

    return (
        <div className='latestF'>
            <h1>FRAGRANCES</h1>
            <p>Discover our latest collection of fragrances for everyone. From floral to fruity, find your perfect scent for any occasion.</p>
            <hr />

            <div className="latestF-item">
                {fragrances.map((fragrance, index) => (
                    <Item
                        key={index}
                        id={fragrance.id}
                        name={fragrance.name}
                        image={fragrance.image}
                        new_price={fragrance.new_price}
                        old_price={fragrance.old_price}
                    />
                ))}
            </div>
        </div>
    );
}

export default LatestFragrences;
