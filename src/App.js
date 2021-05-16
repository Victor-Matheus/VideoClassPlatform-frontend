import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import ModulePage from './Pages/ModulePage';
import { GlobalStyles } from "./Styles/Global";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/modules" render={() => <ModulePage />}/>
          <Route path="/login" render={() => <LoginPage />} />
          <Route path="/" render={() => <HomePage />} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
