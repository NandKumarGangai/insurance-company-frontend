import React from 'react';
import { Route } from "react-router-dom";
import { HomePage, RegisteredPerson, CarRegistration, Navigation } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Insurance Company Information</h1>
      </header>
      <main className="App-main">
        <div>
          <Navigation />
        </div>
        <div>
          <Route exact path={["/", '/insurance-company-frontend']}><HomePage /></Route>
          <Route exact path="/check-user"><RegisteredPerson /></Route>
          <Route exact path="/car-register"><CarRegistration /></Route>
        </div>
      </main>
      <footer className='footer'>
        {'Developed by'}&nbsp;
        <strong>{` Nandkumar Gangai.`}</strong>
      </footer>
    </div>
  );
}

export default App;
