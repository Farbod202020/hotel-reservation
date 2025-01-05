import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load the HomePage component
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
