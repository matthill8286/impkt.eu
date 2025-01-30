import { Link } from 'react-router-dom';

interface BannerProps {
  description: string;
  buttonText: string;
  buttonLink: string;
  richTextTitle: string;
}

export default function Banner({
  description,
  richTextTitle,
  buttonText = 'Contact us',
  buttonLink = '/contact',
}: BannerProps) {
  return (
    <section className="impkt-soft-bg">
      <div className="container impkt-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <div
              dangerouslySetInnerHTML={{
                __html: description,
              }}
              className="impkt-subtitle impkt-subtitle-right impkt-subtitle-dark impkt-up"
            />
          </div>
        </div>
        <div className="impkt-center">
          <div
            className="impkt-mb-60"
            dangerouslySetInnerHTML={{
              __html: richTextTitle,
            }}
          ></div>
          <div className="impkt-up">
            <Link to={buttonLink} className="impkt-button">
              <span>{buttonText}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
