import { Outlet, Link } from "react-router-dom";
import "./Layout.css"; 
import React, { useState } from "react";

const Layout = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className={isOpen ? "isOpen" : ""}> 
            <button onClick={() => setIsOpen( !isOpen)}>&#8801;</button>
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/Services">Services</Link>
                </li>
                <li>
                    <Link to ="/Portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to ="/Blog">Blog</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>

    );
};

export default Layout;