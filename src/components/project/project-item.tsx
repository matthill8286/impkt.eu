import { Link } from 'react-router-dom';

export default function ProjectItem({
  project,
}: {
  project: {
    title: string;
    description: string;
    date: string;
    category: string;
    image: string;
    href: string;
    readMoreLabel?: string;
  };
}) {
  return (
    <div className="col-lg-12">
      <Link
        to={project.href}
        className="impkt-blog-card impkt-blog-card-hori impkt-more impkt-mb-60"
      >
        <div className="impkt-cover-frame impkt-up">
          <img src={project.image} alt="cover" />
        </div>
        <div className="impkt-post-descr">
          <div className="impkt-labels impkt-up impkt-mb-30">
            <div className="impkt-label impkt-upper impkt-accent">
              {project.category}
            </div>
            <div className="impkt-label impkt-upper">{project.date}</div>
          </div>
          <h4 className="impkt-up impkt-mb-30">{project.title}</h4>
          <p className="impkt-post-text impkt-up impkt-mb-30">
            {project.description}
          </p>
          <div className="impkt-link impkt-dark impkt-arrow-place impkt-up">
            <span>{project.readMoreLabel}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
