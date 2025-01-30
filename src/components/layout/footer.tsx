import { Link } from 'react-router-dom';
import React from 'react';
import MenuItems from '@/components/navigation/menu-items';
import { useQuery } from '@apollo/client';
import { Navigation, NavigationFirstDocument } from '@/__generated__/graphql';

export default function Footer() {
  const { data, loading } = useQuery(NavigationFirstDocument);
  return (
    <footer className="impkt-dark-bg">
      <div className="mi-invert-fix">
        <div className="container impkt-p-120-60">
          <div className="row justify-content-between">
            <div className="col-md-4 col-lg-4 impkt-mb-60">
              <div className="impkt-muted impkt-logo impkt-up impkt-mb-30">
                Impkt.
              </div>

              <p className="impkt-light-soft impkt-up impkt-mb-30">
                Subscribe our newsletter:
              </p>

              <form className="impkt-subscribe-form impkt-up">
                <label htmlFor="subscribe">
                  <input
                    id="subscribe"
                    type="text"
                    placeholder="Enter our email"
                  />
                </label>
                <button
                  type="submit"
                  className="impkt-button impkt-icon-button-sm "
                ></button>
              </form>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-end">
                <div className="col-md-6 col-lg-7">
                  <nav className="impkt-footer-menu impkt-mb-60">
                    {!loading && (
                      <MenuItems
                        items={(data?.navigations as Navigation[]) ?? []}
                      />
                    )}
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-between flex-sm-row-reverse">
            <div className="col-md-7 col-lg-6">
              <div className="row justify-content-between">
                <div className="col-md-6 col-lg-5 impkt-mb-60">
                  <h6 className="impkt-muted impkt-up impkt-mb-30">Cyprus</h6>
                  <p className="impkt-light-soft impkt-up">
                    76 Constantini Constantinou Paphos, Konia{' '}
                    <span className="impkt-no-wrap">+357 95119267</span>
                    <span className="impkt-no-wrap">+44 776585993</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6 impkt-mb-60">
              <div className="impkt-vert-between">
                <div className="impkt-mb-30">
                  <ul className="impkt-social-icons impkt-up">
                    <li>
                      <Link to="#." target="_blank" className="social-icon">
                        {' '}
                        <i className="far fa-circle"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#." target="_blank" className="social-icon">
                        {' '}
                        <i className="far fa-circle"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#." target="_blank" className="social-icon">
                        {' '}
                        <i className="far fa-circle"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#." target="_blank" className="social-icon">
                        {' '}
                        <i className="far fa-circle"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
                <p className="impkt-light-soft impkt-up">
                  © Copyright 2024 - Impkt.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
