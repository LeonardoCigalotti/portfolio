export type ProjectType = 'frontend' | 'backend' | 'mobile';

export interface Project {
  id: number,
  title: string,
  type: ProjectType,
  description: string,
  tech: string[],
  img: string,
  github: string,
  site?: string
}