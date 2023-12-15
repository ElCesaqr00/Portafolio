import React, { useEffect, useState } from 'react'
import "./styles/HomePage.css"
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [text, setText] = useState("Cesar Montes")
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setText("Desarrollador Web Full Stack");
          const resetTimer = setTimeout(() => {
            setText("Cesar Montes");
          }, 3000);
          return () => clearTimeout(resetTimer);
        }, 3000);
        return () => clearTimeout(timer);
      }, [text]);

    return (
        <section className='homepage_class'>
            <article className='homepage_header'>
                <header>
                    <nav className='homepage_nav'>
                        <ul className='homepage_list'>
                            <li className='list_page'><Link className="list" to="/">Home</Link></li>
                            <li className='list_page'><Link className="list" to="/ProjectPage">Projects</Link></li>
                            <li className='list_page'><Link className="list" to="/UserInfoPage">About me</Link></li>
                            <li className='list_page'><Link className="list" to="/Contact">Contact</Link></li>
                        </ul>
                    </nav>
                </header>
            </article>
            <article className='homepage_body'>
                <article className='homepage_title-content'>
                    <h1 className='homepage_title'>{text}</h1>
                </article>
                <article className='homepage_icons'>
                <p className='homepage_text'>Hola! <span className="hompage_strong">soy Cesar Montes</span>, 
                un desarrollador web apasionado por crear sitios web atractivos
                y funcionales. Mis habilidades incluyen <span className='hompage_strong'>HTML, CSS, JavaScript, Node.js y bases de datos como MongoDB.</span> Siempre estoy al día con las últimas 
                tendencias para ofrecer soluciones modernas y efectivas.</p>
                </article>
                <article className='homepage_contact'>
                    <a href="https://github.com/ElCesaqr00" target='_blank'><img className='icon_social' src="/public/Social_Media/github.png" alt="" /></a>
                    <a href="mailto:cesarmontes0842@gmail.com" target='_blank'><img className='icon_social' src="/public/Social_Media/gmail.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/cesar-david-montes-serna-b62724262/" target='_blank'><img className='icon_social' src="/public/Social_Media/linkedin.png" alt="" /></a>
                    <a href="https://wa.me/3235289093" target='_blank'><img className='icon_social' src="/public/Social_Media/whatsapp.png" alt="" /></a>
                </article>
            </article>
        </section>
    )
}

export default HomePage