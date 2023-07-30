import { render, screen } from "@testing-library/react"
import Footer from "."

describe("Footer", () => {
  it("Renders correctly", async () => {
    // Arrange
    // Act
    render(<Footer />)

    // Assert
    expect(screen.getByText("© 2023 Blake Tarter")).toBeInTheDocument()
  })
})
