import ButtonCard from "./ButtonCard"

const CardBody = ({ title, body, date, links }) => {



    return (
        <div className='card-body'>
            <h2>{title}</h2>
            <p>{body}</p>

            <div className="d-flex justify-content-between mb-3">
                <ButtonCard title={"STATE"}></ButtonCard>
                <ButtonCard title={"COST"}></ButtonCard>
                <ButtonCard title={"ORPHAN"}></ButtonCard>
            </div>

            <p className="small text-body-secondary">{date}</p>

            {links.map((item, index) => (
                <p key={index}><a href={item.url} className="text-danger text-uppercase">{item.title}</a></p>
            ))}

        </div>
    )
}

export default CardBody