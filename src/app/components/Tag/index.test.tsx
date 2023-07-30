import { render, screen } from "@testing-library/react"
import Tag from "."

describe("Tag", () => {
  it("Renders correctly", () => {
    // Arrange
    const children = "Test children"

    // Act
    render(<Tag>{children}</Tag>)

    // Assert
    expect(screen.getByText(children)).toBeInTheDocument()
    expect(screen.getByText(children).tagName).toBe("SPAN")
  })

  it("Renders children elements", () => {
    // Arrange
    const children = <p data-testid="1">Test children</p>

    // Act
    render(<Tag>{children}</Tag>)

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
    render(<Tag className={className}>{children}</Tag>)

    // Assert
    expect(screen.getByText(children)).toHaveClass(className)
  })

  it("Optionally chnages element", () => {
    // Arrange
    const children = "Test children"
    const element = "div"

    // Act
    render(<Tag element={element}>{children}</Tag>)

    // Assert
    expect(screen.getByText(children).tagName).toBe("DIV")
  })
})
