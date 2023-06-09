import Button from "./Button"

const Banner = ({ title, description }) => {

  return (
    <div className="banner">
      <h1 className="banner-title">{title}</h1>
      <div className="banner-body">
          <p className="banner-description">{description}</p>
          <Button bgcolor={"lightseagreen"} color="white">GET STARTED</Button>
      </div>
    </div>
  )
}

export default Banner