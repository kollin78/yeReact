import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Ye from "./pages/Ye";
import About from "./pages/About";
import Props from "./pages/Props";

export default function App() {
  return (
    <BrowserRouter basename="/ye/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="ye" element={<Ye />} />
          <Route path="about" element={<About />} />
          <Route path="props" element={<Props />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
