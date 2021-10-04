import React from 'react';
import { Login } from './pages'

export type Page = 'login' | 'dashboard'

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
