import React, { useEffect } from 'react';
import { Container } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import CourierWindow from './Pages/Courier/CourierWindow';
import { getAllPackages } from './Redux/actions/asyncActions';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPackages());
  }, []);

  return (
    <div className="App">
      <Container fluid>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courier" element={<CourierWindow />} />
          </Routes>
        </Layout>
      </Container>
    </div>
  );
}

export default App;
