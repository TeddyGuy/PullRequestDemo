import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { Offcanvas } from 'bootstrap';
import { Ratio } from 'react-bootstrap';
import Table from 'react-bootstrap';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const c = () => {
    const newU = [...users]
    newU.push({email: email, password: password})
    setUsers(newU)
  }

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
      <Row>
        <Col xs={6}>
          <Form.Group>
            <Form.Label>Passord</Form.Label>
            <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" onClick={c} className={"my-3"}>
        Create
      </Button>
      {
        users.map((user, index) => <Card key={index} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{user.email}</Card.Title>
            <Card.Text>
              {user.password}
            </Card.Text>
          </Card.Body>
        </Card>)
      }
    </Container>
    </>
  );
}

export default App;
