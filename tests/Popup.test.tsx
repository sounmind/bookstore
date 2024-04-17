import { render, screen } from "@testing-library/react";
import Popup from "../components/Popup";

test("when isVisible is true, children should be rendered.", () => {
  const isVisible = true;
  const targetText = "something";

  render(
    <Popup isVisible={isVisible} onClose={jest.fn()}>
      {targetText}
    </Popup>
  );

  expect(screen.getByRole("dialog")).toBeInTheDocument();
  expect(screen.getByText(targetText)).toBeInTheDocument();
});

test("when isVisible is false, children should not be rendered.", () => {
  const isVisible = false;
  const targetText = "something";

  render(
    <Popup isVisible={isVisible} onClose={jest.fn()}>
      {targetText}
    </Popup>
  );

  expect(screen.queryByRole("dialog")).toBeNull();
  expect(screen.queryByText(targetText)).toBeNull();
});
