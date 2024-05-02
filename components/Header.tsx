import Link from 'next/link'
import React from 'react'

const Header = () => {

    return (
        <nav className="navbar  navbar-expand-lg">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" href="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/register">Register</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header