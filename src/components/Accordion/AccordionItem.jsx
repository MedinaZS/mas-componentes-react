import { useState } from "react"
import './Accordion.css'

const AccordionItem = ({ elemento }) => {
    const [isActive, setIsActive] = useState(false)


    return (
        <div className="accordion-item mb-2">
            <h2 className="accordion-header border-2 ">
                <button className="accordion-button collapsed bg-primary-subtle" type="button" 
                    onClick={() => setIsActive(!isActive)}>
                    {elemento.title}
                </button>
            </h2>

            <div className={"accordion-collapse collapse " + (isActive ? "show" : "")}>
                <div className="accordion-body row">
                    <p className="col-8">{elemento.body}</p>
                    <img src={elemento.image} className="col-4" />
                </div>
            </div>
        </div>

    )
}

export default AccordionItem