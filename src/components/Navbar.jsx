/**
 *  @copyright 2024 kyiithelord
 *  @license Apache-2.0
 */

/**
 * Node Module
 */

import PropTypes from 'prop-types';
import React, { useEffect, useRef, useCallback } from 'react'

// const Navbar = ({navOpen}) => {
//     const lastActiveLink =useRef();
//     const activeBox = useRef();

//     const navItems = [
//         {
//           label: 'Home',
//           link: '#home',
//           className: 'nav-link active',
//           ref: lastActiveLink
//         },
//         {
//           label: 'About',
//           link: '#about',
//           className: 'nav-link'
//         },
//         {
//           label: 'Work',
//           link: '#work',
//           className: 'nav-link'
//         },
//         {
//           label: 'Reviews',
//           link: '#reviews',
//           className: 'nav-link'
//         },
//         {
//           label: 'Contact',
//           link: '#contact',
//           className: 'nav-link md:hidden'
//         }
//       ];

//   return (
//     <nav className={ 'navbar'  + (navOpen ? 'active' : '')}>
//           {
//                 navItems.map(({label, link, className,ref}, key) => (
//             <a 
//                 href={link}
//                 key={key}
//                 ref={ref}
//                 className={className}
//                 onClick={null}
//             >
//                 {label}
//             </a>
//             ))
//           }

//         <div className='active-box' ref={activeBox}>

//         </div>

//     </nav>
//   )
// }

// Navbar.propTypes = {
//     navOpen: PropTypes.bool.isRequired
// };

// export default Navbar


// const Navbar = ({navOpen}) => {
//   const lastActiveLink = useRef();
//   const activeBox = useRef();
//   const initActiveBox = () => {
//     activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
//     activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
//     activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
//     activeBox.current.style.height = lastActiveLink.current.offsetHeight+ 'px';



//   }

//   useEffect(initActiveBox,[])
//   window.addEventListener('resize',initActiveBox);
//   const activeCurrentLink = (event) => {
//     lastActiveLink.current?.classList.remove('active');
//     event.target.classList.add('active');
//     lastActiveLink.current = event.target;

//     activeBox.current.style.top = event.target.offsetTop + 'px';
//     activeBox.current.style.left = event.target.offsetLeft + 'px';
//     activeBox.current.style.width = event.target.offsetWidth + 'px';
//     activeBox.current.style.height = event.target.offsetHeight+ 'px';

//   }
  
//   const navItems = [
//             {
//               label: 'Home',
//               link: '#home',
//               className: 'nav-link active',
//               ref: lastActiveLink
//             },
//             {
//               label: 'About',
//               link: '#about',
//               className: 'nav-link'
//             },
//             {
//               label: 'Work',
//               link: '#work',
//               className: 'nav-link'
//             },
//             {
//               label: 'Services',
//               link: '#services',
//               className: 'nav-link'
//             },
//             {
//               label: 'Contact',
//               link: '#contact',
//               className: 'nav-link md:hidden'
//             }
//           ];
    
//   return (
//     <nav className={'navbar ' + (navOpen ?  'active' : '')}>
//       {
//         navItems.map(({label,link,className,ref},key) =>  
//             (
//               <a href={link} key={key} ref={ref} className={className} onClick={activeCurrentLink}> {label} </a>
//             )
//       )
//       }
//       <div className="active-box" ref={activeBox}></div>
//     </nav>
//   )
// }

// Navbar.propTypes = {
//   navOpen:PropTypes.bool.isRequired
// }

// export default Navbar




const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  // Initialize activeBox position
  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  // Memoize the activeCurrentLink function using useCallback
  const activeCurrentLink = useCallback((event) => {
    // Remove active class from the last active link
    lastActiveLink.current?.classList.remove('active');
    
    // Add active class to the clicked link
    event.target.classList.add('active');
    lastActiveLink.current = event.target;

    // Read DOM properties
    const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = event.target;

    // Use requestAnimationFrame to batch DOM writes
    requestAnimationFrame(() => {
      if (activeBox.current) {
        activeBox.current.style.top = `${offsetTop}px`;
        activeBox.current.style.left = `${offsetLeft}px`;
        activeBox.current.style.width = `${offsetWidth}px`;
        activeBox.current.style.height = `${offsetHeight}px`;
      }
    });
  }, []);  // Empty dependency array ensures the function doesn't change unless needed

  // Initialize activeBox on mount and handle window resize
  useEffect(() => {
    // Set the first active link (Home)
    const firstNavItem = document.querySelector('.nav-link.active');
    lastActiveLink.current = firstNavItem;

    initActiveBox(); // Initialize on first render
    const handleResize = () => initActiveBox(); // Update on resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Empty dependency array ensures this effect runs only on mount and unmount

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link active' },
    { label: 'About', link: '#about', className: 'nav-link' },
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
          ref={key === 0 ? lastActiveLink : null}  // Set reference for the Home link
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
