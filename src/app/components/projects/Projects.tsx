import { Container } from "../Container"
import { ProjectList } from "../PortfolioLists"

export const Projects = () => {
  return (
    <Container className="pb-12">
      <ProjectList showImages={false} />
    </Container>
  )
}
