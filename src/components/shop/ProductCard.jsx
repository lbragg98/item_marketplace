import { Link } from "react-router-dom";
import "./Shop.css"

export default function ProductCard({ item }) {
    return ( 
        <div className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />

            <h3> {item.name}</h3>
            <p className="product-game">{item.game}</p>
            <p className="product-rarity">{item.rarity}</p>
            <p className="product-price">${item.price.toFixed(2)}</p>

            <Link to={`/shop/${item.id}`} className="details-link">
                View Details
            </Link>
        </div>
    )
}