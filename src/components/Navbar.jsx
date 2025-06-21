/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  const activeCurrentLink = useCallback((event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = event.target;

    requestAnimationFrame(() => {
      if (activeBox.current) {
        activeBox.current.style.top = `${offsetTop}px`;
        activeBox.current.style.left = `${offsetLeft}px`;
        activeBox.current.style.width = `${offsetWidth}px`;
        activeBox.current.style.height = `${offsetHeight}px`;
      }
    });
  }, []);

  useEffect(() => {
    const firstNavItem = document.querySelector('.nav-link.active');
    if (firstNavItem) {
      lastActiveLink.current = firstNavItem;
      initActiveBox();
    }

    const handleResize = () => initActiveBox();

    const handleScrollHighlight = (e) => {
      const sectionId = e.detail;
      const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (targetLink) {
        activeCurrentLink({ target: targetLink });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('sectionChange', handleScrollHighlight);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('sectionChange', handleScrollHighlight);
    };
  }, [activeCurrentLink]);

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Skills', link: '#skills', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Services', link: '#services', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' },
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          ref={key === 0 ? lastActiveLink : null}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
