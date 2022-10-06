import { Container, Card, Row, Col, Image } from "react-bootstrap";
import makanan1Image from "../assets/makanan/makanan1.png";
import makanan2Image from "../assets/makanan/makanan2.png";
import makanan3Image from "../assets/makanan/makanan3.png";
import makanan4Image from "../assets/makanan/makanan4.png";
import makanan5Image from "../assets/makanan/makanan5.png";
import makanan6Image from "../assets/makanan/makanan6.png";

const Makanan = () => {
  return (
    <div>
      <Container>
        <br></br>
        <h1 className="text-white">Macam - Macam Makanan</h1>
        <br></br>
        <Row>
          <Col md={4} className="hewanWrapper" id="makanan">
            <Card className=" hewanImage">
              <Image src={makanan1Image} alt="Makanan 1" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makanan 1</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="hewanWrapper">
            <Card className=" hewanImage">
              <Image
                src={makanan6Image}
                alt="Makanan 2 Image"
                className="Image"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makanan 2</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="hewanWrapper">
            <Card className=" hewanImage">
              <Image
                src={makanan3Image}
                alt="Kelinci Image"
                className="Image"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makanan 3</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="hewanWrapper">
            <Card className=" hewanImage">
              <Image
                src={makanan4Image}
                alt="Kelinci Image"
                className="Image"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makanan 4</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="hewanWrapper">
            <Card className=" hewanImage">
              <Image src={makanan5Image} alt="nuri Image" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makanan 5</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className="hewanWrapper">
            <Card className=" hewanImage">
              <Image
                src={makanan2Image}
                alt="Kelinci Image"
                className="Image"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Makanan 6</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Makanan;
