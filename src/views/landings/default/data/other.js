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
      description: 'This test platform is used for those currently taking courses as an evaluation test of their abilities. Sometimes, Gapaiskor also holds seminars where this test platform is utilized, such as in TOEFL prediction seminars.',
      image: `${imagePrefix}/gapaiskor2.png`,
      link: PAGE_PATH.hero,
      dateFrom : "Not specified",
      dateTo : "Not specified",
      responsibility : ["No responsibilities listed."],
      teamSize : "Not specified",
      tools : ["No tools listed."],
      demoLink: 'https://example.com/demo/hero', // Link ke demo Hero
      githubLink: 'https://github.com/example/hero' // Link ke repositori GitHub Hero
    },
    {
      animationDelay: 0.3,
      projectName: 'Antropometri Project',
      description: 'The Antropometri Project is a backend application designed to support the measurement and analysis of anthropometric data with a focus on efficiency and reliability. The solution included large-scale data storage and integration with cloud storage services.',
      image: `${imagePrefix}/cta-light.svg`,
      link: PAGE_PATH.cta,
      // demoLink: 'https://example.com/demo/cta', // Link ke demo CTA
      // githubLink: 'https://github.com/example/cta' // Link ke repositori GitHub CTA
    },
    {
      animationDelay: 0.4,
      projectName: 'ATS (Applicant Tracking System)',
      description: 'ATS is a traffic escort patrol management application that facilitates digital member tracking. This project leverages multiple services for file storage, time-series data management, and communication with mobile devices.',
      image: `${imagePrefix}/feature-light.svg`,
      link: PAGE_PATH.feature,
      // demoLink: 'https://example.com/demo/feature', // Link ke demo Feature
      // githubLink: 'https://github.com/example/feature' // Link ke repositori GitHub Feature
    },
    {
      animationDelay: 0.2,
      projectName: 'Drone Monitoring Dashboard',
      description: 'The Drone Monitoring Dashboard is designed to monitor drone activities in real-time, including GPS data and system updates. The project involved frontend and backend development and communication protocols for drone connectivity.',
      image: `${imagePrefix}/benefits-light.svg`,
      link: PAGE_PATH.benefit,
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
