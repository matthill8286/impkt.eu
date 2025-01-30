import { ProjectContainerProps } from '@/components/project/project.interface';
import PostLoader from '@/components/post-loader';
import ProjectItem from '@/components/project/project-item';

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
            <PostLoader loading={loading} key={project.id}>
              <ProjectItem project={project} readMoreLabel="Read more" />
            </PostLoader>
          ))}
        </div>
      </div>
    </section>
  );
}
