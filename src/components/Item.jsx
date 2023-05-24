const Item = ({ elemento, isActive, onClick }) => {

    return (
        <div className="accordion-item border-0">
            <h2 className="accordion-header border-2 border-bottom ">
                <button className="accordion-button collapsed" type="button" aria-expanded="false"
                    onClick={onClick}>
                    {elemento.title}
                </button>
            </h2>

            <div className={"accordion-collapse collapse " + (isActive ? "show" : "")}>
                <div className="accordion-body">
                    {elemento.body}
                </div>
            </div>
        </div>

    )
}

export default Item