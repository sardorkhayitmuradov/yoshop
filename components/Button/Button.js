const Button = ({className,  children, clickFunc}) => {
  return (
    <button className={className} >{children}</button>
  )
}

export default Button