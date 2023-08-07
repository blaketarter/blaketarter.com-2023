import { render, screen } from "@testing-library/react"
import Hero from "."
import { resolvedComponent } from "../../utils/testUtils"

describe("Hero", () => {
  it("Renders correctly", async () => {
    // Arrange
    // Act
    render(<Hero />)

    // Assert
    expect(
      screen.getByText((_, element) => {
        if (element?.textContent === "Hi, I’mBlake Tarter") return true
        return false
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByText("A Kansas City Based Typescript Developer"),
    ).toBeInTheDocument()
  })
})
