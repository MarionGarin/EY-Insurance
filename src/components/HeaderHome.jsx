import React from 'react';
import { Link } from 'react-router-dom';
import close_session from '../images/close_session.png';
import '../styles/header.css';
import home from '../images/home.png'
import { LoginContext } from '../context/LoginProvider';

const HeaderHome = () => {

    const { signOff } =React.useContext(LoginContext);

    return ( 
<section className="header-container">
    <div className="closure-box">
    <img className= "close_session" src={close_session} alt="Close session icon"  onClick={()=> signOff()} />
    </div>
    <div className="home-box">
        <Link to={"/home"}>
    <img className= "home" src={home} alt="Home icon" />
    </Link>
    </div>
</section>

    );
}

export default HeaderHome;