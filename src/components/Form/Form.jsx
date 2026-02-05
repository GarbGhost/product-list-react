import { useForm } from 'react-hook-form'
import Button from '../Button/Button'
import style from './Form.module.scss'
import { useState } from 'react'
export default function Form({ addProduct }) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset
	} = useForm({
		mode: 'onChange'
	})
	const onSubmit = data => {
		const newData = {
			description: data.description,
			price: Number(data.price),
			discount: Number(data.discount),
			image: data.image[0]
		}
		addProduct(newData)
		reset()
	}
	const [symbolCount, setSymbolCount] = useState(0)
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={style.form}
		>
			{errors.image && <p style={{ margin: 0 }}>Выберете изображение</p>}
			<input
				className={style.formInputImage}
				accept="image/*"
				type="file"
				placeholder="sdsd"
				{...register('image', { required: 'Выберете изображение' })}
			/>
			{errors.price && <p style={{ margin: 0 }}>Введите цену</p>}
			<input
				className={style.formInputImage}
				type="number"
				{...register('price', { required: 'Введите цену' })}
				placeholder="Введите цену"
			/>
			<input
				className={style.formInputImage}
				type="number"
				placeholder="Введите скидку %"
				{...register('discount', {
					required: 'Скидка от 0% до 100%',
					min: { value: 0, message: 'Минимальная скидка 0%' },
					max: { value: 100, message: 'Максимальная скидка 100%' },
					valueAsNumber: true
				})}
			/>
			{errors.discount && (
				<span className={style.errors}>{errors.discount.message}</span>
			)}
			<div className={style.textareaContainer}>
				<textarea
					className={style.formInputImage}
					minLength={3}
					maxLength={100}
					id="description"
					rows={10}
					cols={10}
					{...register('description', {
						required: 'Введите Oписание товара',
						minLength: {
							value: 3,
							message: 'Минимум 3 символа '
						},
						maxLength: {
							value: 100,
							message: 'Максимум 100 символов '
						},
						onChange: e => setSymbolCount(e.target.value.length)
					})}
					placeholder="Введите описание"
				></textarea>
				<div className={style.symbol}>{symbolCount}/100</div>
			</div>
			{errors.description && (
				<span className={style.errors}>{errors.description.message}</span>
			)}
			<Button
				type="submit"
				disabled={!isValid}
				title="Добавить товар"
				className={style.formButtonAddCard}
				ariaLabel={'Добавить товар'}
			>
				Добавить Карточку
			</Button>
		</form>
	)
}
