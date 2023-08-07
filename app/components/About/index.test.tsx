import { render, screen } from "@testing-library/react"
import About from "."
import { resolvedComponent } from "../../utils/testUtils"

describe("About", () => {
  it("Renders correctly", async () => {
    // Arrange
    const AboutResolved = await resolvedComponent(About, {})
    // Act
    render(<AboutResolved />)

    // Assert
    expect(screen.getByText("About Me")).toBeInTheDocument()
    expect(screen.getByAltText("Picture of Blake smiling")).toBeInTheDocument()
    expect(screen.getByText(/Hi\, I\'m Blake 👋/)).toBeInTheDocument()
  })
})
