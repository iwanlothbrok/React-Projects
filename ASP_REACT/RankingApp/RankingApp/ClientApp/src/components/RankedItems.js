import React, { useEffect, useState } from 'react'

export default function RankedItems() {


    const [items, setItems] = useState([]);
    const dataType = 1;

    useEffect(() => {

        fetch(`item/${dataType}`)
            .then((res) => { return res.json(); })
            .then(res => { setItems(res); })
    }, [])

    return (
        <main>
            {
                (items != null) ? (items.map((it) => <h3>{it.title}</h3>)) : <h2>Loading...</h2>
            }
        </main>
    )
}