import React from 'react';
import SearchPage from './pages/Search/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import DisplayLocation from './pages/DisplayLocation/DisplayLocation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <SearchPage
                id={0}
                title={''}
                description={''}
                location={''}
                picture={''}
                stars={0}
                numberOfRooms={0}
                price={0}
                categoryId={0}
              />
            }
          />
          <Route
            path="/location/:id"
            element={
              <DisplayLocation
                id={0}
                title={''}
                description={''}
                location={''}
                picture={''}
                stars={0}
                numberOfRooms={0}
                price={0}
                categoryId={0}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
