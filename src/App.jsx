import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelloPage } from "./pages/helloPage";
import { Index } from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Index />} />
        <Route path="/hello" element={<HelloPage />} />
        {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<FourOFour />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
