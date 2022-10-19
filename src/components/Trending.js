import { Card, Container, Row, Col } from "react-bootstrap"
import joker from "../assets/image/trending/joker.jpg"
import avenger from "../assets/image/trending/avenger.jpg"
import gatot from "../assets/image/trending/gatot.jpeg"
import imperfect from "../assets/image/trending/imperfect.jpg"
import mencuriraden from "../assets/image/trending/mencuriraden.jpg"

const Trending =()=>{
  return (
    <div>
      <Container>
        <br/>
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="bg-dark text-white movieImage">
              <Card.Img  
                src={joker} 
                alt="film joker" className="Images" 
                width="50%" 
                height="auto"
              />
                <Card.Title className="text-center">Joker</Card.Title>
                <Card.Text className="text-left">
                Film Joker merupakan film thriller psikologis Amerika yang dirilis pada 2019. Film ini berdasarkan karakter DC Comics, yaitu Joker. Joker dibintangi oleh Joaquin Phoenix yang menjelaskan cerita asal karakter Joker.
                
                </Card.Text>
                <br/>
                <br/>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Card.Img  
                src={avenger} 
                alt="film avenger" className="Images"
                width="50%" 
                height="auto"
              />
                <Card.Title className="text-center">Avenger: Endgame</Card.Title>
                <Card.Text className="text-left">
                Film Avengers: Endgame (2019) merupakan sebuah film yang menceritakan kisah pertarungan akhir dari Thanos yang memusnahkan setengah dari semua kehidupan di alam semesta.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Card.Img  
                src={gatot} 
                alt="film gatot" className="Images" 
                width="50%" 
                height="auto"
              />
                <Card.Title className="text-center">Gatot Kaca</Card.Title>
                <Card.Text className="text-left">
                Satria Dewa (2022): Gatotkaca berkutat pada seputaran kisah hidup tokoh sentral bernama Yudha (Rizky Nazar).
                </Card.Text>
                <br/>
                <br/>
                <br/>
                <br/>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Card.Img  
                src={imperfect} 
                alt="film imperfect" className="Images" 
                width="50%" 
                height="auto"
              />
                <Card.Title className="text-center">Imperfect</Card.Title>
                <Card.Text className="text-left">
                Film Imperfect (2019) menceritakan kisah Rara (Jessica Mila) yang kerap diperlakukan body shaming oleh lingkungan sekitarnya. 
                </Card.Text>
                <br/>
                <br/>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark text-white movieImage">
              <Card.Img  
                src={mencuriraden} 
                alt="film mencuriraden" className="Images" 
                width="50%" 
                height="auto"
              />
                <Card.Title className="text-center">Mencuri Raden Salah</Card.Title>
                <Card.Text className="text-left">
                Mencuri Raden Saleh (2022) adalah film yang bercerita tentang sekelompok mahasiswa dengan tugas dan peran masing-masing yang berencana untuk mencuri lukisan master Raden Saleh dari istana presiden.
                </Card.Text>
                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
   </div>
 )
}

export default Trending