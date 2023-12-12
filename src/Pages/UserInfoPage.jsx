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
      </div>
  )
}

export default UserInfoPage