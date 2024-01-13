import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Nav } from "./components";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import DeleteAccount from "./Pages/DeleteAccount";

const App = () => {
  return (
    <main className='relative bg-black'>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DeleteAccount" element={<DeleteAccount />} />
      </Routes>
    </main>
  );
};

export default App;
