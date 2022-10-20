import"./Header.css"




 const Header = () => {
  return (
    <div className="container">
    <div className="header">
      <img src="https://media.fenerbahce.org/FB/media/FB/Images/Logo/logo.png?ext=.png" alt="" className="fbimg" />
      <h1>Fenerbahçe Page</h1>
      <img src="https://media.fenerbahce.org/FB/media/FB/Images/Logo/logo.png?ext=.png" alt="" className="fbimg" />
    </div>

    <div className="ul ">
      <ul>
        <li><a href="#">Home</a> </li>
        <li><a href="#">Athletes</a> </li>
        <li><a href="#">Staff</a> </li>
        <li><a href="#">Fixture</a> </li>
        <li><a href="#">Contact</a> </li>
      </ul>
    </div>
        </div>
  )
}

export default Header;
