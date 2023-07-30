import { render, screen } from "@testing-library/react"
import Hero from "."
import { resolvedComponent } from "@/app/utils/testUtils"

describe("Hero", () => {
  it("Renders correctly", async () => {
    // Arrange
    // Act
    render(<Hero />)

    // Assert
    expect(screen.getByText("Hi, I’m Blake Tarter")).toBeInTheDocument()
    expect(
      screen.getByText("A Kansas City Based Typescript Developer"),
    ).toBeInTheDocument()
  })
})
