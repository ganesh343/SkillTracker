import { NavBar } from '../../components/common/NavBar';
import { useNavigate } from 'react-router-dom';
import { Rangesliders } from '../../components/common/Rangesliders';
import { Profiledescription } from '../../components/common/Profiledescription';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Test = () => {
  const { employeeID } = useParams<{ employeeID: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authorized to access the page
    const token = localStorage.getItem('jwtToken');
    console.log(token);
    if (!token) {
      navigate('/login');
      //   // Redirect to login page if not authorized
    }
  }, []);

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
export default Test;
