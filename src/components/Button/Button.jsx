import style from './Button.module.scss'
export default function Button({
	children,
	type = 'button',
	onClick,
	disabled = false,
	className,
	title,
	ariaLabel,
}) {
	return (
		<button
			type={type}
			className={`${style.button} ${className}`}
			onClick={onClick}
			title={title}
			disabled={disabled}
			aria-label={ariaLabel}
		>
			{children}
		</button>
	)
}
