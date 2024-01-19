import { render, screen } from "@testing-library/react"
import CaseStudy from "."

describe("CaseStudy", () => {
  it("Renders correctly", async () => {
    // Arrange
    const caseStudy = {
      name: "Test Project",
      description: ["Description 1", "Description 2"],
      tech: ["Foo", "Bar"],
      challenges: ["Test challenge 1", "Test challenge 2"],
    }

    // Act
    render(<CaseStudy {...caseStudy} />)

    // Assert
    expect(screen.getByText(caseStudy.name)).toBeInTheDocument()
    caseStudy.description.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument()
    })
    caseStudy.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
    caseStudy.challenges.forEach((challenge) => {
      expect(screen.getByText(challenge)).toBeInTheDocument()
    })
  })
})
