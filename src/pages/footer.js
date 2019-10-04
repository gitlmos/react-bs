import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Footers extends React.Component {
  render() {
    return(
      <Container>
        <h2>Enquiry Form</h2>
        <Row>
          <Col sm="6">
            <Form>
              <FormGroup>
                <Label for="Name">Name</Label>
                <Input type="text" id="Name" />
              </FormGroup>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input type="email" id="Email" />
              </FormGroup>
              <FormGroup>
                <Label for="City">City</Label>
                <Input type="select" id="City">
                  <option value="New Delhi">New Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="Message">Message</Label>
                <Input type="textarea" id="Message" />
              </FormGroup>
              <FormGroup>
                <Button color="success">Send Message</Button>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footers;