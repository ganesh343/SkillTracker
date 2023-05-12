import { FC } from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
// import employeeDetails from '../../MockDataskills';
interface SubSkillProps {
  arrayObjects: {
    subSkillId: number;
    subSkillName: string;
    RatingId: number;
    rating: string;
  }[];
  sliderValues: { [key: string]: number };
  onSubskillChange: (subskillName: string, rating: number) => void;
}
const Subskill = ({ arrayObjects, sliderValues, onSubskillChange }: SubSkillProps) => {
  const element = document.querySelector('.subskillslider');
  console.log(element?.innerHTML);
  return (
    <>
      {arrayObjects.map((skill) => (
        <div className="subskills_container" key={skill.subSkillId}>
          <div>
            <label className="subskillvalue_name">{skill.subSkillName}</label>
          </div>
          <div className="subskill_section">
            <div className="subskill_score">
              <p className="subskill_value">{sliderValues[skill.subSkillName]}</p>
            </div>
            <div className="subskillslider">
              <input
                className="subskill_range_one"
                type="range"
                min={0}
                max={10}
                name={skill.subSkillName}
                value={sliderValues[skill.subSkillName] ?? skill.rating}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  onSubskillChange(skill.subSkillName.toString(), value);
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Subskill;
