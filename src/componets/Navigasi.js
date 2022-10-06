import { Navbar, Container, Nav } from "react-bootstrap";

const Navigasi = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand>Website Portofolio</Navbar.Brand>
        <Nav>
          <Nav.Link href="#makanan">Makanan</Nav.Link>
          <Nav.Link href="#binatang">Binatang</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigasi;
