import { jest } from "@jest/globals"
import { render, screen } from "@testing-library/react"
import Typer from "."
import { waitForX } from "../../utils/testUtils"

describe("Typer", () => {
  // low priority animation timings can be a bit flaky
  jest.retryTimes(10)

  it("Renders correctly initially", async () => {
    // Arrange
    const words = ["foo", "bar"]
    // Act
    render(<Typer words={words} animate={false} />)

    // Assert
    expect(screen.getByText("foo")).toBeInTheDocument()
  })

  it("Does not animate when animate is false", async () => {
    // Arrange
    const words = ["foo", "bar"]
    // Act
    render(<Typer words={words} animate={false} />)

    await waitForX(250)

    // Assert
    expect(screen.getByText("foo")).toBeInTheDocument()
  })

  it("Starts backspace after X ms", async () => {
    // Arrange
    const words = ["foo", "bar"]
    // Act
    render(
      <Typer
        words={words}
        options={{
          backspaceConstantTime: 5,
          backspaceRandomThreshold: 0,
          typingConstantTime: 5,
          typingRandomThreshold: 0,
          pauseTime: 10,
        }}
      />,
    )

    await waitForX(6)

    // Assert
    expect(screen.getByText("fo")).toBeInTheDocument()
  })

  it("Starts typing new word after X ms", async () => {
    // Arrange
    const words = ["foo", "bar"]
    // Act
    render(
      <Typer
        words={words}
        options={{
          backspaceConstantTime: 5,
          backspaceRandomThreshold: 0,
          typingConstantTime: 5,
          typingRandomThreshold: 0,
          pauseTime: 10,
        }}
      />,
    )

    await waitForX(31)

    // Assert
    expect(screen.getByText("b")).toBeInTheDocument()
  })

  xit("Starts typing original word after X ms", async () => {
    // Arrange
    const words = ["foo", "bar"]
    // Act
    render(
      <Typer
        words={words}
        options={{
          backspaceConstantTime: 5,
          backspaceRandomThreshold: 0,
          typingConstantTime: 5,
          typingRandomThreshold: 0,
          pauseTime: 10,
        }}
      />,
    )

    await waitForX(91)

    // Assert
    expect(screen.getByText("f")).toBeInTheDocument()
  })
})
