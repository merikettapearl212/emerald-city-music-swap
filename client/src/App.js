import {BrowserRouter as Router ,Route} from "react-router-dom";
import Home from "./pages/Home";
import NavTabs from "./components/NavTabs"


function App() {
  return (
   
   <Router>
     <NavTabs />
     <Route exact path="/" component ={Home} />



   </Router>
  );
}

export default App;
