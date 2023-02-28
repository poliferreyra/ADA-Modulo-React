import "./Alert.css"
import {Button} from "../Button"

export const Alert = ({type = "", children}) => {
  return (
    <div className={`alert ${type}`}>
      {children}
      <Button color="lightblue">X</Button>
      </div>
  )
}
