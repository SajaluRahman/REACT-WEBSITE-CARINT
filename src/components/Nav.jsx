import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative shadow">
      <div className="flex justify-between items-center h-20 px-4 md:px-6 lg:px-12">
        
        <div className="text-2xl font-bold">Carint</div>

        
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black text-3xl">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        
        <div className="hidden lg:flex space-x-14 mr-8 text-lg">
          <Link className="hover:text-cyan-500" to="/">HOME</Link>
          <Link className="hover:text-cyan-500" to="/Service">SERVICE</Link>
          <Link className="hover:text-cyan-500" to="/About">ABOUT</Link>
          <Link className="hover:text-cyan-500" to="/Contact">CONTACT US</Link>
          <Link className="hover:text-cyan-500" to="/Login">
            <FontAwesomeIcon icon={faUser} /> LOGIN
          </Link>
        </div>
      </div>

      
      <div
        className={`lg:hidden fixed top-16 left-0 h-screen w-64 bg-slate-400 text-white mt-[-8px] transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <nav className="flex flex-col space-y-4 mt-10 px-5 text-lg ">
          <Link className="hover:text-cyan-400" to="/" onClick={() => setIsMenuOpen(false)}>HOME</Link>
          <Link className="hover:text-cyan-400" to="/Service" onClick={() => setIsMenuOpen(false)}>SERVICE</Link>
          <Link className="hover:text-cyan-400" to="/About" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          <Link className="hover:text-cyan-400" to="/Contact" onClick={() => setIsMenuOpen(false)}>CONTACT US</Link>
          <Link className="hover:text-cyan-400" to="/Login" onClick={() => setIsMenuOpen(false)}>LOGIN</Link>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
