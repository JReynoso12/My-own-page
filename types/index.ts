export interface Skill {
  name: string;
  percentage: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  buildStatus: "complete" | "in-progress";
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  sectionId: string;
}
