import style from './Header.module.scss'
import Logo from '/assets/logo.svg'
export default function Header() {
	const now = new Date()
	return (
		<header className={style.header}>
			<img
				src={Logo}
				alt="LOGO"
			/>
			<h1>Магазин с карточками товаров</h1>
			<span>TIME: {now.toLocaleTimeString()}</span>
		</header>
	)
}
