import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import employeeDetail from '../../mockdata/MockDataskills';
import Subskill from './Subskill';
import Button from './Button';
export const Rangesliders = () => {
  const employeeRatingData = employeeDetail();
  const [employee, setEmployee] = useState<
    {
      skillName: string;
      skillId: number;
      RatingId: number;
      Rating: string;
      subskills: {
        subSkillId: number;
        subSkillName: string;
        RatingId: number;
        rating: string;
      }[];
    }[]
  >(employeeRatingData['ratingDetails']);
  const [sliderValues, setSliderValues] = useState<{ [key: string]: number }>({});
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>(() => {
    return employee.reduce((acc, skill) => {
      acc[skill.skillId] = false;
      return acc;
    }, {} as { [key: string]: boolean });
  });

  const toggleDropdown = (skillId: number | any) => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setIsVisible((prevState) => ({
      ...prevState,
      [skillId]: !isOpen
    }));
  };

  const handleChange = (skillName: string, rating: number) => {
    setSliderValues((prevState) => ({
      ...prevState,
      [skillName]: rating
    }));
  };
  useEffect(() => {
    if (employee) {
      const defaultValues = employee.reduce((acc, skill) => {
        acc[skill.skillName] = Number(skill.Rating);
        skill.subskills.forEach((subskill) => {
          acc[subskill.subSkillName] = Number(subskill.rating);
        });
        return acc;
      }, {} as { [key: string]: number });
      setSliderValues(defaultValues);
    }
  }, [employee]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedEmployee = employee.map((skill) => {
      const updatedSubskills = skill.subskills.map((subskill) => {
        return {
          ...subskill,
          rating: (sliderValues[subskill.subSkillName] ?? subskill.rating).toString()
        };
      });
      return {
        ...skill,
        Rating: (sliderValues[skill.skillName] ?? skill.Rating).toString(),
        subskills: updatedSubskills
      };
    });
    setEmployee(updatedEmployee);
  };

  useEffect(() => {
    console.log('employeedetails', employee);
  }, [employee]);
  return (
    <>
      <form className="form_class" onSubmit={handleFormSubmit}>
        <input
          type="hidden"
          name="employeeID"
          value={employeeRatingData.employeeDetails.employeeID}
        />
        {employeeRatingData['ratingDetails'].map((ratingDetail) => {
          return (
            <>
              <div className="rangesliders_container" key={`skill-${ratingDetail.skillId}`}>
                <div>
                  <label className="skillvalue_name">{ratingDetail.skillName}</label>
                </div>
                <div className="range_section">
                  <div className="range_score">
                    <p className="range_value">{sliderValues[ratingDetail.skillName]}</p>
                  </div>
                  <div className="rangesliders">
                    <input
                      className="skill_range_one"
                      type="range"
                      min={0}
                      max={10}
                      name={ratingDetail.skillName}
                      value={sliderValues[ratingDetail.skillName] ?? ratingDetail.Rating}
                      onChange={(e) => handleChange(ratingDetail.skillName, Number(e.target.value))}
                      data-testid="dropdown-button-1"></input>
                    <div>
                      <div
                        className="dropdown-header"
                        onClick={() => toggleDropdown(ratingDetail.skillId)}>
                        <span></span>
                        <FontAwesomeIcon
                          icon={faCircleChevronDown}
                          style={{ color: '#0f0f0f' }}
                          className={`arrow-icon ${
                            isVisible[ratingDetail.skillId] ? 'open' : ''
                          }`}></FontAwesomeIcon>
                      </div>
                      {isVisible[ratingDetail.skillId] === true && (
                        <div id={ratingDetail.skillId.toString()}>
                          <Subskill
                            arrayObjects={ratingDetail.subskills}
                            sliderValues={sliderValues}
                            onSubskillChange={(subskillName, rating) => {
                              setSliderValues((prev) => ({
                                ...prev,
                                [subskillName]: rating
                              }));
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        <div className="button_class">
          <Button className="profilerating_button" type="submit" text={'Submit'} />
        </div>
      </form>
    </>
  );
};
