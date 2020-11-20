import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/Home'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import CursosDestacados from './component/CursosDestacados';
import TodosCursos from './component/TodosCursos';

const container = document.getElementById('root')
ReactDOM.render(<CursosDestacados />, container);
