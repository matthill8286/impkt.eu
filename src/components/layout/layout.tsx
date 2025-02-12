import React, { type FC, type ReactElement } from 'react';
import { Outlet } from 'react-router';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface LayoutProps {
  children?: ReactElement;
}

const AppLayout: FC<LayoutProps> = (): ReactElement => {
  return (
    <div className="impkt-wrapper" id="top">
      <Header backToTopLabel="Back to top" />
      <div className="impkt-content">
        <div id="swupMain" className="impkt-main-transition">
          <Outlet />
        </div>
      </div>
      <Footer />
      <div className="impkt-hidden-elements">
        <div className="impkt-dodecahedron">
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="impkt-pentagon">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="impkt-arrow"
        >
          <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
        </svg>

        <svg
          width="250"
          viewBox="0 0 300 1404"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="impkt-lines"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
            className="impkt-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
            className="impkt-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
            className="impkt-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M300 1175H0V1174H300V1175Z"
            className="impkt-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
            className="impkt-move"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
            className="impkt-move"
          />
        </svg>
      </div>
    </div>
  );
};

export default AppLayout;
