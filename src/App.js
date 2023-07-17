import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Components
import Layout from './layout/Layout';
import NotFound from './components/pages/not-found/NotFound';
import Login from './components/pages/login/Login';


// Protected Route Components
import Dashboard from './components/pages/dashboard/Dashboard';
import Assessment from './components/pages/assessment/Assessment';
import MyLibrary from './components/pages/my-library/MyLibrary';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Replace with authentication logic

  // Custom Route Guard
  const requireAuth = (component) => {
    return isAuthenticated ? component : <Navigate to="/login" />;
  };

  return (

    <Router>
      <Layout>
        <Routes>
          {/* public Routes */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected Routes */}
          <Route path="/" element={requireAuth(<Dashboard />)} />
          <Route path="/dashboard" element={requireAuth(<Dashboard />)} />
          <Route path="/assessment" element={requireAuth(<Assessment />)} />
          <Route path="/my_library" element={requireAuth(<MyLibrary />)} />

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;