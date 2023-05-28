import "./App.css";
// import { Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Boilerplate</h1>
      <img
        src="https://i.giphy.com/media/1NYkJ0wTvncdXV5dN5/giphy.webp"
        alt="Happy coding"
      />
      {/* {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/create" component={Form} />
      <Route path="/detail/:id" component={Detail} /> */}
    </div>
  );
}

export default App;
