import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Quiz from "./pages/Quiz";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <SpeedInsights/>
      </div>
  );
};

export default App;
