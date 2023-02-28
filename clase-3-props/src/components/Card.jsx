import { Button } from "./Button"

export const Card = ({title, img, description}) => {
  return (
    <div>
        <h2>{title}</h2>
        <img src={img} alt={title} width="200" />
        <p>{description}</p>
        <Button>Ver mas...</Button>
    </div>
  )
}
