
export const Button = ({children = "Button", color ="Orange" }) => {
  return (
    <button style={{backgroundColor:color}}>{children}</button>
  )
}
