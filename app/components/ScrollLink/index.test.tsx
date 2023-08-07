import { render, screen } from "@testing-library/react"
import ScrollLink from "."

describe("ScrollLink", () => {
  it("Renders correctly", () => {
    // Arrange
    const children = "Test children"

    // Act
    render(<ScrollLink href="#foo">{children}</ScrollLink>)

    // Assert
    expect(screen.getByText(children)).toBeInTheDocument()
    expect(screen.getByText(children).tagName).toBe("A")
  })

  it("Renders children elements", () => {
    // Arrange
    const children = <p data-testid="1">Test children</p>

    // Act
    render(<ScrollLink href="#foo">{children}</ScrollLink>)

    // Assert
    expect(screen.getByText("Test children")).toBeInTheDocument()
    expect(screen.getByText("Test children")).toHaveAttribute(
      "data-testid",
      "1",
    )
  })

  it("Optionally adds className", () => {
    // Arrange
    const children = "Test children"
    const className = "test-class"

    // Act
    render(
      <ScrollLink href="#foo" className={className}>
        {children}
      </ScrollLink>,
    )

    // Assert
    expect(screen.getByText(children)).toHaveClass(className)
  })
})
