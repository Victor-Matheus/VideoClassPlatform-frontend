import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import decode from 'jwt-decode';


export default function ProtectedRoute({path, render}) {

  const [storageIsValid] = React.useState(localStorage.getItem("loginToken"))
  if (storageIsValid && storageIsValid !== null && storageIsValid !== undefined) {
    if (storageIsValid.length < 10) localStorage.clear();
  }else{
    localStorage.clear();
    return <Redirect to={{pathname: "/" }}/>
  }
  const decodedToken = storageIsValid ? decode(localStorage.getItem("loginToken")) : 1;


  return (
      <>
        {  storageIsValid && decodedToken.exp > Math.floor(new Date() / 1000) ? 
            <Route path={path} render={render} />
            : (
              <>
                <Redirect to={{pathname: "/" }}/>
                {alert("Acesse sua conta", "Você precisa acessar sua conta antes de acessar essa página.")}
              </>)
        }
      </>
  );
}