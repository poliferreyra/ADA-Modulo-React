
export const Light = ({lightColor, idColor, setLightColor}) => {
  return (
    <div className={`light ${idColor === lightColor ? lightColor : "gray"}`} onClick={()=>setLightColor(idColor)}></div>
    // en el onClick le estoy diciendo que si el estado lightColor es = al id, se tiene que activar y ahi queremos que se le aplique el color
    // sino gris- con el className x la condicion si el id es igual al lightColor que le ponga la clase con ese color y sino gris
  )
}

