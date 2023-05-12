import { NavBar, NavbarProps } from '../components/common/NavBar';
import { render, screen, fireEvent, getByText } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('NavBar component', () => {
  test('renders navbar title', () => {
    const title = 'My Nav Bar Title';
    const raterId = 123;
    render(<NavBar title={title} raterId={raterId} />);
    const navTitle = screen.getByText(title);
    expect(navTitle).toBeInTheDocument();
  });

  test('displays notification popup when notification icon is clicked', () => {
    const title = 'My Nav Bar Title';
    const raterId = 123;
    render(<NavBar title={title} raterId={raterId} />);
    const notificationIcon = screen.getByAltText('notification_center');
    fireEvent.click(notificationIcon);
    const notificationPopup = screen.getByText('Notifications');
    expect(notificationPopup).toBeInTheDocument();
  });
});
// it('renders the title and notification icon', () => {
//   render(<NavBar title="Test Title" raterId={0} />);
//   const titleElement = screen.getByText('Test Title');
//   expect(titleElement).toBeInTheDocument();
//   const notificationIcon = screen.getByAltText('notification_center');
//   expect(notificationIcon).toBeInTheDocument();
//   // click the notification icon
//   userEvent.click(notificationIcon);
//   // test if the notification box is shown after click
//   const notificationBox = screen.getByRole('dialog');
//   expect(notificationBox).toBeInTheDocument();
// });
