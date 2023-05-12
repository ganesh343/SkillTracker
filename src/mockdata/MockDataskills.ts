export const employeeDetail = () => {
  return {
    employeeDetails: {
      employeeID: 2,
      firstName: 'Kevin',
      lastName: 'Peterson',
      email: 'virginia@example.org',
      roleDesc: 'Data Analyst',
      teamName: 'Data Analytics',
      userName: 'user123',
      password: 'password'
    },
    ratingDetails: [
      // {
      //   skillName: 'Java',
      //   skillId: 1,
      //   RatingId: 1,
      //   Rating: '7',
      //   subskills: [
      //     {
      //       subSkillId: 3,
      //       subSkillName: 'Java 8 Features',
      //       RatingId: 31,
      //       rating: '7'
      //     },
      //     {
      //       subSkillId: 2,
      //       subSkillName: 'core java',
      //       RatingId: 32,
      //       rating: '8'
      //     },
      //     {
      //       subSkillId: 1,
      //       subSkillName: 'Springboot',
      //       RatingId: 33,
      //       rating: '9'
      //     }
      //   ]
      // },
      {
        skillName: 'React',
        skillId: 5,
        RatingId: 24,
        Rating: '8',
        subskills: [
          {
            subSkillId: 7,
            subSkillName: 'Typescript',
            RatingId: 27,
            rating: '6'
          },
          {
            subSkillId: 6,
            subSkillName: 'Css',
            RatingId: 28,
            rating: '7'
          },
          {
            subSkillId: 5,
            subSkillName: 'HTML',
            RatingId: 29,
            rating: '8'
          },
          {
            subSkillId: 4,
            subSkillName: 'Javascript',
            RatingId: 30,
            rating: '9'
          }
        ]
      },
      {
        skillName: 'Python',
        skillId: 153,
        RatingId: 156,
        Rating: '7',
        subskills: [
          {
            subSkillId: 378,
            subSkillName: 'DJanga',
            RatingId: 3190,
            rating: '7'
          },
          {
            subSkillId: 278,
            subSkillName: 'Flask',
            RatingId: 329,
            rating: '8'
          },
          {
            subSkillId: 1,
            subSkillName: 'CherryPy',
            RatingId: 335,
            rating: '9'
          }
        ]
      },
      {
        skillName: 'C++',
        skillId: 189,
        RatingId: 145,
        Rating: '7',
        subskills: [
          {
            subSkillId: 3167,
            subSkillName: 'OOP',
            RatingId: 31954,
            rating: '7'
          },
          {
            subSkillId: 287,
            subSkillName: 'Multithreading',
            RatingId: 32,
            rating: '8'
          },
          {
            subSkillId: 1678,
            subSkillName: 'Concurency',
            RatingId: 3355,
            rating: '9'
          }
        ]
      },
      {
        skillName: 'DB',
        skillId: 1677,
        RatingId: 1933,
        Rating: '7',
        subskills: [
          {
            subSkillId: 3677,
            subSkillName: 'MySql',
            RatingId: 3188,
            rating: '7'
          },
          {
            subSkillId: 22244,
            subSkillName: 'PgSql',
            RatingId: 3295,
            rating: '8'
          },
          {
            subSkillId: 1678,
            subSkillName: 'MongoDb',
            RatingId: 3396,
            rating: '9'
          }
        ]
      }
    ]
  };
};
export default employeeDetail;
