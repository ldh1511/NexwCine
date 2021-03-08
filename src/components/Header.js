import React, { useRef } from 'react';
import logo from './../img/logo (2).png';
import { NavLink } from 'react-router-dom';
const Header = () => {
    const ref = useRef();
    const handleClick = () => {
        ref.current.classList.toggle("active");
    }
    return (
        <header>
            <div className='logo-box'>
                <NavLink to='/'><img src={logo} alt=""></img>
                </NavLink>
            </div>
            <ul className='header-nav'>
                <li>
                    <NavLink to='/'>Trang chủ</NavLink>
                </li>
                <li>
                    <NavLink to='/film-schedule/movie-showtimes'>Lịch chiếu</NavLink>
                </li>
                <li><NavLink to='/cinema'>Hệ thống rạp</NavLink> </li>
                <li>Khuyến mãi | Sự kiện</li>
            </ul>
            <div className="right-menu" >
                <i className="fas fa-bars" onClick={handleClick}></i>
                <ul ref={ref} className="right-menu-ul">
                    <li onClick={handleClick}>
                        <i className="far fa-circle icon"></i>
                        <NavLink to='/'>Trang chủ</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <i className="far fa-circle icon"></i>
                        <NavLink to='/film-schedule/movie-showtimes'>Lịch chiếu</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <i className="far fa-circle icon"></i>
                        <NavLink to='/cinema'>Hệ thống rạp</NavLink>
                    </li>
                    <li onClick={handleClick}>
                        <i className="far fa-circle icon"></i>
                    Khuyến mãi | Sự kiện
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;