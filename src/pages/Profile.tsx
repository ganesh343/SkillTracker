import { NavBar } from '../components/common/NavBar';
import { Rangesliders } from '../components/common/Rangesliders';
import { Profiledescription } from '../components/common/Profiledescription';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { employeeID } = useParams<{ employeeID: string }>();
  return (
    <div className="profile_section">
      <div className="Navbar_section">
        <NavBar title="My Profile" raterId={0} />
      </div>
      <div className=" profile_description_section">
        <Profiledescription />
      </div>
      <div className="skill_section">
        <div className="team_section">
          <p className="team_title">Team</p>
          <p className="team_name">E-Blast</p>
        </div>
        <div className=" vertical_line"></div>
        <div className="skillrating_section">
          <div className="rangesliders_section">
            <Rangesliders />
          </div>
        </div>
      </div>
      <p>{employeeID}</p>
    </div>
  );
};
export default Profile;
