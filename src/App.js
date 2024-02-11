import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Profile from './components/Profile';
import FrontendAddition from './components/FrontendAddition';

const App = () => {
  return (
    <Container>
      <NavigationBar /> <br></br>
      <Profile /> <br></br><br></br>
      <FrontendAddition/>
    </Container>
  );
};

export default App;
