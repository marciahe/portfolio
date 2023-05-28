import "./App.css";
import { Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./views/Home/Home";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {/* {location.pathname !== "/" && <Header />} */}

      <Route path="*" component={Header} />
      <Route path="/home" component={Home} />
      {/* <Route path="/create" component={Form} /> */}
      {/* <Route path="/detail/:id" component={Detail} />  */}
    </div>
  );
}

export default App;
