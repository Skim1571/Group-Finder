import SignIn from '../components/signin'
export const Home = ({ player, setPlayer, isLoggedIn, setIsLoggedIn }) => {
  let notSignedIn = (
    <section className="home page">
      <div>
        <img
          src="https://camo.githubusercontent.com/538cbb43ed3a4b074a3aa6532e2907f14afcc07cd408fe5a8b1b95f0ea17feed/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3565316638313839383861336164353562653235663034302f313537393632383833313137372d4c434a4250503148424b59324c364849454847582f636f7665725f70686f746f5f776974686f75745f736c6f67616e2e6a7067"
          alt="LFG"
          id="logo"
        />
        <SignIn
          setIsLoggedIn={setIsLoggedIn}
          setPlayer={setPlayer}
          player={player}
        />
      </div>
    </section>
  )

  const signedIn = (
    <section className="home page">
      <div>
        <img
          src="https://camo.githubusercontent.com/538cbb43ed3a4b074a3aa6532e2907f14afcc07cd408fe5a8b1b95f0ea17feed/68747470733a2f2f696d616765732e73717561726573706163652d63646e2e636f6d2f636f6e74656e742f76312f3565316638313839383861336164353562653235663034302f313537393632383833313137372d4c434a4250503148424b59324c364849454847582f636f7665725f70686f746f5f776974686f75745f736c6f67616e2e6a7067"
          alt="LFG"
          id="logo"
        />
      </div>
    </section>
  )

  return <div>{!isLoggedIn ? notSignedIn : signedIn}</div>
}
