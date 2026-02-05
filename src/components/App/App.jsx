import { useEffect, useState } from 'react'
import style from './App.module.scss'
import Form from '../Form/Form'
import Header from '../Header/Header'
import { ProductList } from '../ProductList/ProductList'
import storage from '@/services/storage'
export default function App() {
	const {
		openDatabase,
		loadFromDatabase,
		addProductToDatabase,
		deleteProductFromDatabase
	} = storage
	const [products, setProducts] = useState(() => {
		return []
	})
	useEffect(() => {
		openDatabase().then(() => {
			loadFromDatabase().then(data => {
				setProducts(data)
			})
		})
	}, [])

	async function addProduct(newProduct) {
		const productWithId = {
			...newProduct,
			id: crypto.randomUUID()
		}
		await addProductToDatabase(productWithId)
		setProducts(prev => [...prev, productWithId])
	}

	async function deleteProduct(id) {
		await deleteProductFromDatabase(id)
		setProducts(prev => prev.filter(p => p.id !== id))
	}

	return (
		<>
			<div className={style.container}>
				<Header />
				<Form addProduct={addProduct} />
				<ProductList
					products={products}
					onDelete={deleteProduct}
				/>
			</div>
		</>
	)
}
