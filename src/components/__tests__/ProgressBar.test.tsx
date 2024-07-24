import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ProgressBar from "../ProgressBar";

describe("ProgressBar", () => {
  test("renders the ProgressBar component", () => {
    render(<ProgressBar progress={50} />);
    const progressBar = screen.getByTestId("progress");
    expect(progressBar).toBeInTheDocument();
  });

  test("sets the correct width based on progress prop", () => {
    render(<ProgressBar progress={50} />);
    const progressBar =screen.getByTestId("progress");
    expect(progressBar).toHaveStyle("width: 50%");
  });

  test("updates the width when progress prop changes", () => {
    const { rerender } = render(<ProgressBar progress={30} />);
    const progressBar = screen.getByTestId("progress");
    expect(progressBar).toHaveStyle("width: 30%");

    rerender(<ProgressBar progress={70} />);
    expect(progressBar).toHaveStyle("width: 70%");
  });

  test("applies correct styles to the progress bar", () => {
    render(<ProgressBar progress={50} />);
    const progressBar = screen.getByTestId("progress");
    expect(progressBar).toHaveStyle("height: 5px");
    expect(progressBar).toHaveStyle("background: red");
    expect(progressBar).toHaveStyle("transition: width 0.1s linear");
  });
});
