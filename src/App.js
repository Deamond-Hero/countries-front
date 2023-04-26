import { Home, Detail, Landing, Create } from "./views/index.js";
import NavBar from "./Components/NavBar/NavBar"
import Footer from "./Components/Footer/Footer.jsx";
import { Route, useLocation } from "react-router-dom";
import axios from "axios";



function App() {
  axios.defaults.baseURL = 'https://countries-back-production-a139.up.railway.app/' 
  const location = useLocation();


  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" component={Landing} />
      <Route path="/countries" render={() => <Home />} />
      <Route path="/country/:id" render={() => <Detail />} />
      <Route path="/create" component={Create} />
      {location.pathname !== "/" && <Footer/>}
    </div>
  );
}

export default App;
