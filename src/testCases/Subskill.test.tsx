import Subskill from '../components/common/Subskill';
import { number } from 'yup';
import { render, fireEvent, screen } from '@testing-library/react';

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

const mockOnSubskillChange = jest.fn();
const mockSubSkillProps: SubSkillProps = {
  arrayObjects: [
    {
      subSkillId: 1,
      subSkillName: 'Skill 1',
      RatingId: 1,
      rating: '5'
    },
    {
      subSkillId: 2,
      subSkillName: 'Skill 2',
      RatingId: 2,
      rating: '7'
    }
  ],
  sliderValues: {
    'Skill 1': 5,
    'Skill 2': 7
  },
  onSubskillChange: mockOnSubskillChange
};

describe('Subskill', () => {
  it('renders subskill labels correctly', () => {
    render(<Subskill {...mockSubSkillProps} />);
    expect(screen.getByText('Skill 1')).toBeInTheDocument();
    expect(screen.getByText('Skill 2')).toBeInTheDocument();
  });

  it('renders subskill values correctly', () => {
    render(<Subskill {...mockSubSkillProps} />);
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('calls onSubskillChange correctly when slider value changes', () => {
    render(<Subskill {...mockSubSkillProps} />);
    const sliderOne = screen.getByRole('slider', { name: 'Skill 1' });
    fireEvent.change(sliderOne, { target: { value: '6' } });
    expect(mockOnSubskillChange).toHaveBeenCalledWith('Skill 1', 6);

    const sliderTwo = screen.getByRole('slider', { name: 'Skill 2' });
    fireEvent.change(sliderTwo, { target: { value: '8' } });
    expect(mockOnSubskillChange).toHaveBeenCalledWith('Skill 2', 8);
  });

  it('renders subskill name and value labels correctly', () => {
    render(<Subskill {...mockSubSkillProps} />);
    expect(screen.getByText('Skill 1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('Skill 2')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('calls onSubskillChange when value is changed by the slider', () => {
    render(<Subskill {...mockSubSkillProps} />);
    const sliderOne = screen.getByRole('slider', { name: 'Skill 1' });
    fireEvent.change(sliderOne, { target: { value: '9' } });
    expect(mockOnSubskillChange).toHaveBeenCalledWith('Skill 1', 9);
    //
    const sliderTwo = screen.getByRole('slider', { name: 'Skill 2' });
    fireEvent.change(sliderTwo, { target: { value: '4' } });
    expect(mockOnSubskillChange).toHaveBeenCalledWith('Skill 2', 4);
  });
});
