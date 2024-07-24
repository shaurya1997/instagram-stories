// src/components/__tests__/UserIndicator.test.tsx

import React from "react";
import { render, fireEvent,screen} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import UserIndicator from "../UserIndicator";

describe("UserIndicator Component", () => {
  const mockOnClick = jest.fn();
  const userProps = {
    name: "User 1",
    profilePicture: "https://example.com/profile.jpg",
    onClick: mockOnClick
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test("renders user's profile picture", () => {
      render(<UserIndicator {...userProps} />);
    const profileImage = screen.getByAltText("User 1");
    expect(profileImage).toBeInTheDocument();
    expect(profileImage).toHaveAttribute("src", userProps.profilePicture);
  });
  test("calls onClick when profile picture is clicked", () => {
    render(<UserIndicator {...userProps} />);
    const profileImage = screen.getByAltText("User 1");
    fireEvent.click(profileImage);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
