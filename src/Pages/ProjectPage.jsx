import "./styles/ProjectPage.css"
import { Link } from "react-router-dom"


const ProjectPage = () => {
  return (
    <>
  <header>
    <nav>
      <ul>
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

export default ProjectPage
