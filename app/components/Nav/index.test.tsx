import { render, screen } from "@testing-library/react"
import Nav from "."
import { resolvedComponent } from "../../utils/testUtils"

describe("Nav", () => {
  it("Renders correctly", async () => {
    // Arrange
    // Act
    render(<Nav />)

    // Assert
    expect(screen.getByText("About")).toBeInTheDocument()
    expect(screen.getByText("History")).toBeInTheDocument()
    expect(screen.getByText("Work")).toBeInTheDocument()
    expect(screen.getByText("Contact")).toBeInTheDocument()
  })
})
