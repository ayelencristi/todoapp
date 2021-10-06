import React from 'react';
import { Login } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';

export type Page = 'login' | 'dashboard'

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
