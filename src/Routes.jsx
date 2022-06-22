import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./pages/Client/index";
import { AuthIndex, Auth } from "./pages/auth/Index";

const loggedIn = true;
/*
Fonction répartissant les chemin et les pages
*/
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={loggedIn ? <Index /> : <AuthIndex />} />
        <Route path="/auth" exact element={<Auth />} />
        {/* <Route path="*" element={<FourOFour />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
