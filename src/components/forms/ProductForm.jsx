import { useState, useId } from "react"
import "./Form.css"

export default function ProductForm({ onSubmit }) {
  const nameId = useId()
  const gameId = useId()
  const typeId = useId()
  const rarityId = useId()
  const descriptionId = useId()
  const priceId = useId()

  const [formData, setFormData] = useState({
    name: "",
    game: "",
    type: "",
    rarity: "",
    description: "",
    price: ""
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newItem = {
      ...formData,
      price: parseFloat(formData.price)
    }

    onSubmit(newItem)

    // reset form
    setFormData({
      name: "",
      game: "",
      type: "",
      rarity: "",
      description: "",
      price: ""
    })
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Item</h2>

      <form onSubmit={handleSubmit} className="form-card">

        <label htmlFor={nameId}>Item Name</label>
        <input
          id={nameId}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor={gameId}>Game</label>
        <input
          id={gameId}
          name="game"
          value={formData.game}
          onChange={handleChange}
          required
        />

        <label htmlFor={typeId}>Type</label>
        <input
          id={typeId}
          name="type"
          value={formData.type}
          onChange={handleChange}
          required
        />

        <label htmlFor={rarityId}>Rarity</label>
        <select
          id={rarityId}
          name="rarity"
          value={formData.rarity}
          onChange={handleChange}
          required
        >
          <option value="">Select Rarity</option>
          <option>Common</option>
          <option>Uncommon</option>
          <option>Rare</option>
          <option>Epic</option>
          <option>Legendary</option>
        </select>

        <label htmlFor={descriptionId}>Description</label>
        <textarea
          id={descriptionId}
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor={priceId}>Price</label>
        <input
          type="number"
          id={priceId}
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          step="0.01"
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  )
}
