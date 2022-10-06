import { Container, Card, Row, Col, Image } from "react-bootstrap";
import rusaImage from "../assets/hewan/rusa.png";
import harimauImage from "../assets/hewan/harimau.png";
import kelinciImage from "../assets/hewan/kelinci.png";
import kokiImage from "../assets/hewan/koki.png";
import nuriImage from "../assets/hewan/nuri.png";
import suricateImage from "../assets/hewan/suricate.png";

const Hewan = () => {
  return (
    <div>
      <Container>
        <br></br>
        <h1 className="text-white">Macam - Macam Binatang</h1>
        <br></br>
        <Row>
          <Col md={4} className="hewanWrapper" id="binatang">
            <Card className=" hewanImage">
              <Image src={rusaImage} alt="Rusa Image" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Rusa</Card.Title>
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
              <Image src={harimauImage} alt="Harimau Image" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Harimau</Card.Title>
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
              <Image src={kelinciImage} alt="Kelinci Image" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Kelinci</Card.Title>
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
              <Image src={kokiImage} alt="Kelinci Image" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Ikan Mas Koki</Card.Title>
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
              <Image src={nuriImage} alt="nuri Image" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Burung Nuri</Card.Title>
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
                src={suricateImage}
                alt="Kelinci Image"
                className="Image"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Suricate</Card.Title>
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

export default Hewan;
