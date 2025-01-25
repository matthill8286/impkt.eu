import { Link } from 'react-router-dom';

interface LowerBannerProps {
  description: string;
}

export default function Banner({ description }: LowerBannerProps) {
  return (
    <section className="impkt-soft-bg">
      <div className="container impkt-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="impkt-subtitle impkt-subtitle-right impkt-subtitle-dark impkt-up">
              {description}
            </span>
          </div>
        </div>
        <div className="impkt-center">
          <h2 className="impkt-up impkt-mb-60">
            Ready to bring your <span className="impkt-thin">ideas to</span>{' '}
            life? <br /> We&#39;re{' '}
            <span className="impkt-thin">here to help</span>
          </h2>
          <div className="impkt-up">
            <Link to="/contact" className="impkt-button impkt-arrow-place">
              <span>Contact us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
