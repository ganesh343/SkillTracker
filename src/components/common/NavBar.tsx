import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import notification from '../../skilltracker_assets/notifcation center.svg';
import Notificationbox from './Notificationbox';

export interface NavbarProps {
  title: string;
  raterId: number;
}

export const NavBar = ({ title }: NavbarProps) => {
  const [showNotifPopup, setShowNotifPopup] = useState(false);
  const handleNotifPopupClick = () => {
    setShowNotifPopup(!showNotifPopup);
  };

  return (
    <>
      <nav className="navbar">
        <div className=" navbar_title">{title}</div>
        <div className="navicon_elementone">
          <FontAwesomeIcon
            icon={faCircleUser}
            size="sm"
            style={{ color: '#2c2c2c' }}
            className="navicon_image"
          />
        </div>
        <div className="navicon_elemnettwo">
          <div className="notification_center">
            <img className="noti_center" src={notification} onClick={handleNotifPopupClick}></img>
            {showNotifPopup && <Notificationbox size="small" raterId={0} />}
            <div className="notification_circle">1</div>
          </div>
        </div>
      </nav>
    </>
  );
};
