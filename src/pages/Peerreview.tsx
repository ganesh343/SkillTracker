import { Peerreviewbox } from '../components/common/Peerreviewbox';
import { NavBar } from '../components/common/NavBar';
import { Personalreviewbox } from '../components/common/Personalreviewbox';
import { ReactElement } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

interface ReviewInterface {
  header: string;
  description: string;
  componentName: ReactElement<[]>;
}

export const Peerreviewtest = () => {
  const [reviews, setReviews] = useState<ReviewInterface[]>([]);
  useEffect(() => {
    const tempReview: ReviewInterface[] = [
      {
        header: 'Peer Reviews',
        description: 'When assigned, please give each peer a fair and Honest Rating',
        componentName: <Peerreviewbox />
      },
      {
        header: 'Personal Reviews',
        description: 'This is where you can view any reviews done On your skills..',
        componentName: <Personalreviewbox />
      }
    ];
    setReviews(tempReview);
  }, []);
  return (
    <div className="Peerreview_section">
      <div className="Navbar_section">
        <NavBar title="Peer Reviews" raterId={0} />
      </div>
      {reviews.map((review: ReviewInterface) => {
        return (
          <div className="peerreview_section">
            <div className="peerreview_information">
              <h3 className="peerreview_header"> {review.header}</h3>
              <p className="peerreview_description">{review.description}</p>
            </div>
            <div className="peerreview_table">{review.componentName}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Peerreviewtest;
