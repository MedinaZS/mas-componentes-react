// import React from 'react'

import CardBody from "./CardBody"
import CardImage from "./CardImage"

const Card = () => {

    const data = {
        url: "https://carbontracker.org/wp-content/uploads/2015/10/fossil-fuel-energy-pros-and-cons-289x216.jpg",
        title: "It's Closing Time",
        body: "Billion Dollar Orphans estimate that plugging 2.6 million documented onshore wells in the U.S. alone Will cost $280 billion, This estimate excludes costs toplug an additional estimated 12 million undocumented onshore wells.",
        date: "4 ago 2022",
        links: [
            { title: "Read Report >>>", url: "#" },
            { title: "Download Report >>>", url: "#" }
        ]
    }


    return (
        <div className='card col-md-5 col-lg-3'>
            <CardImage image={data.url} />
            <CardBody title={data.title} body={data.body} date={data.date} links={data.links}/>
            
        </div>
    )
}

export default Card