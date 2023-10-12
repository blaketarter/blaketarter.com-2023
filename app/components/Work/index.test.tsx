import { render, screen } from "@testing-library/react"
import Work from "."
import { resolvedComponent } from "../../utils/testUtils"

describe("Work", () => {
  it("Renders correctly", async () => {
    // Arrange
    const WorkResolved = await resolvedComponent(Work, {})
    // Act
    // Act
    render(<WorkResolved />)

    // Assert
    expect(screen.getByText("Work Examples")).toBeInTheDocument()
    expect(
      screen.getByText(/Due to the nature of most of my client work/),
    ).toBeInTheDocument()
    expect(screen.getByText("Work Examples")).toBeInTheDocument()
    expect(screen.getByText("blaketarter.com")).toBeInTheDocument()
    expect(screen.getByText("Almost Done")).toBeInTheDocument()
  })
})
