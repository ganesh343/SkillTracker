import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
export const Peerreviewdescription = () => {
  return (
    <div>
      <div className="peer_reviewer_information">
        <div className="user_item">
          <FontAwesomeIcon icon={faCircleUser} size="2x"></FontAwesomeIcon>
        </div>
        <div>
          <p className="reviewer_name">
            <b>Mark Fish</b>
            <br></br>markfinnsh@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
