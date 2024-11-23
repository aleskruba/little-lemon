import { render, screen } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test('Renders the BookingForm labels', () => {
  render(
    <BookingForm
      booking={{ date: '', time: '', guests: 0, occasion: '' }}
      handleChange={() => {}}
      handleSubmit={() => {}}
      isDisabled={false}
      guestsLimit={false}
      availableTimes={[]}
    />
  );

  const dateLabel = screen.getByLabelText("Choose date");
  const timeLabel = screen.getByLabelText("Choose time");
  const guestsLabel = screen.getByLabelText("Number of guests");
  const occasionLabel = screen.getByLabelText("Occasion");

  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
});
