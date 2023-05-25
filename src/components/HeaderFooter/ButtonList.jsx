
import Button from './Button'

const ButtonList = () => {




    return (
        <div className='row row-cols-3'>
            <div className='mb-3'>
                <Button bgcolor={"dodgerblue"} color='white' >LABEL</Button> <br />
                <Button bgcolor={"dodgerblue"} color='white' ><i className="bi bi-plus"></i>LABEL</Button> <br />
                <Button bgcolor={"dodgerblue"} color='white' >LABEL<i className="bi bi-plus"></i></Button>
            </div>
            <div>
                <Button bgcolor={"cornflowerblue"} color='white' >LABEL</Button><br />
                <Button bgcolor={"cornflowerblue"} color='white' ><i className="bi bi-plus"></i>LABEL</Button><br />
                <Button bgcolor={"cornflowerblue"} color='white' >LABEL<i className="bi bi-plus"></i></Button>
            </div>
            <div>
                <Button bgcolor={"cornflowerblue"} color='white' $disabled>LABEL</Button><br />
                <Button bgcolor={"cornflowerblue"} color='white' $disabled><i className="bi bi-plus"></i>LABEL</Button><br />
                <Button bgcolor={"cornflowerblue"} color='white' $disabled>LABEL<i className="bi bi-plus"></i></Button>
            </div>
            <div >
                <Button bgcolor={"dodgerblue"} $outlined>LABEL</Button> <br />
                <Button bgcolor={"dodgerblue"} $outlined><i className="bi bi-plus"></i>LABEL</Button> <br />
                <Button bgcolor={"dodgerblue"} $outlined>LABEL<i className="bi bi-plus"></i></Button>
            </div>
            <div>
                <Button bgcolor={"aliceblue"} $borderColor={"dodgerblue"} color='dodgerblue' >LABEL</Button><br />
                <Button bgcolor={"aliceblue"} $borderColor={"dodgerblue"} color='dodgerblue' ><i className="bi bi-plus"></i>LABEL</Button><br />
                <Button bgcolor={"aliceblue"} $borderColor={"dodgerblue"} color='dodgerblue' >LABEL<i className="bi bi-plus"></i></Button>
            </div>
            <div>
                <Button bgcolor={"dodgerblue"} $outlined $disabled>LABEL</Button> <br />
                <Button bgcolor={"dodgerblue"} $outlined $disabled><i className="bi bi-plus"></i>LABEL</Button> <br />
                <Button bgcolor={"dodgerblue"} $outlined $disabled>LABEL<i className="bi bi-plus"></i></Button>
            </div>
            <div className='col-12 mt-3'>
                <Button bgcolor={"dodgerblue"} $link $textdecorationnone>LABEL</Button>
                <Button bgcolor={"dodgerblue"} $link>LABEL</Button>
                <Button bgcolor={"dodgerblue"} $link $textdecorationnone><i className="bi bi-plus"></i>LABEL</Button>
                <Button bgcolor={"dodgerblue"} $link $textdecorationnone>LABEL<i className="bi bi-plus"></i></Button>
            </div>
        </div>
    )
}

export default ButtonList