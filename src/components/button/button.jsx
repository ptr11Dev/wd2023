import './index.css'

const Button = ({
  children,
  colorType,
  disabled,
  onClick,
  small,
  style,
  type,
}) => {
  return (
    <button
      className={
        'button' +
        `${colorType === 'inverted' ? ' inverted' : ''}` +
        `${disabled ? ' disabled' : ''}` +
        `${small ? ' sm' : ''}`
      }
      style={style}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button