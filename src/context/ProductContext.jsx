import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext()

const BASE_URL = "http://localhost:3001/items"

export function ProductProvider({ children }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch all items once
  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(BASE_URL)

        if (!response.ok) {
          throw new Error("Failed to fetch items")
        }

        const data = await response.json()
        setItems(data)

      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchItems()
  }, [])

  // CREATE (POST)
  async function addItem(newItem) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    })

    const data = await response.json()

    setItems(prev => [...prev, data])
  }

  // UPDATE (PATCH)
  async function updateItem(id, updates) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates)
    })

    const updatedItem = await response.json()

    setItems(prev =>
      prev.map(item =>
        item.id === id ? updatedItem : item
      )
    )
  }

  // DELETE
  async function deleteItem(id) {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    })

    setItems(prev =>
      prev.filter(item => item.id !== id)
    )
  }

  return (
    <ProductContext.Provider
      value={{
        items,
        loading,
        error,
        addItem,
        updateItem,
        deleteItem
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
