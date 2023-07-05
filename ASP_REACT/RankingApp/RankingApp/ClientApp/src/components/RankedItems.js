import React, { useEffect, useState } from 'react'
import MovieImageArr from './MovieImageArr.js'


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
            <div className="items-not-ranked">
                {
                    (items.length > 0) ? items.map((it) =>
                        //                              checking from the array with the images with find 
                        <div className="unranked-cell">
                            < img key={`item-${it.id}`} src={MovieImageArr.find(im => im.id === it.id)?.image} />
                        </div>
                    ) : <h2>Loading...</h2>
                }
            </div>
        </main >
    )
}