import style from './ProductCard.module.scss'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import noImage from '/assets/no-image.svg'
const FALLBACK = noImage

export const ProductCard = ({
	description,
	discount,
	price,
	image,
	id,
	onDelete
}) => {
	const finalPrice = Math.round(price - (price * discount) / 100)

	const [imgSrc, setImgSrc] = useState(() => {
		if (!image) return FALLBACK
		if (typeof image === 'string') return image
		if (image instanceof Blob) return URL.createObjectURL(image)
		return FALLBACK
	})

	useEffect(() => {
		if (!(image instanceof Blob)) return
		const url = URL.createObjectURL(image)
		setImgSrc(url)
		return () => {
			URL.revokeObjectURL(url)
		}
	}, [image])
	const handleError = e => {
		e.currentTarget.onerror = null
		setImgSrc(FALLBACK)
	}
	return (
		<li className={style.productCard}>
			{/* <div className={style.buttonDeleteWrepper}> */}
				<Button
					className={style.buttonDeleteCard}
					title="Delete cart"
					onClick={() => onDelete?.(id)}
				>Удалить</Button>
			{/* </div> */}



			<div className={style.imageWrapper}>
				<img
					src={imgSrc}
					alt={description || 'Товар без названия'}
					className={style.image}
					loading="lazy"
					decoding="async"
					onError={handleError}
				/>
			</div>
			<div className={style.price}>
				{discount ? <span>{finalPrice}</span> : <span>{price}</span>}
				{discount ? <del>{price}</del> : null}
			</div>
			
			<div className={style.descriptionWrapper}>
			<h3 className={style.description}>{description}</h3>
			</div>

		</li>
	)
}
