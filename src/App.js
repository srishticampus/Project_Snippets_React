import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
