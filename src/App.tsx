import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';

import { Home, SingIn } from './pages';

function App() {
  return (
    <div className="App" >
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singin" element={<SingIn />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
