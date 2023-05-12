export const employeeDetail = () => {
  return {
    employeeDetails: {
      firstName: 'Adonis',
      lastName: 'Wiegand',
      employeeID: 1,
      email: 'rossie@example.org',
      roleDesc: 'Developer',
      teamName: 'PMM Team'
    },
    ratingDetails: [
      {
        skillName: 'Java',
        skillId: 1,
        RatingId: 42,
        subSkills: [
          {
            subSkillId: 3,
            subSkillName: 'Java 8 Features',
            RatingId: 37,
            rating: '0'
          },
          {
            subSkillId: 2,
            subSkillName: 'core java',
            RatingId: 38,
            rating: '0'
          },
          {
            subSkillId: 1,
            subSkillName: 'Springboot',
            RatingId: 43,
            rating: '0'
          }
        ],
        Rating: '0',
        RaterName: 'Casandra Kerluke',
        RaterId: 2
      },
      {
        skillName: 'React',
        skillId: 5,
        RatingId: 33,
        subSkills: [
          {
            subSkillId: 7,
            subSkillName: 'Typescript',
            RatingId: 34,
            rating: '0'
          },
          {
            subSkillId: 6,
            subSkillName: 'Css',
            RatingId: 44,
            rating: '0'
          },
          {
            subSkillId: 5,
            subSkillName: 'HTML',
            RatingId: 35,
            rating: '0'
          },
          {
            subSkillId: 4,
            subSkillName: 'Javascript',
            RatingId: 36,
            rating: '0'
          }
        ],
        Rating: '0',
        RaterName: 'Casandra Kerluke',
        RaterId: 2
      }
    ]
  };
};

export default employeeDetail;
