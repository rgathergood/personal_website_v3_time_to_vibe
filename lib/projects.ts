export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  category: 'Professional' | 'Personal'
  image: string
  problem: string
  solution: string
  impact: string[]
  skills: string[]
  tools: string[]
  link?: string
  date: string
}

export const projects: Project[] = [
  {
    id: 'payscale-feature',
    title: 'Payscale Feature Release Strategy',
    description: 'Led product strategy and roadmap for multiple feature releases, driving alignment between strategy and execution.',
    longDescription: `
      As Product Manager at Payscale, I independently drove the strategy, roadmap, and delivery of defined product areas. 
      This involved regular customer engagement to identify patterns, leveraging data to inform decisions, and monitoring 
      adoption and engagement metrics.
    `,
    category: 'Professional',
    image: 'Payscale Dashboard Screenshot',
    problem: 'Placeholder: Customer pain point needing solution',
    solution: 'Placeholder: Feature/solution approach',
    impact: [
      'Placeholder: 45% increase in feature adoption',
      'Placeholder: 2.3x engagement uplift',
      'Placeholder: Positive NPS impact'
    ],
    skills: ['Product Strategy', 'Data Analysis', 'Stakeholder Management', 'Agile Leadership'],
    tools: ['Pendo', 'Snowflake', 'Jira', 'Figma'],
    date: '2023-01-01'
  },
  {
    id: 'condatis-nhs-launch',
    title: 'Condatis NHS Product Launch',
    description: 'Led the successful launch of the first version of a decentralized identity product now in use by NHS.',
    longDescription: `
      Successfully managed the product launch from concept through deployment. Collaborated with NHS stakeholders,
      government partners, and cross-functional teams to deliver a secure identity management solution.
    `,
    category: 'Professional',
    image: 'Healthcare Product Screenshot',
    problem: 'Placeholder: NHS identity verification challenges',
    solution: 'Placeholder: Decentralized identity solution',
    impact: [
      'Placeholder: Deployed to NHS across multiple regions',
      'Placeholder: X thousand users onboarded',
      'Placeholder: Reduced verification time by X%'
    ],
    skills: ['Product Management', 'Healthcare Domain', 'Requirements Gathering', 'Compliance'],
    tools: ['Jira', 'Confluence', 'Figma'],
    date: '2022-05-01'
  },
  {
    id: 'gas-free-household',
    title: 'Gas-Free Household 2025',
    description: 'Designed and implemented a comprehensive renewable energy system: solar panels, battery storage, heat pump, and EV charging.',
    longDescription: `
      Became a gas-free household by implementing a complete renewable energy ecosystem. This involved system design,
      vendor selection, ROI analysis, and integration of multiple technologies. Demonstrates complex project management,
      data-driven decision making, and problem-solving across multiple domains.
    `,
    category: 'Personal',
    image: 'Solar Panels Installation',
    problem: 'Natural gas dependency and high energy costs',
    solution: 'Integrated renewable energy system with battery storage and heat pump',
    impact: [
      'Placeholder: 95% energy independence',
      'Placeholder: X tons CO2 offset annually',
      'Placeholder: Y-year payback period'
    ],
    skills: ['Systems Design', 'Financial Analysis', 'Project Management', 'Stakeholder Coordination'],
    tools: ['Excel', 'Energy Monitoring Software'],
    date: '2025-01-01'
  },
  {
    id: 'music-journey',
    title: 'Drummer & Piano Learner',
    description: 'Drummer in working bands and self-taught piano learner. Demonstrates discipline, collaboration, and creative expression.',
    longDescription: `
      Active drummer performing in multiple bands while simultaneously learning piano. This journey demonstrates
      commitment to mastering complex skills, collaborating in group dynamics, and continuous learning.
    `,
    category: 'Personal',
    image: 'Band Performance Photo',
    problem: 'Personal development and creative expression',
    solution: 'Consistent practice, band collaboration, and structured learning',
    impact: [
      'Placeholder: Performing regularly with bands',
      'Placeholder: Recording original music',
      'Placeholder: Learning piano scales and pieces'
    ],
    skills: ['Discipline', 'Collaboration', 'Creativity', 'Communication'],
    tools: ['Drums', 'Piano', 'Recording Software'],
    date: '2020-01-01'
  }
]
