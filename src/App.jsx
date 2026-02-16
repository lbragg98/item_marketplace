import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import LandingPage from "./pages/LandingPage"
import ProductsPage from "./pages/ProductsPage"
import AdminPage from "./pages/AdminPage"
import ProductDetailPage from "./pages/ProductDetailPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="shop" element={<ProductsPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="shop/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  )
}

export default App
