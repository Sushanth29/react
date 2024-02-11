// Profile.js
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name';
import Biography from './Biography';
import profilePicture from './pic.jpg';

const Profile = () => {
  return (
    <Row>
      <br></br>
      <Col md={3}>
        <Image src={profilePicture} fluid style={{ width: '200px', height: '200px' }}/>
      </Col>
      <Col md={9}>
        <Row>
          <Col>
            <Name />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Biography />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Profile;
