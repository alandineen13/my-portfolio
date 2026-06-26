import { Component } from '@angular/core';

interface SkillGroup {
  category: string;
  items: string[];
}

interface JourneyStep {
  stage: string;
  company?: string;
  period: string;
  description: string;
  highlights?: string[];
}

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly journey: JourneyStep[] = [
    {
      stage: 'BSc (Hons) Business Information Systems (2:1)',
      company: 'University College Cork',
      period: '2016 – 2020',
      description: 'Four-year degree covering software development, databases, systems analysis and project management — combining technical depth with a business context. Final Year Project achieved a 1:1 grade, an Android application for student personal finance management, built with Java, utilising a SQLite database and incorporating multiple third party APIs e.g. Google Vision API.',
    },
    {
      stage: 'IT Services Management Analyst',
      company: 'Ervia (Gas Networks Ireland) · Cork',
      period: 'Mar 2019 – Aug 2019',
      description: 'Placement role focused on incident and problem management processes, contributing to system improvements and service delivery initiatives within a regulated utilities environment.',
    },
    {
      stage: 'Software Development Tutor',
      company: 'University College Cork',
      period: 'Sep 2019 – May 2020',
      description: 'Delivered tutorials in object-oriented programming using VB.NET and SQL to Business Information Systems students. Supported learning through hands-on teaching and individual problem-solving guidance.',
    },
    {
      stage: 'Full Stack Engineer',
      company: 'Fidelity Investments · Dublin',
      period: 'Aug 2020 – Present',
      description: 'Served as primary technical representative for an Agile team at one of the world\'s largest financial services firms. Primary developer for a public-facing platform serving 2M+ annual visitors and generating 20,000+ leads per year — supporting 200%+ traffic growth since 2022. Operated as sole engineer for almost two years before moving into a deputy technical lead role.',
      highlights: [
        'Led design and delivery of production web applications in tech stacks such as Angular and Node.js',
        'Designed and integrated REST APIs via OpenAPI/SwaggerHub across frontend, backend and third-party platforms',
        'Developed on Salesforce Experience Cloud using Lightning Web Components (LWC) and Apex',
        'Delivered cloud-hosted solutions on Azure and AWS',
        'Contributed to architecture decisions covering auth, API design, cloud deployment and scalability',
        'Mentored team members and contributed to an org-wide AI innovation initiative',
      ],
    },
  ];

  readonly skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      items: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'LWC'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Java', 'Spring Boot', 'REST APIs', 'OpenAPI / SwaggerHub', 'JWT', 'OAuth', 'Apex'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'CI/CD'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'SQLite', 'SQL', 'NoSQL', 'Data Modelling'],
    },
    {
      category: 'Testing',
      items: ['Jest', 'Unit Testing', 'Integration Testing', 'End-to-End Testing', 'TDD'],
    },
    {
      category: 'Leadership',
      items: ['System Design', 'Solution Design', 'Technical Leadership', 'Stakeholder Engagement'],
    },
  ];

  readonly certifications = [
    { name: 'Salesforce Certified Platform Administrator', issuer: 'Salesforce' },
    { name: 'Salesforce Certified JavaScript Developer', issuer: 'Salesforce' },
    { name: 'ITIL Foundation', issuer: 'AXELOS' },
    { name: 'Lean Six Sigma White Belt', issuer: '' },
  ];
}
