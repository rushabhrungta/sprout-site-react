import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DigitalTransformation from "./pages/services/DigitalTransformation";
import ProductDevelopment from "./pages/services/ProductDevelopment";
import AiAutomation from "./pages/services/AiAutomation";
import SproutBlue from "./pages/products/SproutBlue";
import SproutRed from "./pages/products/SproutRed";
import Taggme from "./pages/products/Taggme";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
     <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service/digital-transformation" element={<DigitalTransformation />} />
                <Route path="/service/product-development" element={<ProductDevelopment />} />
                <Route path="/service/ai-automation" element={<AiAutomation />} />
                <Route path="/product/sprout-blue" element={<SproutBlue />} />
                <Route path="/product/sprout-red" element={<SproutRed />} />
                <Route path="/product/taggme" element={<Taggme />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
