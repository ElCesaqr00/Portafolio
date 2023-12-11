import React, { useState } from 'react'
import "./styles/HomePage.css"
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [text, setText] = useState("Cesar Montes")
    
    setTimeout(() => {
        setText("Desarrollador Web Full Stack")
    }, 3000)

    return (
        <section className='homepage_class'>
            <article className='homepage_header'>
                <header>
                    <nav className='homepage_nav'>
                        <ul className='homepage_list'>
                            <li className='list_page'><Link className="list" to="/">Home</Link></li>
                            <li><Link className="list" to="/ProjectPage">Projects</Link></li>
                            <li><Link className="list" to="/UserInfoPage">About me</Link></li>
                            <li><Link className="list" to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
            </article>
            <article className='homepage_body'>
                <article className='homepage_title-content'>
                    <h1 className='homepage_title'>{text}</h1>
                </article>
                <article className='homepage_icons'>
                <p className='homepage_text'><span className="hompage_strong">Hola! </span>soy Cesar Montes, 
                un desarrollador web apasionado por crear sitios web atractivos
                y funcionales. Mis habilidades incluyen <span className='hompage_strong'>HTML, CSS, JavaScript, Node.js y bases de datos como MongoDB.</span> Siempre estoy al día con las últimas 
                tendencias para ofrecer soluciones modernas y efectivas.</p>
                </article>
                <article className='homepage_contact'></article>
            </article>
        </section>
    )
}

export default HomePage