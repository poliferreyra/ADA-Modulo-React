
import Logo from "../../assets/logo.jpg"

export const Header = ()=>{
    return <header>
        <img src={Logo} alt="Logo" width="60"/>
    <nav>
        <ul>
            <li>Home</li>
            <li>Contact</li> 
        </ul>
    </nav>
    </header>
}