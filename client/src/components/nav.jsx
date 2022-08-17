import { NavLink, Link } from "react-router-dom"

export default function Nav({ isLoggedIn, player, handleLogOut }) {

  let authenticatedOptions
  if (isLoggedIn) {
    authenticatedOptions = (
      <nav className="nav-bar">
        <div>
          <Link to='/' id="home-btn"><img
            src="https://camo.githubusercontent.com/538cbb43ed3a4b074a3aa6532e2907f14afcc07cd408fe5a8b1b95f0ea17feed/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3565316638313839383861336164353562653235663034302f313537393632383833313137372d4c434a4250503148424b59324c364849454847582f636f7665725f70686f746f5f776974686f75745f736c6f67616e2e6a7067"
            alt="LFG"
            id="logo-nav"
          />
          </Link>
        </div>
        <div>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/groupcreation/'>Group Creation</NavLink>
          <NavLink to='/groups'>Group Page</NavLink>
          <Link onClick={handleLogOut} to="/">
            Sign Out
          </Link>
        </div>

      </nav>
    )
  }

  const publicOptions = (
    <nav className="nav-bar">
      <Link to='/' id="home-btn"><img
        src="https://camo.githubusercontent.com/538cbb43ed3a4b074a3aa6532e2907f14afcc07cd408fe5a8b1b95f0ea17feed/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3565316638313839383861336164353562653235663034302f313537393632383833313137372d4c434a4250503148424b59324c364849454847582f636f7665725f70686f746f5f776974686f75745f736c6f67616e2e6a7067"
        alt="LFG"
        id="logo-nav"
      /></Link>
      <div className="other-links">
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/register'>Sign Up</NavLink>
        <NavLink to='/groups'>Group Page</NavLink>
      </div>

    </nav>
  )

  return (
    <div>
      {!isLoggedIn ? publicOptions : authenticatedOptions}
    </div>
  )
}