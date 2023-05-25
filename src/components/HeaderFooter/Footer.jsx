import Button from "./Button"

const Footer = () => {

    const lista = [
        { header: 'Products', items: ['ICM', 'DMS', 'CRM'] },
        { header: 'Products', items: ['Case Studies', "FAQ's", 'Newsletters', 'Release Notes', "Developer's Guide"] },
        { header: 'Company', items: ['About', 'Our Experts', 'Terms & Conditions', 'Schedule a Demo', 'Privacy Policy'] },
    ]


    return (
        <div className='footer-custom'>
            <div className="container">
                <div className="footer-list">
                    {lista.map((item, index) => (
                        <ul key={index}>
                            <li className="list-header"><a href="#">{item.header}</a></li>
                            {item.items && item.items.map((subitem, subindex) => (
                                <li key={subindex}><a href="#">{subitem}</a></li>
                            ))}
                        </ul>
                    ))}

                    <ul className="list-icon">
                        <li className="list-header"><a href="#">Contact Us</a></li>
                        <div className="mt-auto">
                            <Button $outlined $borderRadius={'10px'}><i className="bi bi-facebook"></i></Button>
                            <Button $outlined $borderRadius={'10px'}><i className="bi bi-linkedin"></i></Button>
                            <Button $outlined $borderRadius={'10px'}><i className="bi bi-twitter"></i></Button>
                        </div>
                    </ul>

                </div>

                <hr className="hr-ligth" />
                <p className="footer-copy">&copy; 2023. All Rigths Reserved.</p>
            </div>
        </div>
    )
}

export default Footer