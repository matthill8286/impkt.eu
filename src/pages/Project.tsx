import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { projectQuery } from '@/queries/projects';

const Project: React.FC = (): React.ReactElement => {
  const params = useParams<{ id: string }>();

  const { loading, data, error } = useQuery(projectQuery, {
    variables: {
      id: params.id!,
    },
    skip: !params.id,
  });

  console.log({ loading, data, error });

  return (
    <div className="container">
      <div className="impkt-menu-content">
        <div className="row">
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
                    <h6 className="impkt-muted impkt-mb-30">Projects</h6>

                    <ul className="impkt-menu-list">
                      <li>
                        <a
                          href="property-one.html"
                          className="impkt-light-soft"
                        >
                          Property One
                        </a>
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
  );
};

export default Project;
