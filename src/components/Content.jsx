import Accordion from './Accordion/Accordion'
import List from './List'
import Card from './cards/Card'

const Content = () => {
    return (
        <div className="container my-3">
            {/* Lista expandible */}
            <List/>

            <hr className="my-5" />

            {/* Card con imagenes y texto */}
            <Card />

            <hr className="my-5" />

            <Accordion/>

        </div>
    )
}

export default Content