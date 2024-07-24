import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import StoryContainer from "../StoryContainer";
import users from "../../config";

describe("StoryContainer", () => {

  test("shows stories when a user indicator is clicked", () => {
    render(<StoryContainer />);
    const userIndicator = screen.getByAltText(users[0].name);
    fireEvent.click(userIndicator);
    expect(screen.getByTestId("story")).toBeInTheDocument();
    expect(screen.getByText(users[0].name)).toBeInTheDocument();
  });

  test("navigates to next story on right click", () => {
    render(<StoryContainer />);
    const userIndicator = screen.getByAltText(users[0].name);
    fireEvent.click(userIndicator);
    const rightNav = screen.getByTestId("next");
    fireEvent.click(rightNav);
    expect(screen.getByAltText(users[1].name)).toBeInTheDocument();
  });

  test("navigates to previous story on left click", () => {
    render(<StoryContainer />);
    const userIndicator = screen.getByAltText(users[0].name);
    fireEvent.click(userIndicator);

    const rightNav = screen.getByTestId("next");
    fireEvent.click(rightNav);
    const leftNav = screen.getByTestId("prev");
    fireEvent.click(leftNav);
    expect(screen.getByAltText(users[0].name)).toBeInTheDocument();
  });

  test("closes stories when close button is clicked", () => {
    render(<StoryContainer />);
    const userIndicator = screen.getByAltText(users[0].name);
    fireEvent.click(userIndicator);

    const closeButton = screen.getByTestId("close");
    fireEvent.click(closeButton);
    expect(screen.queryByTestId("story")).not.toBeInTheDocument();
  });
});
