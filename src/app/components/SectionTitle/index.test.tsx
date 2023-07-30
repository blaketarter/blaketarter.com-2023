import { render, screen } from "@testing-library/react"
import SectionTitle from "."

describe("Section Title", () => {
  it("Renders correctly", () => {
    // Arrange
    const children = "Test Title"

    // Act
    render(<SectionTitle>{children}</SectionTitle>)

    // Assert
    expect(screen.getByText(children)).toBeInTheDocument()
    expect(screen.getByText(children).tagName).toBe("H2")
  })

  it("Optionally adds className", () => {
    // Arrange
    const children = "Test title"
    const className = "test-class"

    // Act
    render(<SectionTitle className={className}>{children}</SectionTitle>)

    // Assert
    expect(screen.getByText(children)).toHaveClass(className)
  })
})
