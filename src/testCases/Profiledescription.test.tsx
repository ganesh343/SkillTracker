import { render } from '@testing-library/react';
import employeeDetails from '..//mockdata/MockDataskills';
import { Profiledescription } from '../components/common/Profiledescription';
import profileimg from '../skilltracker_assets/profile.svg';

test('renders without errors', () => {
  render(<Profiledescription />);
});

test('displays the correct employee name', () => {
  const { getByText } = render(<Profiledescription />);
  const employeeRatingData = employeeDetails();
  const employee = employeeRatingData.employeeDetails;
  const expectedName = `${employee.firstName} ${employee.lastName}`;
  expect(getByText(expectedName)).toBeInTheDocument();
});

test('displays the correct profile image', () => {
  const { getByRole } = render(<Profiledescription />);
  const profileImage = getByRole('img');
  expect(profileImage).toBeInTheDocument();
  expect(profileImage).toHaveAttribute('src', profileimg);
});

test('displays the correct sub-header text', () => {
  const { getByText } = render(<Profiledescription />);
  expect(
    getByText(/Rate what you feel is your comprehension of each skill and sub skills listed/i)
  ).toBeInTheDocument();
});
