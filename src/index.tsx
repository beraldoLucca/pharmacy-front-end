import '../styles/global.scss'
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
  
} from "react-router-dom";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
// import { Form } from './pages/Form/Form';
import { Header } from './components/Header/Header';


ReactDOM.render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    {/* <Route path="/veiculos/edit">
      <Route path=":id" element={
              <RequireAuth>
                <Form />
              </RequireAuth>
      
      } />
    </Route> */}
    {/* <Route path="/veiculos/add" element={
        <RequireAuth>
            <Form />
        </RequireAuth>
    }/> */}
    <Route path="/login" element={<Login/>} />
  </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

