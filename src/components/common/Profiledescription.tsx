import React, { useState } from 'react';
import profile from '../../skilltracker_assets/profile.svg';
import employeeDetails from '../../mockdata/MockDataskills';
export const Profiledescription = () => {
  const employeeRatingData = employeeDetails();
  const [employee] = useState(employeeRatingData['employeeDetails']);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(employee);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="profile_infomation">
          <div className="profile_image">
            <img className="" src={profile} />
          </div>
          <div className="profile_description">
            <h3 className="profile_name">
              {employee.firstName} {employee.lastName}
            </h3>
            <p className="profile_sub_header">
              Rate what you feel is your comprehension of each <br></br> skill and sub skills listed
              below.
            </p>
          </div>
        </div>
      </form>
    </>
  );
};
