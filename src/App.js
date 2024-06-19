import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Axios from './routing/nested/axios';
import LoginForm from './routing/nested/loginForm';
import HookFormDemo from './routing/nested/hookFormDemo';
import Counter from './routing/nested/counter';
import College from './routing/nested/college';
import Teacher from './routing/nested/teacher';
import Student from './routing/nested/student';
import ScrollableSPA from './components/ScrollableSPA';
import UseMemoDemo from './components/useMemoDemo';
import LifeCycleDemo from './components/LifeCycleDemo';
import ConditionalComponent from './components/ConditionalComponent';
import ClassDemo from './components/ClassDemo';
import FuncDemo from './components/FuncDemo';
import './App.css';

const activeNavLinkStyle = {
  fontWeight: 'bold',
  color: 'red',
};

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // If login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {isLoggedIn ? (
          <>
            <nav>
              <ul className="navbar">
                <li>
                  <NavLink
                    to="/"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/class-demo"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Class Demo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/func-demo"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Func Demo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/conditional-component"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Conditional Component
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/axios"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Axios
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/hook-form"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Hook Form Demo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/counter"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Counter
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/scrollable-spa"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Scrollable SPA
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/use-memo"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    useMemo Demo
                  </NavLink>
                </li>
                {/* Add a NavLink for the LifeCycleDemo component */}
                <li>
                  <NavLink
                    to="/lifecycle-demo"
                    style={({ isActive }) => (isActive ? activeNavLinkStyle : undefined)}
                    className="nav-link"
                  >
                    Lifecycle Demo
                  </NavLink>
                </li>
                <li className="dropdown">
                  <span onClick={toggleDropdown} className="nav-link">
                    College
                  </span>
                  {isDropdownOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/college/teacher" className="dropdown-link">
                          Teacher
                        </Link>
                      </li>
                      <li>
                        <Link to="/college/student" className="dropdown-link">
                          Student
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <button className="logoutButton" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route path="/" element={<div>Home Page</div>} />
              <Route path="/conditional-component" element={<ConditionalComponent />} />
              <Route path="/class-demo" element={<ClassDemo />} />
              <Route path="/func-demo" element={<FuncDemo />} />
              <Route path="/axios" element={<Axios />} />
              <Route path="/hook-form" element={<HookFormDemo />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/scrollable-spa" element={<ScrollableSPA />} />
              <Route path="/use-memo" element={<UseMemoDemo />} />
              <Route path="/lifecycle-demo" element={<LifeCycleDemo />} />
              <Route path="/college" element={<College />}>
                <Route path="teacher" element={<Teacher />} />
                <Route path="student" element={<Student />} />
              </Route>
            </Routes>
          </>
        ) : (
          <LoginForm onLogin={handleLogin} />
        )}
      </div>
    </BrowserRouter>
  );
};
