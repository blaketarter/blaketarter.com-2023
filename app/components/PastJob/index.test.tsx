import { render, screen } from "@testing-library/react"
import PastJob from "."

describe("PastJob", () => {
  it("Renders correctly", async () => {
    // Arrange
    const pastJob = {
      title: "Test Title",
      company: "Test Company",
      dates: "Jan 2001 - Feb 2001",
      text: "This is a test job",
      tech: ["foo", "bar", "baz"],
    }

    // Act
    render(<PastJob {...pastJob} />)

    // Assert
    expect(screen.getByText(pastJob.title)).toBeInTheDocument()
    expect(screen.getByText(pastJob.company)).toBeInTheDocument()
    expect(screen.getByText(pastJob.dates)).toBeInTheDocument()
    expect(screen.getByText(pastJob.text)).toBeInTheDocument()
    pastJob.tech.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })
})
