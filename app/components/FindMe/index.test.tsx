import { render, screen } from "@testing-library/react"
import FindMe from "."
import { resolvedComponent } from "../../utils/testUtils"

describe("FindMe", () => {
  it("Renders correctly", async () => {
    // Arrange
    const FindMeResolved = await resolvedComponent(FindMe, {})
    // Act
    render(<FindMeResolved />)

    // Assert
    expect(screen.getByText("Find me on the Internet")).toBeInTheDocument()
    expect(screen.getByText("GitHub")).toBeInTheDocument()
    expect(
      screen.getByText("https://github.com/blaketarter"),
    ).toBeInTheDocument()
  })
})
