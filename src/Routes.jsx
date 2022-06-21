import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApiTest } from "./pages/apitest";
import { Index } from "./pages/index";
import { AuthIndex } from "./pages/auth/Index";
const loggedIn = false;
/*
Fonction répartissant les chemin et les pages
*/
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={loggedIn ? <Index /> : <AuthIndex />} />
        <Route path="/apitest" exact element={<ApiTest />} />
        {/* <Route path="*" element={<FourOFour />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
