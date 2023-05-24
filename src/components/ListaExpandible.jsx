import { useEffect, useState } from "react"
import Item from "./Item"

const ListaExpandible = ({ index, lista, isListaActive, setListaActive }) => {

    const [indexActive, setIndexActive] = useState(null)

    const toggleActive = (indexItem) => {
        // Item activo de un acorddion
        setIndexActive((indexItem == indexActive) ? null : indexItem)
        
        //Setear el arcordion actual clickeado
        // Se controla si existe ya que es un componente que se reutiliza
        setListaActive(index)
    }

    useEffect(() => {
        // Si actualmente el accordion esta falso, cerrar sus hijos
        if (isListaActive == false) {
            setIndexActive(null)
        }

    }, [isListaActive])


    return (
        <div className="accordion my-3" id="accordionExample">
            {lista.map((item, index) => (
                <Item
                    key={index}
                    elemento={item}
                    isActive={(index == indexActive) ? true : false}
                    onClick={() => toggleActive(index)} />
            ))}
        </div>
    )
}

export default ListaExpandible