import { Link } from "react-router-dom"
import "./styles/HomePage.css"


const HomePage = () => {
  return (
    <>
  <header className="home_header">
    <nav >
      <ul className="home_nav">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/ProjectPage"}>Projects</Link></li>
        <li><Link to={"/UserInfoPage"}>Contact me</Link></li>
      </ul>
    </nav>
  </header>
  <section>
    <section>
<article></article>
<article></article>

    </section>
  </section>
      
    </>
  )
}

export default HomePage
