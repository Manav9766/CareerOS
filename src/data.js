export const START_DATE = '2026-08-31';

export const NAV_ITEMS = [
  ['command','Command Center','⌂'],['today','Today','✓'],['applications','Applications','▣'],['companies','Companies','◈'],
  ['network','Network / CRM','◎'],['interviews','Interviews','◆'],['preparation','Preparation','⌁'],['projects','Projects / Proof','◇'],
  ['scorecard','Weekly Scorecard','▥'],['analytics','Analytics','∿'],['roadmap','30/60/90 Roadmap','↗'],['activity','Activity','≋'],['settings','Settings','⚙']
];

export const DEFAULT_TARGETS = {
  applications: 30, targeted: 15, recruiter: 10, manager: 5, engineer: 10, alumni: 10, founder: 3,
  connections: 35, followups: 15, conversations: 3, referrals: 2, events: 1, coding: 8, mocks: 1, milestones: 1, linkedin: 1, companies: 15
};

export const seedData = {
  meta: { demo: true, createdAt: new Date().toISOString(), startDate: START_DATE, theme: 'dark', weeklyHours: 30 },
  targets: DEFAULT_TARGETS,
  roleFamilies: ['Software Developer','Backend / Python','AI / GenAI','Full-Stack','Solutions / Technical'],
  applications: [
    {id:'j1',company:'Northstar Labs',position:'Junior Backend Developer',location:'Toronto, ON',work:'Hybrid',tier:1,source:'Company Careers',date:'2026-08-31',status:'Applied',resume:'Backend',match:82,referral:false,next:'Follow up with recruiter',followup:'2026-09-05',salary:'$70k–$82k',stack:'Python, FastAPI, PostgreSQL',notes:'Strong API/data fit.'},
    {id:'j2',company:'MapleStack AI',position:'AI Application Developer',location:'Toronto, ON',work:'Hybrid',tier:1,source:'LinkedIn',date:'2026-08-30',status:'Recruiter Screen',resume:'AI / GenAI',match:78,referral:true,next:'Prepare project walkthrough',followup:'2026-09-02',salary:'$75k–$90k',stack:'Python, LLM APIs, React',notes:'Referral from alumni contact.'},
    {id:'j3',company:'Polar Cloud',position:'Software Developer I',location:'Ottawa, ON',work:'Hybrid',tier:2,source:'Indeed',date:'2026-08-29',status:'Technical Interview',resume:'Backend',match:74,referral:false,next:'Practice SQL + REST',followup:'2026-09-03',salary:'$68k–$80k',stack:'Python, SQL, REST',notes:'Technical interview scheduled.'},
    {id:'j4',company:'VectorBridge',position:'Solutions Engineer',location:'Toronto, ON',work:'Onsite',tier:2,source:'Networking Event',date:'2026-08-28',status:'Contacted',resume:'Full Stack',match:71,referral:false,next:'Send product note',followup:'2026-09-01',salary:'$72k–$86k',stack:'APIs, JavaScript, SQL',notes:'Met engineer at meetup.'},
    {id:'j5',company:'Prairie Systems',position:'Associate Software Developer',location:'Calgary, AB',work:'Hybrid',tier:2,source:'LinkedIn',date:'2026-08-27',status:'Applied',resume:'Backend',match:80,referral:false,next:'Find engineer contact',followup:'2026-09-04',salary:'$65k–$78k',stack:'Python, Docker, PostgreSQL',notes:''},
    {id:'j6',company:'Harbour Analytics',position:'Data Automation Developer',location:'Vancouver, BC',work:'Remote',tier:2,source:'Wellfound',date:'2026-08-26',status:'Saved',resume:'AI / GenAI',match:69,referral:false,next:'Tailor resume',followup:'2026-09-01',salary:'$70k–$85k',stack:'Python, pandas, APIs',notes:'Very aligned with InsightOps.'},
    {id:'j7',company:'Cobalt Fintech',position:'API Developer',location:'Waterloo, ON',work:'Hybrid',tier:1,source:'Company Careers',date:'2026-08-25',status:'Hiring Manager',resume:'Backend',match:84,referral:true,next:'Prepare system design',followup:'2026-09-04',salary:'$78k–$92k',stack:'Python, PostgreSQL, AWS',notes:'Strong progression.'},
    {id:'j8',company:'Orbit Health',position:'Implementation Engineer',location:'Toronto, ON',work:'Hybrid',tier:2,source:'Recruiter',date:'2026-08-24',status:'Rejected',resume:'Full Stack',match:65,referral:false,next:'Log learnings',followup:'',salary:'$68k–$80k',stack:'APIs, SQL, React',notes:'Needed more customer implementation experience.'},
    {id:'j9',company:'SignalNorth',position:'Technical Support Engineer',location:'Toronto, ON',work:'Onsite',tier:3,source:'Indeed',date:'2026-08-23',status:'Applied',resume:'Backend',match:77,referral:false,next:'Follow up',followup:'2026-09-02',salary:'$62k–$72k',stack:'Python, Linux, APIs',notes:''},
    {id:'j10',company:'Acorn DevTools',position:'Junior Full-Stack Developer',location:'Halifax, NS',work:'Remote',tier:2,source:'VC Portfolio',date:'2026-08-22',status:'Assessment',resume:'Full Stack',match:73,referral:false,next:'Complete take-home',followup:'2026-09-01',salary:'$65k–$78k',stack:'React, TypeScript, Node',notes:'Take-home due soon.'},
    {id:'j11',company:'LumenOps',position:'Automation Developer',location:'Edmonton, AB',work:'Hybrid',tier:3,source:'LinkedIn',date:'2026-08-21',status:'Ghosted',resume:'Backend',match:70,referral:false,next:'Final follow-up',followup:'2026-09-03',salary:'$64k–$76k',stack:'Python, SQL, Power Automate',notes:''},
    {id:'j12',company:'Atlas Compute',position:'Junior AI Platform Developer',location:'Vancouver, BC',work:'Hybrid',tier:1,source:'Alumni',date:'2026-08-20',status:'Final Interview',resume:'AI / GenAI',match:79,referral:true,next:'Final behavioural prep',followup:'2026-09-05',salary:'$80k–$95k',stack:'Python, LLMs, Docker',notes:'Final round.'}
  ],
  companies: [
    {id:'c1',name:'Northstar Labs',tier:1,industry:'SaaS',location:'Toronto, ON',size:'51–200',policy:'Hybrid',stack:'Python, FastAPI, React',why:'Strong backend product culture',last:'2026-08-31',next:'2026-09-05',strength:2},
    {id:'c2',name:'MapleStack AI',tier:1,industry:'AI SaaS',location:'Toronto, ON',size:'11–50',policy:'Hybrid',stack:'Python, LLM APIs, React',why:'Practical AI application focus',last:'2026-08-30',next:'2026-09-02',strength:4},
    {id:'c3',name:'Cobalt Fintech',tier:1,industry:'Fintech',location:'Waterloo, ON',size:'201–500',policy:'Hybrid',stack:'Python, AWS, PostgreSQL',why:'API-heavy engineering',last:'2026-08-29',next:'2026-09-04',strength:4},
    {id:'c4',name:'Atlas Compute',tier:1,industry:'AI Infrastructure',location:'Vancouver, BC',size:'51–200',policy:'Hybrid',stack:'Python, Docker, LLMs',why:'AI platform work',last:'2026-08-28',next:'2026-09-05',strength:5},
    {id:'c5',name:'Prairie Systems',tier:2,industry:'Enterprise Software',location:'Calgary, AB',size:'201–500',policy:'Hybrid',stack:'Python, Docker, SQL',why:'Strong junior path',last:'2026-08-27',next:'2026-09-04',strength:1},
    {id:'c6',name:'Harbour Analytics',tier:2,industry:'Analytics',location:'Vancouver, BC',size:'11–50',policy:'Remote',stack:'Python, pandas, APIs',why:'InsightOps overlap',last:'2026-08-26',next:'2026-09-01',strength:1}
  ],
  contacts: [
    {id:'n1',name:'Maya Chen',company:'MapleStack AI',role:'Software Engineer',type:'Alumni',stage:'Credibility',last:'2026-08-30',next:'2026-09-05',referral:true,notes:'Discussed team stack and referral.'},
    {id:'n2',name:'Ethan Brooks',company:'Northstar Labs',role:'Technical Recruiter',type:'Recruiter',stage:'Conversation',last:'2026-08-31',next:'2026-09-05',referral:false,notes:'Applied to backend role.'},
    {id:'n3',name:'Aisha Patel',company:'Cobalt Fintech',role:'Engineering Manager',type:'Hiring Manager',stage:'Credibility',last:'2026-08-29',next:'2026-09-04',referral:false,notes:'Interview process active.'},
    {id:'n4',name:'Noah Tremblay',company:'VectorBridge',role:'Solutions Engineer',type:'Engineer',stage:'Conversation',last:'2026-08-28',next:'2026-09-01',referral:false,notes:'Met at Toronto meetup.'},
    {id:'n5',name:'Sofia Martin',company:'Atlas Compute',role:'Backend Engineer',type:'Alumni',stage:'Opportunity',last:'2026-08-28',next:'2026-09-05',referral:true,notes:'Referred for AI platform role.'},
    {id:'n6',name:'Liam Osei',company:'Prairie Systems',role:'Software Developer',type:'Engineer',stage:'Recognition',last:'2026-08-27',next:'2026-09-03',referral:false,notes:''}
  ],
  interviews: [
    {id:'i1',company:'Polar Cloud',job:'Software Developer I',stage:'Technical Interview',date:'2026-09-03T14:00',format:'Video',interviewer:'Senior Engineer',topics:'Python, SQL, REST',prep:'Review joins, API status codes, debugging',outcome:'Pending'},
    {id:'i2',company:'Atlas Compute',job:'Junior AI Platform Developer',stage:'Final Interview',date:'2026-09-05T11:00',format:'Video',interviewer:'Hiring Panel',topics:'Behavioural, project depth, tradeoffs',prep:'InsightOps 2-minute story + STAR examples',outcome:'Pending'}
  ],
  tasks: [
    {id:'t1',title:'Follow up with VectorBridge engineer',category:'Relationships',due:'2026-08-31',priority:92,done:false,link:'VectorBridge'},
    {id:'t2',title:'Tailor Harbour Analytics application',category:'Reach',due:'2026-08-31',priority:88,done:false,link:'Harbour Analytics'},
    {id:'t3',title:'Practice SQL JOIN interview set',category:'Readiness',due:'2026-08-31',priority:84,done:false,link:'Polar Cloud'},
    {id:'t4',title:'Finish InsightOps validation tests',category:'Proof',due:'2026-08-31',priority:80,done:false,link:'InsightOps AI'},
    {id:'t5',title:'Send 3 alumni outreach messages',category:'Relationships',due:'2026-08-31',priority:76,done:false,link:''}
  ],
  timeBlocks: [
    {id:'b1',time:'09:00',duration:180,category:'InsightOps engineering',title:'Validation + endpoint tests',done:false},
    {id:'b2',time:'12:45',duration:90,category:'Applications',title:'3 targeted applications',done:false},
    {id:'b3',time:'14:15',duration:60,category:'Networking',title:'Alumni + recruiter outreach',done:false},
    {id:'b4',time:'15:15',duration:75,category:'Interview prep',title:'Python / SQL practice',done:false}
  ],
  preparation: [
    {id:'p1',topic:'Python',confidence:78,readiness:74,last:'2026-08-29',next:'2026-09-01'},
    {id:'p2',topic:'REST / FastAPI',confidence:81,readiness:76,last:'2026-08-30',next:'2026-09-02'},
    {id:'p3',topic:'SQL',confidence:68,readiness:62,last:'2026-08-28',next:'2026-08-31'},
    {id:'p4',topic:'LLM APIs',confidence:77,readiness:70,last:'2026-08-27',next:'2026-09-03'},
    {id:'p5',topic:'DSA',confidence:61,readiness:58,last:'2026-08-30',next:'2026-09-01'},
    {id:'p6',topic:'System Design',confidence:56,readiness:50,last:'2026-08-25',next:'2026-09-04'}
  ],
  codingProblems: [
    {id:'cp1',name:'Two Sum',platform:'LeetCode',category:'Hash Map',difficulty:'Easy',date:'2026-08-26',solved:true,hints:false,quality:90,revisit:'2026-09-09'},
    {id:'cp2',name:'Valid Parentheses',platform:'LeetCode',category:'Stack',difficulty:'Easy',date:'2026-08-27',solved:true,hints:false,quality:85,revisit:'2026-09-10'},
    {id:'cp3',name:'SQL Customer Revenue',platform:'Custom',category:'SQL',difficulty:'Medium',date:'2026-08-28',solved:true,hints:true,quality:72,revisit:'2026-09-04'}
  ],
  projects: [{id:'pr1',name:'InsightOps AI',subtitle:'Agentic Data Analyst & BI Platform',score:62,categories:{'End-to-end':75,'Architecture':70,'Tests':48,'Deployment':35,'Logging':55,'Documentation':66,'CI':40,'Demo':20,'Security':45,'UX':68},milestones:[{id:'m1',title:'CSV upload + profiling',done:true},{id:'m2',title:'Q → plan → pandas execution',done:true},{id:'m3',title:'Structured validation',done:false},{id:'m4',title:'Charts + result history',done:false},{id:'m5',title:'Deployment + CI',done:false},{id:'m6',title:'90–150s demo video',done:false}]}],
  weeklyHistory: [{week:'Aug 17',applications:19,screens:2,outreach:24,conversations:1,coding:5,milestones:1},{week:'Aug 24',applications:27,screens:3,outreach:32,conversations:2,coding:7,milestones:1},{week:'Aug 31',applications:12,screens:2,outreach:18,conversations:2,coding:3,milestones:0}],
  activity: [{id:'a1',time:'2026-08-31T08:15',type:'Application',text:'Applied to Junior Backend Developer at Northstar Labs'},{id:'a2',time:'2026-08-30T17:20',type:'Network',text:'Maya Chen provided a referral for MapleStack AI'},{id:'a3',time:'2026-08-30T15:45',type:'Preparation',text:'Completed DSA practice session'},{id:'a4',time:'2026-08-29T11:30',type:'Interview',text:'Cobalt Fintech moved to Hiring Manager stage'},{id:'a5',time:'2026-08-28T20:10',type:'Project',text:'Updated InsightOps architecture documentation'}],
  reflections: [],
  failures: [{id:'f1',date:'2026-08-22',company:'Orbit Health',question:'Explain INNER vs LEFT JOIN',category:'SQL',quality:55,missing:'Edge cases with unmatched rows',better:'Use concrete table example and null behavior',retest:'2026-08-31',status:'Due'},{id:'f2',date:'2026-08-24',company:'Orbit Health',question:'How would you retry a failing external API?',category:'Backend',quality:65,missing:'Backoff + idempotency',better:'Bounded exponential backoff, jitter, timeout, idempotency',retest:'2026-09-02',status:'Scheduled'}]
};
