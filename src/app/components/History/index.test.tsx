import { render, screen } from "@testing-library/react"
import History from "."
import { resolvedComponent } from "@/app/utils/testUtils"

describe("History", () => {
  it("Renders correctly", async () => {
    // Arrange
    const HistoryResolved = await resolvedComponent(History, {})
    // Act
    render(<HistoryResolved />)

    // Assert
    expect(screen.getByText("My History")).toBeInTheDocument()
    expect(
      screen.getByText(
        /I\'ve had an interesting journey to get me to where I am now./,
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Crema - Senior Application Developer"),
    ).toBeInTheDocument()
  })
})
