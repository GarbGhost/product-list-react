import { ProductCard } from '../ProductCard/ProductCard'
import style from './ProductList.module.scss'
export const ProductList = ({ products, onDelete  }) => {
	return (
		<ul className={style.productList}>
			{products.map(product => (
				<ProductCard
					key={product.id}
					id={product.id}
					image={product.image}
					price={product.price}
					discount={product.discount}
					description={product.description}
					onDelete={onDelete}
				/>
			))}
		</ul>
	)
}
