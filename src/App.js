import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import ModulePage from './Pages/ModulePage';
import { GlobalStyles } from "./Styles/Global";
import ProtectedRoute from './Utils/Routes/ProtectedRoute'
import AlreadyLoggedRoute from './Utils/Routes/AlreadyLoggedRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <ProtectedRoute path="/modules" render={() => <ModulePage />}/>
          <AlreadyLoggedRoute path="/login" render={() => <LoginPage />} />
          <Route path="/" render={() => <HomePage />} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

export default App;
