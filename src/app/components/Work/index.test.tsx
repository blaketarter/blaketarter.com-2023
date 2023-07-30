import { render, screen } from "@testing-library/react"
import Work from "."
import { resolvedComponent } from "@/app/utils/testUtils"

describe("Work", () => {
  it("Renders correctly", async () => {
    // Arrange
    // Act
    render(<Work />)

    // Assert
    expect(screen.getByText("Work Examples")).toBeInTheDocument()
    expect(
      screen.getByText(/Due to the nature of most of my client work/),
    ).toBeInTheDocument()
  })
})
