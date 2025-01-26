import { Asset, Project } from '@/__generated__/graphql';
import { Link } from 'react-router-dom';

interface ProjectSwiperImagesProps {
  images: Asset[];
  projectDetails: Project;
}

export default function ProjectSwiperImages({ images, projectDetails }: ProjectSwiperImagesProps) {
  return (
    <div className="swiper-container impkt-portfolio-slider impkt-up">
      <div className="swiper-wrapper">
        {images.map((image: Asset, index) => (
          <div className="swiper-slide">
            <div className="impkt-portfolio-item impkt-slider-item" data-swiper-parallax="-30">
              <div className="impkt-cover-frame impkt-drag">
                <div className="impkt-cover" data-swiper-parallax-scale="1.3">
                  <img src={image.url} alt={image.altText ?? "cover"} />
                </div>
              </div>
              <div className="impkt-descr" data-swiper-parallax-x="104%" data-swiper-parallax-opacity="0">
                <div className="impkt-descr-text" data-swiper-parallax-y="100%" data-swiper-parallax-opacity="0">
                  <div className="impkt-labels impkt-mb-15">
                    <div className="impkt-label impkt-upper impkt-accent">{projectDetails.category.toUpperCase()}</div>
                    <div className="impkt-label impkt-upper">{projectDetails.date}</div>
                  </div>
                  <h5>Property One</h5>
                </div>
                <div data-swiper-parallax-y="120" data-swiper-parallax-opacity="0">
                  <Link to={projectDetails.id} className="impkt-button impkt-arrow-place">
                    <span>View Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}