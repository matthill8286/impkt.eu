import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Navigation, NavigationFirstDocument } from '@/__generated__/graphql';
import MenuItems from '@/components/navigation/menu-items';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { data, loading } = useQuery(NavigationFirstDocument);

  return (
    <div className={`impkt-menu-frame ${isOpen ? 'impkt-active' : ''}`}>
      <div className="impkt-frame-top">
        <Link to="/" className="impkt-logo">
          Impkt.
        </Link>
        <a className="impkt-number" href="tel:+35795119267">
          +357 9511 9267
        </a>
        <div
          className={`impkt-menu-btn ${isOpen ? 'impkt-active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
      {/* Side Menu */}
      <motion.div
        initial={{ x: '-100%', top: 0 }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'keyframes', stiffness: 70, damping: 20 }}
        className="container"
      >
        <div className="impkt-menu-content">
          <div className="row">
            <div className="col-xl-5">
              <nav className="impkt-main-menu" id="swupMenu">
                {!loading && data?.navigations && (
                  <MenuItems
                    items={(data?.navigations as Navigation[]) ?? []}
                    onMenuClick={() => toggleMenu()}
                  />
                )}
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
      </motion.div>
    </div>
  );
};

export default SideMenu;
