import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
      </div>
  );
};

export default App;
