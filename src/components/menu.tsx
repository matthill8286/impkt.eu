import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuItemClick = () => setIsOpen(false);

  return (
    <div className={`impkt-frame ${isOpen ? 'impkt-active' : ''}`}>
      <div className="impkt-frame-top">
        <Link to="/" className="impkt-logo">
          Impkt.
        </Link>
        <div onClick={toggleMenu} className="impkt-menu-btn">
          <span></span>
        </div>
      </div>
      {/* Side Menu */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', stiffness: 70, damping: 20 }}
        className="impkt-menu-frame"
      >
        <div className={`impkt-frame-top`}>
          <Link to="/" className="impkt-logo">
            Impkt.
          </Link>
          <div className="impkt-menu-btn">
            <span></span>
          </div>
        </div>
        <div className="container">
          <div className="impkt-menu-content">
            <div className="row">
              <div className="col-xl-5">
                <nav className="impkt-main-menu" id="swupMenu">
                  <ul>
                    <li>
                      <Link to="/" onClick={handleMenuItemClick}>
                        Homepage
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects" onClick={handleMenuItemClick}>
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" onClick={handleMenuItemClick}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/team" onClick={handleMenuItemClick}>
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={handleMenuItemClick}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-xl-7">
                <div className="impkt-menu-right-frame">
                  <div className="impkt-animation-in">
                    <div className="impkt-animation-frame">
                      <div
                        className="impkt-animation impkt-position-1 impkt-scale"
                        data-value-1="2"
                        data-value-2="2"
                      ></div>
                    </div>
                  </div>
                  <div className="impkt-menu-right">
                    <div className="row">
                      <div className="col-lg-8 impkt-mb-60">
                        <h6 className="impkt-muted impkt-mb-30">Layout</h6>

                        <ul className="impkt-menu-list">
                          <li>
                            <Link
                              to="property-one.html"
                              className="impkt-light-soft"
                            >
                              Property One
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="impkt-divider impkt-mb-60"></div>
                    <div className="row justify-content-between">
                      <div className="col-lg-4 impkt-mb-60">
                        <h6 className="impkt-muted impkt-mb-30">Cyprus</h6>

                        <p className="impkt-light-soft impkt-up">
                          76 Constantini Constantinou Paphos, Konia{' '}
                          <span className="impkt-no-wrap">+357 95119267</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <div
          className={`impkt-curtain ${isOpen && 'impkt-active'}`}
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default SideMenu;
