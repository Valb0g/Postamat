import React from 'react';
import { Row, Col } from 'reactstrap';
import Input from '../Input/Input';
import Keyboard from '../Keyboard/Keyboard';
import Packages from '../Packages/Packages';
import Showcase from '../Showcase/Showcase';

function Postamat() {
  return (
    <Row xs={3} style={{ textAlign: 'center' }}>
      <Col>
        <div style={{
          border: '1px solid', padding: '10px', borderRadius: '5px', backgroundColor: 'lightgray',
        }}
        >
          <Input />
          <Keyboard />
        </div>
      </Col>
      <Col>
        <Showcase />
      </Col>
      <Col>
        <Packages />
      </Col>
    </Row>
  );
}

export default Postamat;
