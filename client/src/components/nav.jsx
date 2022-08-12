import { Link } from "react-router-dom"
export default function Nav(){
    return(
    <nav className="nav-bar">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/register'>Sign Up</Link>
    </nav>
    )
}