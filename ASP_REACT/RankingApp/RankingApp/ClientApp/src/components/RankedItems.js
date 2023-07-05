import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function RankedItems() {


    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {

        axios.get(`item/${dataType}`)
            .then(res => { res.json() })
            .then(res => { setItems(res) }), []);

    return (
        <main>
            {
                (items != null) ? (items.map((it) => <h3>{it.title}</h3>)) : <h2>Loading....</h2>
            }
        </main>
    )
}