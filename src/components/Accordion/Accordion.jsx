import AccordionItem from './AccordionItem'

const Accordion = () => {
    const data = [
        { title: "Title 1", image: "https://i.ytimg.com/vi/gG2bqgt_6po/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA938RDliNdK71jNuJt8okpr_x9uw", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
        { title: "Title 2", image: "https://i.ytimg.com/vi/gG2bqgt_6po/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA938RDliNdK71jNuJt8okpr_x9uw", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
        { title: "Title 3", image: "https://i.ytimg.com/vi/gG2bqgt_6po/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA938RDliNdK71jNuJt8okpr_x9uw", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
        { title: "Title 4", image: "https://i.ytimg.com/vi/gG2bqgt_6po/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA938RDliNdK71jNuJt8okpr_x9uw", body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Aut assumenda porro rem corporis, fugiat harum nobis architecto non animi delectus.Neque reprehenderit excepturi veniam fugiat laudantium quo commodi molestiae incidunt?" },
    ]


    return (
        <div className="accordion my-3" id="accordionExample">
            {data.map((item, index) =>
                <AccordionItem key={index} elemento={item} />
            )}
        </div>
    )
}

export default Accordion