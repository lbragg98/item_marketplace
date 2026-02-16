import { useParams, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../context/ProductContext"
import "./ProductDetail.css"

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  const { items, updateItem, deleteItem, loading } =
    useContext(ProductContext)

  const [item, setItem] = useState(null)
  const [newPrice, setNewPrice] = useState("")

  useEffect(() => {
    const foundItem = items.find(
      item => item.id === parseInt(id)
    )

    if (foundItem) {
      setItem(foundItem)
      setNewPrice(foundItem.price)
    }
  }, [id, items])

  if (loading || !item) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>
  }

  async function handlePriceUpdate(e) {
    e.preventDefault()

    await updateItem(item.id, {
      price: parseFloat(newPrice)
    })
  }

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    )

    if (!confirmDelete) return

    await deleteItem(item.id)
    navigate("/shop")
  }

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">

        <img
          src={item.image}
          alt={item.name}
          className="detail-image"
        />

        <div className="detail-info">
          <h1>{item.name}</h1>

          <p><strong>Game:</strong> {item.game}</p>
          <p><strong>Type:</strong> {item.type}</p>
          <p><strong>Rarity:</strong> {item.rarity}</p>

          <p className="detail-description">
            {item.description}
          </p>

          <h2 className="detail-price">
            ${item.price.toFixed(2)}
          </h2>

          <form
            onSubmit={handlePriceUpdate}
            className="price-form"
          >
            <label>Update Price</label>

            <input
              type="number"
              step="0.01"
              value={newPrice}
              onChange={(e) =>
                setNewPrice(e.target.value)
              }
            />

            <button type="submit">
              Save
            </button>
          </form>

          <button
            onClick={handleDelete}
            className="delete-button"
          >
            Delete Item
          </button>
        </div>

      </div>
    </div>
  )
}
