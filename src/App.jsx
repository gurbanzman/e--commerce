import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home/index"));
const Whistlist = lazy(() => import("./pages/wishlist/index"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Whistlist />} />
        <Route path="*" element={`Not Found`} />
      </Routes>
    </Suspense>
  );
}

export default App;
