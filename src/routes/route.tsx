import { BrowserRouter, Route, Routes } from "react-router-dom";
import Games from "../pages/Games/Games";
import Home from "../pages/Home/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogos" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}
