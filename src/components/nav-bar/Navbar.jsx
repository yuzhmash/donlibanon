import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.sass';

const Navbar = () => {
  const { t } = useTranslation();
  const btnNames = ["plates", "wraps", "salads", "kidsMenu", "bucket", "friedChicken", "meza"];
  
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = btnNames.map(name => document.getElementById(name));
      const scrollPosition = window.scrollY + 148; // Include header offset

      const currentSection = sections.find(section => {
        return section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [btnNames]);

  const scrollToSection = (id) => {
    setActiveSection(id); // Set active section before scrolling

    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 148; // Fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`Element with ID ${id} not found.`);
    }
  };

  const btns = btnNames.map((elem, i) => {
    const isActive = activeSection === elem;
    console.log(`${elem} is active: ${isActive}`);
    return (
      <li key={i}>
        <button
          onClick={() => scrollToSection(elem)}
          className={isActive ? 'active' : ''}
        >
          {t(`navbar.${elem}`)}
        </button>
      </li>
    );
  });

  return (
    <nav className='navbar'>
      <div className="container">
        <div className="navbar__wrapper">
          <ul className='navbar__menu'>
            {btns}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
