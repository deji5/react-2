import './App.css'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Categories from "./Categories";
import Products from "./Products";
import Footer from "./Footer";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
