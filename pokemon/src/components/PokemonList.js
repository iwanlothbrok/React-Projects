import React from 'react'

export default function ({ pokemon }) {
    console.log(pokemon.name);
    return (
        <div>
            {/* {pokemon.map(p => (
                <div key={p.name}>{p.name}</div>
            ))} */}
            {pokemon.name}
        </div>
    )
}
