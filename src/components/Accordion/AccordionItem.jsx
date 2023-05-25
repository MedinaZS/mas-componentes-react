import { useState } from "react"

const AccordionItem = ({ elemento }) => {
    const [isActive, setIsActive] = useState(false)

    const icon = (isActive) ? 'bi bi-dash' : 'bi bi-plus'


    return (
        <div className="accordion-item mb-2">
            <h2 className="accordion-header border-2 ">
                <button className="accordion-button collapsed bg-primary-subtle accordion-minus-plus" type="button"
                    onClick={() => setIsActive(!isActive)}>
                    <p className=" my-auto d-flex justify-content-between w-100 align-items-center fs-4">
                        {elemento.title}
                        <i className={icon + " text-secondary"}></i>
                    </p>
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