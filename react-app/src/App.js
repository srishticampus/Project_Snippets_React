import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
