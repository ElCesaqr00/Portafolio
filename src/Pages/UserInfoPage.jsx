import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/UserInfoPage.css"

const UserInfoPage = () => {
  return (
    <div className="Project">
      <article className="User_header">
        <header>
          <nav className="User_nav">
            <ul className="User_list">
              <li className="list_page">
                <Link className="list" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="list" to="/ProjectPage">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="list" to="/UserInfoPage">
                  About me
                </Link>
              </li>
              <li>
                <Link className="list" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </article>
      <section className='info-container'>
        <article className='info-img'>
          <div className='slider-container'>
            <input type="radio" id='img1' />
            <input type="radio" id='img2' />
            <input type="radio" id='img3' />

            <div className='cards'>
              <label className='card' htmlFor="img1">
                <img src="./public/photo/yo.jpg" alt="" />
              </label>
              <label className='card' htmlFor="img2">
                <img src="./public/photo/Matias.jpg" alt="" />
              </label>
              <label className='card' htmlFor="img3">
                <img src="./public/photo/pareja1.jpg" alt="" />
              </label>
            </div>



          </div>
        </article>
        <article className='info text'>

        </article>
      </section>
    </div>
  )
}

export default UserInfoPage