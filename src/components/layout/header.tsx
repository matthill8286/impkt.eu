import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { NavigationFirstDocument } from '@/__generated__/graphql';
import SideMenu from '@/components/navigation/menu';

export function Header({
  backToTopLabel = 'Back to top',
}: {
  backToTopLabel: string;
}) {
  const { data, loading, error } = useQuery(NavigationFirstDocument);
  return (
    <>
      <div className="impkt-ball">
        <span className="impkt-icon-1">
          <svg viewBox="0 0 128 128">
            <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
          </svg>
        </span>
        <div className="impkt-more-text">More</div>
        <div className="impkt-choose-text">Choose</div>
      </div>

      {/*<Preloader*/}
      {/*  phase1="Pioneering"*/}
      {/*  phase2="Creative"*/}
      {/*  phase3="Excellence"*/}
      {/*  brandText="impkt.eu"*/}
      {/*/>*/}

      <div className="impkt-progress-track">
        <div className="impkt-progress"></div>
      </div>

      <SideMenu />

      <div className="impkt-curtain"></div>

      <div className="impkt-frame">
        <div className="impkt-frame-top">
          <Link to="/" className="impkt-logo">
            Impkt.
          </Link>
          <div className="impkt-menu-btn">
            <span></span>
          </div>
        </div>
        <div className="impkt-frame-bottom">
          <div className="impkt-current-page"></div>
          <div className="impkt-back-to-top">
            <a href="#top" className="impkt-link impkt-dark ">
              <span>{backToTopLabel}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
