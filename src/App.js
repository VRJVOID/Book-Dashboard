import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext'; // Import AuthProvider if needed
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Register from './components/Register'
import PrivateRouter from './PrivateRouter'; // Import PrivateRoute component

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PrivateRouter element={Dashboard} />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;