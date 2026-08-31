export const START_DATE = '2026-08-31';

export const NAV_ITEMS = [
  ['command','Command Center','⌂'],['today','Today','✓'],['applications','Applications','▣'],['companies','Companies','◈'],
  ['network','Network / CRM','◎'],['interviews','Interviews','◆'],['preparation','Preparation','⌁'],['projects','Projects / Proof','◇'],
  ['scorecard','Weekly Scorecard','▥'],['analytics','Analytics','∿'],['roadmap','30/60/90 Roadmap','↗'],['activity','Activity','≋'],['settings','Settings','⚙']
];

export const DEFAULT_TARGETS = {
  applications: 30,
  targeted: 15,
  recruiter: 10,
  manager: 5,
  engineer: 10,
  alumni: 10,
  founder: 3,
  connections: 35,
  followups: 15,
  conversations: 3,
  referrals: 2,
  events: 1,
  coding: 8,
  mocks: 1,
  milestones: 1,
  linkedin: 1,
  companies: 15
};

export const seedData = {
  meta: {
    demo: false,
    createdAt: new Date().toISOString(),
    startDate: START_DATE,
    theme: 'dark',
    weeklyHours: 30
  },
  targets: DEFAULT_TARGETS,
  roleFamilies: [
    'Software Developer',
    'Backend / Python',
    'AI / GenAI',
    'Full-Stack',
    'Solutions / Technical'
  ],
  applications: [],
  companies: [],
  contacts: [],
  interviews: [],
  tasks: [],
  timeBlocks: [],
  preparation: [],
  codingProblems: [],
  projects: [
    {
      id: 'pr1',
      name: 'InsightOps AI',
      subtitle: 'Agentic Data Analyst & BI Platform',
      score: 0,
      categories: {
        'End-to-end': 0,
        'Architecture': 0,
        'Tests': 0,
        'Deployment': 0,
        'Logging': 0,
        'Documentation': 0,
        'CI': 0,
        'Demo': 0,
        'Security': 0,
        'UX': 0
      },
      milestones: [
        {id:'m1',title:'CSV upload + profiling',done:false},
        {id:'m2',title:'Q → plan → pandas execution',done:false},
        {id:'m3',title:'Structured validation',done:false},
        {id:'m4',title:'Charts + result history',done:false},
        {id:'m5',title:'Deployment + CI',done:false},
        {id:'m6',title:'90–150s demo video',done:false}
      ]
    }
  ],
  weeklyHistory: [],
  activity: [],
  reflections: [],
  failures: [],
  notifications: [],
  roadmap: [
    {id:'r1',phase:1,title:'Market Entry + Credibility',start:1,end:30,done:false},
    {id:'r2',phase:2,title:'Interview Pipeline',start:31,end:60,done:false},
    {id:'r3',phase:3,title:'Offer Conversion',start:61,end:90,done:false}
  ]
};
