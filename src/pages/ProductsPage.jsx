import { useContext, useRef, useState, useEffect } from "react"
import { ProductContext } from "../context/ProductContext"
import ProductCard from "../components/shop/ProductCard"
import "../components/shop/Shop.css"

export default function ProductsPage() {
  const { items, loading, error } = useContext(ProductContext)

  const [filteredItems, setFilteredItems] = useState([])
  const searchRef = useRef()

  // Sync filteredItems whenever items change
  useEffect(() => {
    setFilteredItems(items)
  }, [items])

  function handleSearch() {
    const value = searchRef.current.value.toLowerCase()

    const filtered = items.filter(item =>
      item.name.toLowerCase().includes(value)
    )

    setFilteredItems(filtered)
  }

  if (loading) return <h2 style={{ textAlign: "center" }}>Loading...</h2>
  if (error) return <h2 style={{ textAlign: "center" }}>Error: {error}</h2>

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="shop-layout">

          <aside className="sidebar">
            <h2>Search</h2>
            <input
              type="text"
              ref={searchRef}
              onChange={handleSearch}
              placeholder="Search items..."
              className="search-input"
            />
          </aside>

          <div className="product-grid">
            {filteredItems.map(item => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
