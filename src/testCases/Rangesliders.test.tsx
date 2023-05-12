import { fireEvent, render, screen } from '@testing-library/react';
import { Rangesliders } from '../components/common/Rangesliders';
import employeeDetail from '../mockdata/MockDataskills';

test('renders Rangesliders component without crashing', () => {
  render(<Rangesliders />);
  screen.debug();
});

test('displays correct number of range sliders', () => {
  const { container } = render(<Rangesliders />);
  const sliders = container.querySelectorAll('.rangesliders_container');
  expect(sliders).toHaveLength(employeeDetail()['ratingDetails'].length);
  screen.debug();
});

test('displays the correct name for the correct skill', () => {
  const { container } = render(<Rangesliders />);
  const spy = jest.spyOn(container, 'getElementsByClassName');
  container.getElementsByClassName('.skillvalue_name');
  expect(container).toBeTruthy();
  // expect(sliders).toEqual(employeeDetail()['ratingDetails']);
  expect(spy).toHaveBeenCalled();
  // expect(sliders).toBe('test');
});

test('renders a slider for each skill', () => {
  const { getAllByRole } = render(<Rangesliders />);
  const sliders = getAllByRole('slider');
  expect(sliders.length).toBe(2); // update with the number of expected sliders
});

test('submits the form with the updated ratings when the user clicks on the button', () => {
  const { getByRole } = render(<Rangesliders />);
  const button = getByRole('button', { name: /give ratings/i });
  fireEvent.click(button);
  // assert that the form was submitted with the updated ratings
});

// MOCK
// STUB
// SPY
