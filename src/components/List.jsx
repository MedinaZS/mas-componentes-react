// import React from 'react'

import { useState } from "react"
import ListaExpandible from "./ListaExpandible"

const List = () => {
    const data = [
        [
            { title: "Holdback", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
            { title: "Financial Assurance", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
            { title: "Liability Ringfencing", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
            { title: "ARO Creditor Rights", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
        ],
        [
            { title: "Joint and Several Liability", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
            { title: "Colorado", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
            { title: "Joint and Several Liability", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
            { title: "ARO Moral Hazard", body: " Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
        ]
    ]


    const [listaActive, setListaActive] = useState(null)

    return (

        <div className="row row-cols-2">
            {data.map((data, index) => (
                <ListaExpandible key={index} index={index} lista={data} isListaActive={(index == listaActive) ? true : false} setListaActive={setListaActive} />
            ))}
        </div>


    )
}

export default List