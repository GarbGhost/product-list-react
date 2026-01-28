import "../components/ProductCard.css"
export const ProductCard = ({ title, discount, price, imageUrl }) => {
    const finalPrice = price - (price * discount)
    return (
        <li className="product-card">
            <img src={imageUrl} alt="" className="product-card__img" />
            <div className="product-card__price">
                {discount
                    ? (<span>{finalPrice}</span>)
                    : <span>{price}</span>
                }
                {discount ? (
                    <del>{price}</del>
                ) : null
                }
            </div>
            <h3 className="product-card__title">{title}</h3>
        </li>
    )
}