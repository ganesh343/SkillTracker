import React, { useState } from 'react';
import { NotificationDetails } from '../../mockdata/MockDatanoti';
import Button from './Button';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type PopupNotificationBoxProps = {
  size: string;
  raterId: number;
};

export interface Root {
  notification: notification[];
}

export interface notification {
  raterId: number;
  employeeName: string;
  employeeId: number;
  raterName: string;
  expDate: string;
}

const Notificationbox = ({ size }: PopupNotificationBoxProps) => {
  const NotificationData = NotificationDetails();
  const [peerreview] = useState(NotificationData.notification);

  const handleClick = (employeeName: string) => {
    console.log(employeeName);
    window.location.reload();
  };

  return (
    <div className={`popup-notification-box ${size}`}>
      <nav className="navbar_notification_box">
        <div className="navbar_notification_title">Notifications</div>
        <div className="notification_container">
          <p className="notification_remainder">All</p>
          <span className="notification_count">{peerreview.length}</span>
        </div>
      </nav>
      <div className="peerreview">
        {peerreview.map((item) => (
          <div className="peerreview_row" key={item.raterId}>
            <div className="peerreview_cell">
              <div className="user_item">
                <FontAwesomeIcon icon={faCircleUser} size="2x" color=" #2c2c2c"></FontAwesomeIcon>
              </div>
              <div className="peerreviewer_name">
                <span className="peerreview_employeename">{item.employeeName}</span>
                <span className="expiry_date">{item.expDate}</span>
              </div>
            </div>
            <div className="peerreview_button">
              <a href="">
                <Button
                  className={'Noti_button'}
                  text={'Review'}
                  onClick={() => handleClick(item.employeeName)}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Notificationbox;
