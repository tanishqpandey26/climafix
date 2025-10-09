import React from 'react';
import "../styles/navbar.css";
import { useState } from "react";


function Navbar() {
  
    const [mobileActive, setMobileActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownClick = (index) => {
    if (window.innerWidth < 1024) {
      setOpenDropdown(openDropdown === index ? null : index);
    }
  };

  const handleMouseEnter = (index) => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown(index);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setOpenDropdown(null);
    }
  };

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Blog", link: "/blog" },
    {
      label: "Summit",
      link: "/summit",
      children: [
        { label: "Summit 2025", link: "/summit/2025" },
        { label: "Summit 2024", link: "/summit/2024" },
        { label: "Summit 2023", link: "/summit/2023" },
        { label: "Summit 2022", link: "/summit/2022" },
        { label: "Summit 2021", link: "/summit/2021" },
      ],
    },
    { label: "Gallery", link: "/gallery" },
    {
      label: "ClimaFix 500",
      link: "/climafix",
      children: 
      [
        { label: "Climate Innovations(CIS)", link: "/climafix/2025" },
        { label: "C500-Reports", link: "/climafix/2025" },
      ]
    },
    { label: "Increase", link: "/increase" },
  ];

  return (
    
     <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src="/home/logo/logo.png" alt="Logo" className="logo" />
        </a>
      </div>

      <ul className={`navbar-right ${mobileActive ? "active" : ""}`} id="mobileNav">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`dropdown ${openDropdown === index ? "open" : ""}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={item.link} onClick={() => handleDropdownClick(index)}>
              {item.label}
            </a>

            {item.children && (
              <ul className="dropdown-content">
                {item.children.map((child, i) => (
                  <li key={i}>
                    <a href={child.link}>{child.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <button
        className="mobile-menu-btn"
        id="mobileMenuBtn"
        onClick={() => setMobileActive(!mobileActive)}
      >
        ☰
      </button>
    </nav>
    
  );
}


export default Navbar;