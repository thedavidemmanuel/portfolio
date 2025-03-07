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
      id: 'Antwise',
      company: 'Antwise',
      title: 'Lead Engineer',
      url: 'https://antwise.app',
      date: 'May 2018 - Present',
      responsibilities: [
        'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
        'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
        'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
        'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
      ]
    },
    {
      id: 'Kupa',
      company: 'Kupa',
      title: 'UI Engineer',
      url: 'https://apple.com',
      date: 'July 2017 - April 2018',
      responsibilities: [
        'Developed and maintained features for Apple Music web application using Ember.js',
        'Collaborated with design and product teams to create intuitive user interfaces',
        'Optimized application performance and addressed cross-browser compatibility issues',
        'Participated in code reviews and contributed to internal component libraries'
      ]
    },
    {
      id: 'scout',
      company: 'African Leadership University',
      title: 'Studio Developer',
      url: 'https://scout.camd.northeastern.edu/',
      date: 'January 2017 - June 2017',
      responsibilities: [
        'Worked with a team of student designers and developers to create digital solutions for real-world clients',
        'Built and shipped the new website for Scout\'s design studio using WordPress',
        'Assisted in teaching workshops for design and development students',
        'Developed custom WordPress themes and plugins to meet client requirements'
      ]
    },
    {
      id: 'starry',
      company: 'Starry',
      title: 'Software Engineer Co-op',
      url: 'https://starry.com',
      date: 'July 2016 - December 2016',
      responsibilities: [
        'Built and shipped features for Starry\'s customer-facing web application using Angular',
        'Engineered and maintained internal tools for the customer support team',
        'Worked with the product team to design and implement new features',
        'Conducted unit and integration testing for application stability'
      ]
    },
    {
      id: 'mullenlowe',
      company: 'MullenLowe',
      title: 'Creative Technologist Co-op',
      url: 'https://us.mullenlowe.com',
      date: 'July - December 2015',
      responsibilities: [
        'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
        'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
      ]
    }
  ];
  
  export default experienceData;