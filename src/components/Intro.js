import { Col, Row, Container, Button } from 'react-bootstrap';

const Intro = ()=>{
    return(
        <div className="intro">
        <Container className="text-white d-flex justify-content-center align-items-center">
          <Row>
            <Col>
            <div className="title" >Situs Film</div>
            <div className="text-center"> Selamat datang di situs film</div>
            <div className="introButton nt=3 text-center">
                <Button variant="dark">Lihat List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Intro