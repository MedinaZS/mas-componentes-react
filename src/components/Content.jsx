import Accordion from './Accordion/Accordion'
import Footer from './HeaderFooter/Footer'
import Banner from './HeaderFooter/Banner'
import ButtonList from './HeaderFooter/ButtonList'
import Navbar from './HeaderFooter/Navbar'
import List from './Expandable_List/List'
import Card from './cards/Card'

const Content = () => {
    const navlinks = [
        { text: 'Products', url: '#' },
        { text: 'Resources', url: '#' },
        { text: 'About us', url: '#' },
        { text: 'Contact us', url: '#' }
    ]

    const imgurl = "https://res.cloudinary.com/dhzoxdo6q/image/upload/v1685025897/Roshka/react-white_hcr6av.png"

    const banner = {
        title: "Work less,\n achieve more.",
        description: "Our technology is the key to unlocking higher sales and better service. We stand behind it with a satisfaction guarantee - try it risk-free and see the results for yourself!"
    }

   

    return (
        <>
            <Navbar links={navlinks} logo={imgurl} />
            <div className="container mb-5 pb-5">

                <Banner title={banner.title} description={banner.description} />

                {/* Lista expandible */}
                <h2 className='text-center mt-5'>Lista expandible</h2>
                <hr />
                <List />

                {/* Card con imagenes y texto */}
                <h2 className='text-center mt-5'>Card - Imagenes y texto</h2>
                <hr />
                <div className='d-flex justify-content-center'>
                    <Card />
                </div>

                {/* Card con imagenes y texto */}
                <h2 className='text-center mt-5'>Lista expandible multiple</h2>
                <hr />
                <Accordion />

                <h2 className='text-center mt-5'>Botones</h2>
                <hr />
                <ButtonList />

            </div>

            <Footer />
        </>
    )
}

export default Content