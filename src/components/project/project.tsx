import { Link } from 'react-router-dom';
import { ProjectContainerProps } from '@/components/project/interface';
import CustomRichText from '@/components/custom-rich-text';
import MediaRenderer from '@/components/media-renderer';

export default function ProjectContainer({
  projects,
  loading,
}: ProjectContainerProps) {
  return (
    <section id="blog">
      <div className="container impkt-p-120-120">
        <div className="row">
          {loading && <p>Loading...</p>}
          {projects?.map((project) => (
            <div className="col-lg-12">
              <Link
                to={project.id}
                className="impkt-blog-card impkt-blog-card-hori impkt-more impkt-mb-60"
              >
                <div className="impkt-cover-frame impkt-up">
                  <MediaRenderer
                    url={project.coverImage?.url}
                    mimeType={project.coverImage?.mimeType}
                  />
                </div>
                <div className="impkt-post-descr">
                  <div className="impkt-labels impkt-up impkt-mb-30">
                    <div className="impkt-label impkt-upper impkt-accent">
                      {project.category}
                    </div>
                    <div className="impkt-label impkt-upper">
                      {project.date}
                    </div>
                  </div>
                  <h4 className="impkt-up impkt-mb-30">{project.title}</h4>
                  <CustomRichText content={project.content.json} />
                  <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
                    <span>Read more</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
