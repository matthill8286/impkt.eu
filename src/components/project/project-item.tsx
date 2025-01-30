import { Link } from 'react-router-dom';
import CustomRichText from '@/components/custom-rich-text';
import MediaRenderer from '@/components/media-renderer';
import { ProjectItemProps } from '@/components/project/project.interface';

export default function ProjectItem({
  project,
  readMoreLabel = 'Read more',
}: ProjectItemProps) {
  return (
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
            <div className="impkt-label impkt-upper">{project.date}</div>
          </div>
          <h4 className="impkt-up impkt-mb-30">{project.title}</h4>
          <CustomRichText content={project.content.json} />
          <div className="impkt-link impkt-dark  impkt-up">
            <span>{readMoreLabel}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
