import { render, screen } from "@testing-library/react"
import Section from "."

describe("Section", () => {
  it("Renders correctly", () => {
    // Arrange
    const children = "Test Title"

    // Act
    render(<Section data-testid="test-section">{children}</Section>)

    // Assert
    expect(screen.getByTestId("test-section")).toBeInTheDocument()
    expect(screen.getByTestId("test-section").tagName).toBe("SECTION")
  })

  it("Optionally adds className", () => {
    // Arrange
    const children = "Test title"
    const className = "test-class"

    // Act
    render(
      <Section data-testid="test-section" className={className}>
        {children}
      </Section>,
    )

    // Assert
    expect(screen.getByTestId("test-section")).toHaveClass(className)
  })

  it("Optionally chnages element", () => {
    // Arrange
    const children = "Test children"
    const element = "aside"

    // Act
    render(
      <Section data-testid="test-section" element={element}>
        {children}
      </Section>,
    )

    // Assert
    expect(screen.getByTestId("test-section").tagName).toBe("ASIDE")
  })
})
