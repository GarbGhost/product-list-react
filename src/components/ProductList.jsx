import { ProductCard } from "../components/ProductCard"
import { products } from "../data/products"
import "../components/ProductList.css"
export const ProductList = () => {
    return (
        <ul className="product-list">
            {
                products.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        discount={product.discount}
                        imageUrl={product.imageUrl}
                    />
                ))}
        </ul>
    )
}