import { Link } from 'react-router-dom';
import { ProjectSwiperImagesProps } from '@/components/swiper-images/interface';

export default function ProjectSwiperImages({
  projectDetails,
}: ProjectSwiperImagesProps) {
  return (
    <div className="swiper-container impkt-portfolio-slider impkt-up">
      <div className="swiper-wrapper">
        {projectDetails.map((project) => (
          <div className="swiper-slide">
            <div
              className="impkt-portfolio-item impkt-slider-item"
              data-swiper-parallax="-30"
            >
              <div className="impkt-cover-frame impkt-drag">
                <div className="impkt-cover" data-swiper-parallax-scale="1.3">
                  {project.coverImage?.url && (
                    <img src={project.coverImage.url} alt="cover" />
                  )}
                </div>
              </div>
              <div
                className="impkt-descr"
                data-swiper-parallax-x="104%"
                data-swiper-parallax-opacity="0"
              >
                <div
                  className="impkt-descr-text"
                  data-swiper-parallax-y="100%"
                  data-swiper-parallax-opacity="0"
                >
                  <div className="impkt-labels impkt-mb-15">
                    <div className="impkt-label impkt-upper impkt-accent">
                      {project.category}
                    </div>
                    <div className="impkt-label impkt-upper">
                      {project.date}
                    </div>
                  </div>
                  <h5>{project.title}</h5>
                </div>
                <div
                  data-swiper-parallax-y="120"
                  data-swiper-parallax-opacity="0"
                >
                  <Link
                    to={project.id}
                    className="impkt-button impkt-arrow-place"
                  >
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
