import React from "react";
import "./styles/ProjectPage.css";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  return (
    <div className="Project">
      <article className="ProjectPage_header">
        <header>
          <nav className="ProjectPage_nav">
            <ul className="ProjectPage_list">
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
  );
};

export default ProjectPage;
