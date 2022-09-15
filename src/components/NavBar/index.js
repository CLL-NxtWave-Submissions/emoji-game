import './index.css'

const NavBar = props => {
  const {score, topScore, isGameOn} = props

  return (
    <nav className="navbar-container">
      <img
        className="emoji-game-brand-img"
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
      />
      {isGameOn && (
        <div className="score-container">
          <p className="score-text">Score: {score}</p>
          <p className="score-text">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
