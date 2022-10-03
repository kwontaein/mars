import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Sign from "./components/auth/Sign";
import Home from "./components/Startpage/Choice"
import Cocktail from "./components/Cocktail/main/Main";
import Bakery from "./components/Bakery/main/Main";
import SignUP from "./components/auth/Sign_up";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cocktail" element={<Cocktail/>}/>
      <Route path="/Bakery" element={<Bakery/>}/>
      <Route path="/Sign_page" element={<Sign/>}/>
      <Route path="/SignUp" element={<SignUP/>}/>
    </Routes>
  );
}

export default App;
