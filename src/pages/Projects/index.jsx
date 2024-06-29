import { ProjectsContainer, ProjectsContent } from "./styles";

import CardProject from "./components/CardProject";
import { projects } from "../../data/projetcts";
export default function Projects() {
  return (
    <ProjectsContainer>
      <ProjectsContent>
        {projects.map((projectData) => (
          <CardProject key={projectData.id} data={projectData} />
        ))}
      </ProjectsContent>
    </ProjectsContainer>
  );
}
