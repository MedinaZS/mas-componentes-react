import Button from "./Button"

const Navbar = ({ logo, links }) => {
 
    return (
        <div className="navbar-custom">
            <div className="container navbar-custom">
                <div className="navbar-image">
                    <img src={logo} alt="logo" height={50} />
                </div>
                <div className="navbar-links">
                    <ul>
                        {links && links.map((item, index) => (
                            <li key={index}>
                                <a href={item.url}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-account">
                    <Button bgcolor={"dodgerblue"} color="white">
                        <i className="bi bi-person-fill"></i>
                        Login
                    </Button>
                    <Button bgcolor={"dodgerblue"} $outlined >
                
                        Book a Demo
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar