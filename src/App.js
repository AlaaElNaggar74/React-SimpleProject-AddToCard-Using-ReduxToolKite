import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppNavbar from "./Component/AppNavbar";
import Products from "./Component/Products";
import Cart from "./Component/Cart";
import AboutUs from "./Component/AboutUs";
import Home from "./Component/Home";
function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
    
        <Route path="/" element={<>
          
          <Home/>
        </>} />
        <Route path="/AboutUspage" element={<>
        <AboutUs/>
        </>} />
        <Route path="/Products" element={<>
          <Products/>
        </>} />
        <Route path="/Cart" element={<>
          <Cart/>
        </>} />
      
      </Routes>
    </div>
  );
}

export default App;
