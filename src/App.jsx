import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import ContactBanner from './components/ContactBanner'
import CategoryPage from "./pages/CategoryPage";
import SingleProduct from "./pages/SingleProduct";
import DetailsBlog from "./pages/DetailsBlog";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen opacity-50">
          <CirclesWithBar
            height="100"
            width="100"
            color="#36454F"
            outerCircleColor="#36454F"
            innerCircleColor="#36454F"
            barColor="#36454F"
            ariaLabel="circles-with-bar-loading"
            visible={true}
          />
        </div>
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<CategoryPage />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<DetailsBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ContactBanner />
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
