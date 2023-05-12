import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { PeerreviewDeatils } from '../../mockdata/MockDatatest';
import { useState } from 'react';

export interface TaskAssigned {
  employeeEmail: string;
  firstName: string;
  lastName: string;
  dateAssigned: string;
  skillsToRate: string;
}

export const Peerreviewbox = () => {
  const employeeRatingData = PeerreviewDeatils();
  const [peerreview] = useState(employeeRatingData['taskAssigned']);
  return (
    <>
      <div className="peer_review_box">
        <div className="review_col0">
          <div className="reviewer_name_col">
            <p className="reviewer_name_tag">Name</p>
          </div>
        </div>
        <div className="review_row0">
          <div className="review_date">
            <p className="reviewer_date_tag">Date Assigned</p>
          </div>
          <div className="review_score">
            <p className="reviewer_score_tag">Skills to be rated</p>
          </div>
        </div>
        {peerreview.map((peer) => {
          return (
            <>
              <div className="peer-review">
                <div className="review_col1">
                  <div className="reviewer_name_col">
                    <p className="reviewer_title">Name</p>
                    <div className="peer_reviewer_information">
                      <div className="user_item">
                        <FontAwesomeIcon
                          icon={faCircleUser}
                          size="2x"
                          color="black"></FontAwesomeIcon>
                      </div>
                      <div>
                        <p className="reviewer_name">
                          <b>
                            {peer.firstName} {peer.lastName}
                          </b>
                          <span>{peer.employeeEmail}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review_row">
                  <div className="review_date">
                    <p className="date_title">Date</p>
                    {peer.dateAssigned}
                  </div>
                  <div className="review_score">
                    <p className="score_title">Skills to be rated</p>
                    {peer.skillsToRate}
                  </div>
                  <div className="button_col">
                    <button type="submit" className="review_button">
                      Give ratings
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
