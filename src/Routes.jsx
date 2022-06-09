import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelloPage } from "./pages/helloPage";
import { Index } from "./pages/index";

/*
Fonction répartissant les chemin et les pages
*/
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/hello" element={<HelloPage />} />
        {/* <Route path="*" element={<FourOFour />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
