import Webimage from "../../assets/web.jpg"

export const Card = ({title ="Card Title", description, image, color }) =>{
    return(
        <div>
            <h3>{title}</h3>
            <img src={image || Webimage} alt="Card Image" width="150" />
            <p>{description}</p>
            <button style={{backgroundColor: color}}>Download</button>
        </div>
    )
}