import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
        <Container className='text-white text-center d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
            <div className='title'>Website Sederhana</div>
            <div className='title'>Menggunakan React Js</div>
            <div className='title'>Css Bootstrap</div>
            <div className='introButton mt-4 text-center'>
                <Button>Lihat Semua List</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default Intro