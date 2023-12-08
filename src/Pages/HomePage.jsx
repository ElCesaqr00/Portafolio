import React, { useState } from 'react'
import "./styles/HomePage.css"
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [text, setText] = useState("Cesar Montes")

    setTimeout(() => {
        setText("Desarrollador Web Full Stack")
    }, 5000)

    return (
        <section className='homepage_class'>
            <article className='homepage_header'>
                <header>
                    <nav className='homepage_nav'>
                        <ul className='homepage_list'>
                            <li><Link className="list" to="/">Home</Link></li>
                            <li><Link className="list" to="/ProjectPage">Projects</Link></li>
                            <li><Link className="list" to="/UserInfoPage">About me</Link></li>
                            <li><Link className="list" to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
            </article>
            <article className='homepage_body'>
                <article className='homepage_title-content'>
                    <h1 className='homepage_title'>Soy {text}</h1>
                </article>
                <article className='homepage_icons'>

                </article>
                <article className='homepage_contact'></article>
            </article>
        </section>
    )
}

export default HomePage