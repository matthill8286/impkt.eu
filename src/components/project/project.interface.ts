import { Project } from '@/__generated__/graphql';

export interface ProjectContainerProps {
  projects: Project[];
  loading: boolean;
}

export interface ProjectItemProps {
  project: Project;
  readMoreLabel: string;
}
