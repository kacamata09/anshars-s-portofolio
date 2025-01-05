// @project
import { PAGE_PATH, SECTION_PATH } from '@/path';

// @asssets
const imagePrefix = '/assets/images/presentation';

// @project
import branding from '@/branding.json';


export const other = {
  heading: `${branding.brandName} Project `,
  description: 'This my project which i do in my free time.',
  primaryBtn: { children: 'More Projects', href: SECTION_PATH },
  sections: [
    {
      animationDelay: 0.2,
      projectName: 'Gapai Skor',
      company: 'GapaiSkor',
      description: 'This test platform is used for those currently taking courses as an evaluation test of their abilities. Sometimes, Gapaiskor also holds seminars where this test platform is utilized, such as in TOEFL prediction seminars.',
      image: `${imagePrefix}/gapaiskor2.png`,
      link: PAGE_PATH.hero,
      dateFrom : "Not specified",
      dateTo : "Not specified",
      responsibility : ["Developed backend services using Echo (Go)",
                        "Built user interfaces with ReactJS.",
                        "Managed, deployed and optimized app using VPS."],
      teamSize : "1 member",
      tools : ["Echo (Go), ReactJS, MySQL, Nginx"],
      demoLink: 'https://example.com/demo/hero', // Link ke demo Hero
      githubLink: 'https://github.com/example/hero' // Link ke repositori GitHub Hero
    },
    


    {
      animationDelay: 0.3,
      projectName: 'Antropometri Project',
      company: 'PT. KIREI',
      description: 'The Antropometri Project is a backend application designed to support the measurement and analysis of anthropometric data with a focus on efficiency and reliability. The solution included large-scale data storage and integration with cloud storage services.',
      image: `${imagePrefix}/antropometri.png`,
      link: PAGE_PATH.cta,
      dateFrom : "Not specified",
      dateTo : "Not specified",
      responsibility : ["Developed backend services using NestJS.",
        "Managed data with PostgreSQL.",
        "Used MinIO for file storage services."],
      teamSize : "2 members",
      tools : ["NestJS, PostgreSQL, MinIO"],
      // demoLink: 'https://example.com/demo/cta', // Link ke demo CTA
      // githubLink: 'https://github.com/example/cta' // Link ke repositori GitHub CTA
    },
    {
      animationDelay: 0.4,
      projectName: 'ATS (Applicant Tracking System)',
      company: 'PT. KIREI',
      description: 'ATS is a traffic escort patrol management application that facilitates digital member tracking. This project leverages multiple services for file storage, time-series data management, and communication with mobile devices.',
      image: `${imagePrefix}/ats.png`,
      link: PAGE_PATH.feature,
      dateFrom : "Not specified",
      dateTo : "Not specified",
      responsibility : ["Developed the backend using NestJS.",
        "Managed the database using MySQL.",
        "Integrated InfluxDB for time-series data and MinIO for file storage.",
        "Implemented RabbitMQ for mobile device communication queues."],
      teamSize : "3 members",
      tools : ["NestJS, MySQL, MinIO, InfluxDB, RabbitMQ"],
      // demoLink: 'https://example.com/demo/feature', // Link ke demo Feature
      // githubLink: 'https://github.com/example/feature' // Link ke repositori GitHub Feature
    },
    {
      animationDelay: 0.2,
      projectName: 'Drone Monitoring Dashboard',
      company: 'PT. KIREI',
      description: 'The Drone Monitoring Dashboard is designed to monitor drone activities in real-time, including GPS data and system updates. The project involved frontend and backend development and communication protocols for drone connectivity.',
      image: `${imagePrefix}/drone.png`,
      link: PAGE_PATH.benefit,
      dateFrom : "Not specified",
      dateTo : "Not specified",
      responsibility : ["Developed the backend using NestJS.",
        "Built user interfaces with ReactJS.",
        "Managed data using MySql",
        "Implemented MQTT Server for drone communication protocols.",
      ],
      teamSize : "2 members",
      tools : ["NestJS, ReactJS, MySQL, MQTT"],
      // demoLink: 'https://example.com/demo/benefits', // Link ke demo Benefits
      // githubLink: 'https://github.com/example/benefits' // Link ke repositori GitHub Benefits
    },
    // {
    //   animationDelay: 0.3,
    //   projectName: 'Process',
    //   description: '7 Different Variants',
    //   image: `${imagePrefix}/process-light.svg`,
    //   link: PAGE_PATH.process,
    //   demoLink: 'https://example.com/demo/process', // Link ke demo Process
    //   githubLink: 'https://github.com/example/process' // Link ke repositori GitHub Process
    // },
    // {
    //   animationDelay: 0.4,
    //   projectName: 'Integration',
    //   description: '8 Different Variants',
    //   image: `${imagePrefix}/integration-light.svg`,
    //   link: PAGE_PATH.integration,
    //   demoLink: 'https://example.com/demo/integration', // Link ke demo Integration
    //   githubLink: 'https://github.com/example/integration' // Link ke repositori GitHub Integration
    // }
  ]
};
