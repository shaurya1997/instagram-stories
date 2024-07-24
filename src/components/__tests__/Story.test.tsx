import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Story from "../Story";

describe("Story Component", () => {
  test("renders image story", () => {
    const imageUrl = "https://example.com/story.jpg";
    render(<Story url={imageUrl} />);
    const image = screen.getByAltText("Story");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", imageUrl);
  });
});
