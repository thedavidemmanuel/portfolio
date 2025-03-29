// src/components/experienceData.ts

export type Experience = {
    id: string;
    company: string;
    title: string;
    url: string;
    date: string;
    responsibilities: string[];
  };
  
  const experienceData: Experience[] = [
    {
      id: 'Cerbertron',
      company: 'Cerbertron',
      title: 'Co-founder, Software Engineer',
      url: 'https://antwise.app',
      date: 'October 2024 - Present',
      responsibilities: [
        'Architecting and developing custom software solutions across web, mobile, and AI integration projects for businesses.',
        'Leading technical consulting on software architecture and AI implementation, guiding products from conception to deployment with a focus on scalability and performance.',
      ]
    },
    {
      id: 'Kupa',
      company: 'Kupa',
      title: 'Web Development Intern',
      url: 'https://www.kupaglobal.com/',
      date: 'January - May 2024',
      responsibilities: [
        'Developed and maintained corporate web infrastructure, integrating an A.T.S. system to create a candidate talent pool to streamline the recruitment process and improve the efficiency of talent acquisition. ',
      ]
    },
    {
      id: 'Bootcamp',
      company: 'Stackup Bootcamp',
      title: 'Co-ordinator/Lead Instructor',
      url: 'https://stackup9ja.dev',
      date: 'October 2023 - Present',
      responsibilities: [
        'Organize and lead an annual intensive programming bootcamp for undergraduate students in Nigeria, building a pipeline of skilled developers.',
        'Secure funding to provide internet connectivity support for participants, removing a critical barrier to technology education in Africa.',
      ]
    },
    {
      id: 'ALU',
      company: 'African Leadership University',
      title: 'Course Assistant, Data Science Short Course',
      url: 'https://www.alueducation.com/',
      date: 'September 2023',
      responsibilities: [
        'Assisted a visiting expert in facilitating a Data Science course covering data analysis, visualization, and mining.',
        'Played a key role in enhancing participants knowledge of SQL and Python, leading to improved comprehension and skill application. ',
        'Provided personalized support to students, addressing their questions and challenges, and fostering a collaborative learning environment.',
      ]
    },
    {
      id: 'GLP',
      company: 'Global Leaders Program',
      title: 'Participant',
      url: 'https://www.carnegiefoundation.org/blog/meet-the-2023-global-leadership-program-cohort/',
      date: 'July - August 2023',
      responsibilities: [
        'Selected among 20 distinguished students at the African Leadership University for a one-month program to learn and explore innovation strategies through industrial visits to leading Silicon Valley tech companies, including Netflix, Google, Amazon, OpenAI, Ideo, Uber, Lyft, etc.  ',
        'Engaged in intensive sessions on tech innovation, design thinking, entrepreneurship, and leadership, gaining invaluable insights from interactions with top industry leaders and entrepreneurs, including Sheryl Sandberg, Reed Hastings, Astro Teller, and other notable leaders. '
      ]
    }
  ];
  
  export default experienceData;