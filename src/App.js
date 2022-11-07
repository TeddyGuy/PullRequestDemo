import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");


  return (
    <>
    <Container fluid>
      <Row>
        <Col xs={6}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="joe@biden.us" onChange={e => setEmail(e.target.value)}/>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" className={"my-3"}>
        Create
      </Button>
      <p>Wow beau form le gros!</p>
    </Container>
    </>
  );
}

export default App;
