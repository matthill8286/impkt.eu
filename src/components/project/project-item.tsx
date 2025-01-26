import { Link } from 'react-router-dom';
import { Project } from '@/__generated__/graphql';
import CustomRichText from '@/components/custom-rich-text';

export default function ProjectItem({
  project,
  readMoreLabel,
}: {
  project: Project;
  readMoreLabel: string;
}) {
  return (
    <div className="col-lg-12">
      <Link
        to={project.id}
        className="impkt-blog-card impkt-blog-card-hori impkt-more impkt-mb-60"
      >
        <div className="impkt-cover-frame impkt-up">
          <img src={project.coverImage?.url} alt="cover" />
        </div>
        <div className="impkt-post-descr">
          <div className="impkt-labels impkt-up impkt-mb-30">
            <div className="impkt-label impkt-upper impkt-accent">
              {project.category}
            </div>
            <div className="impkt-label impkt-upper">{project.date}</div>
            <div className="impkt-label impkt-upper">
              {project.author?.name}
            </div>
          </div>
          <h4 className="impkt-up impkt-mb-30">{project.title}</h4>
          <CustomRichText content={project.content.json} />
          <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
            <span>{readMoreLabel}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
