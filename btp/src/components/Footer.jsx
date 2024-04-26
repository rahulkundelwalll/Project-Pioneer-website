import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsVisible(lastScrollPosition > currentScrollPosition || currentScrollPosition < 10);
      // console.log((lastScrollPosition > currentScrollPosition || currentScrollPosition < 10));
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <footer
      style={{
        position: 'fixed',
        left: 0,
        bottom: isVisible ? 0 : '-100px',
        width: '100%',
        backgroundColor: '#003f87',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
        transition: 'bottom 0.3s ease-in-out',
        zIndex: 9999 // Adjust z-index as needed
      }}
    >
      <div>
        NH-44, PO Nagrota, Jagti, Jammu and Kashmir 181221 | Phone: 0191 257 0381 | Email: <a href="mailto:cif@iitjammu.ac.in" style={{ color: '#fff' }}>cif@iitjammu.ac.in</a>
      </div>
      <div>
        &copy;2020 IIT Jammu. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
