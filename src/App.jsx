import Banner from "./components/Banner";
import Clientslider from "./components/clientslider/Clientslider";
import Footer from "./components/Footer";
import HotProducts from "./components/hotproducts/HotProducts";
import Navbar from "./components/Navbar";
import ProductCategory from "./components/productCategory/ProductCategory";
import Whyexplore from "./components/whyExplore/Whyexplore";


function App() {
  return (
    <>
      <Navbar />
      <Banner />     
      <HotProducts />
      <ProductCategory />
      <Whyexplore />
      <Clientslider />
      <Footer />
    </>
  )
}

export default App
