import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductForm from "../components/forms/ProductForm"
import "./Admin.css"

export default function AdminPage() {
  const { addItem } = useContext(ProductContext)

  function handleAddItem(newItem) {
    addItem(newItem)
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <ProductForm onSubmit={handleAddItem} />
      </div>
    </div>
  )
}
