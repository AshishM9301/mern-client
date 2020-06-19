import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Login from './Header/Login';
import Register from './Header/Register';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
      </div>
    </BrowserRouter>
  );
}

export default App;
