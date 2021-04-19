import { Fragment } from "react";
import { Card, CardDeck } from 'react-bootstrap'
import { Header } from "../../components";
import { BgLogin, BgRegister } from '../../assets';
import './home.scss';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <CardDeck className="row-cols-md-3 mt-5 mr-3 ml-3">
        <div className="col mb-5">
          <Card className="h-100 rounded-top rounded-3">
            <Card.Img variant="top" src={BgLogin} className="card-img-size" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col mb-5">
          <Card className="h-100">
            <Card.Img variant="top" src={BgLogin} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This card has supporting text below as a natural lead-in to additional content.{' '}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col mb-5">
          <Card className="h-100">
            <Card.Img variant="top" src={BgRegister} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col mb-5">
          <Card>
            <Card.Img variant="top" src={BgLogin} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This card has supporting text below as a natural lead-in to additional content.{' '}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>

        <div className="col mb-5">
          <Card className="h-100">
            <Card.Img variant="top" src={BgRegister} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="col mb-5">
          <Card className="h-100">
            <Card.Img variant="top" src={BgRegister} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </div>
      </CardDeck>
    </Fragment>
  )
}

export default Home;