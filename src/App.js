import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'; // Asegúrate de importar Switch y Redirect
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      {/* Eliminamos el uso de useLocation y controlamos la visibilidad del Header con una Route */}
      <Route path="/" component={Header} />

      {/* Envuelve tus rutas en un Switch para que solo se renderice la primera que coincida */}
      <Switch>
        <Route path="/home" component={Home} />
        {/* <Route path="/create" component={Form} />
        <Route path="/detail/:id" component={Detail} /> */}
        
        {/* Redirección de / a /home */}
        <Redirect from="/" to="/home" exact />
      </Switch>
    </div>
  );
}

export default App;
