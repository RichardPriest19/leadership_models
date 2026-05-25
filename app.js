/* ============================================================
   15 MODELS — LEADERSHIP EXECUTION GUIDE
   Application Logic  |  app.js
   ============================================================ */

// ── DATA ────────────────────────────────────────────────────
const SECTIONS = [
  { id: 1, theme: "navy",   label: "Clarify Roles & Responsibilities" },
  { id: 2, theme: "green",  label: "Deliver Work Effectively" },
  { id: 3, theme: "orange", label: "Align Constraints & Focus" },
  { id: 4, theme: "teal",   label: "Measure & Monitor Progress" },
  { id: 5, theme: "purple", label: "Review & Learn" },
];

const THEME_COLORS = {
  navy:   { main: "#1B2A5A", light: "#D0D8F0", pale: "#eef1fb" },
  green:  { main: "#2E7D32", light: "#C8E6C9", pale: "#f1f8f1" },
  orange: { main: "#E65100", light: "#FFE0B2", pale: "#fff8f2" },
  teal:   { main: "#00695C", light: "#B2DFDB", pale: "#f0faf9" },
  purple: { main: "#4A148C", light: "#E1BEE7", pale: "#f8f2fd" },
};

const MODELS = [
  // ── SECTION 1 ──────────────────────────────────────────
  {
    num: 1, section: 1, theme: "navy",
    name: "RACI Matrix",
    question: "Who is Responsible, Accountable, Consulted and Informed?",
    summary: "A grid-based tool that maps every task or decision to four roles — eliminating ambiguity about who does the work, who owns the outcome, who advises, and who stays informed.",
    tags: ["Roles", "Accountability", "Projects"],
    roles: ["Project Managers", "Team Members", "Stakeholders"],
    overview: "The RACI matrix is one of the most widely used tools for clarifying roles and responsibilities within a project or process. The acronym stands for Responsible, Accountable, Consulted, and Informed. It is a simple grid mapping tasks against people, giving each person a defined role for every task. Originally developed in the 1950s as part of linear responsibility charting, RACI has become a cornerstone of project management and organizational design.",
    problem: "Without clear role definition, projects suffer from duplicated effort, missed tasks, confused decision-making, and team friction. RACI eliminates ambiguity by making it explicit who does the work, who owns the outcome, who advises, and who simply needs to be kept in the loop.",
    components: [
      ["R — Responsible", "The person or people who actually perform the work. There can be multiple R's on a single task."],
      ["A — Accountable", "The single person who owns the outcome and is ultimately answerable. There must be exactly one A per task."],
      ["C — Consulted", "Subject matter experts whose input is sought before decisions are made. Two-way communication."],
      ["I — Informed", "People who need to be kept updated on progress or outcomes. One-way communication only."],
    ],
    whenToUse: [
      "Kicking off a new project or program",
      "Onboarding new team members to clarify responsibilities",
      "Resolving confusion or conflict about who owns what",
      "Redesigning business processes or reorganizing teams",
      "Audits or compliance exercises",
    ],
    pitfalls: [
      "Too many Accountables — only one person can be accountable per task",
      "Overloading individuals with Responsible roles — creates bottlenecks",
      "Skipping Consulted roles — leads to poor decisions",
      "Creating the chart but never referencing it again",
    ],
    software: ["Microsoft Excel", "Google Sheets", "Smartsheet", "Monday.com", "Asana", "Lucidchart", "Responsa"],
  },
  {
    num: 2, section: 1, theme: "navy",
    name: "DACI Framework",
    question: "Who makes Decisions, takes Actions, gets Consulted and is Informed?",
    summary: "A decision-making framework that specifies who drives the process, who has final approval authority, who provides expert input, and who simply needs to be told the outcome.",
    tags: ["Decisions", "Authority", "Governance"],
    roles: ["Product Managers", "C-Suite Leaders", "Subject Matter Experts"],
    overview: "DACI is a decision-making framework that clarifies who has authority to make decisions — not just do work. Unlike RACI (which focuses on task ownership), DACI is specifically designed for decision points. It is particularly useful in fast-moving organizations where ambiguous decision authority causes delays and conflict.",
    problem: "In many organizations, decisions stall because it's unclear who has the final call. Meetings end without conclusions and projects slow down as teams wait for approvals from too many people. DACI solves this by assigning clear decision authority upfront.",
    components: [
      ["D — Driver", "Owns the decision process. Gathers input, manages the timeline, and ensures a decision gets made. Does not necessarily make the final call."],
      ["A — Approver", "The single person with final decision-making authority. The buck stops here."],
      ["C — Contributor", "People with relevant expertise who provide input but do not have veto power."],
      ["I — Informed", "People who need to know the decision once made, but have no role in making it."],
    ],
    whenToUse: [
      "Before major strategic, product, or operational decisions",
      "When teams argue about who has final say on a topic",
      "In fast-scaling companies where authority structures are unclear",
      "For recurring decision types — define a DACI template for repeatable decisions",
      "Merger integrations or organizational restructuring",
    ],
    pitfalls: [
      "Confusing Driver with Approver — they are very different roles",
      "Having multiple Approvers — defeats the purpose",
      "Not communicating the decision to all Informed parties",
      "Skipping the framework for 'small' decisions that later cause big disputes",
    ],
    software: ["Notion", "Confluence", "Coda", "Miro", "Mural", "Google Docs"],
  },
  {
    num: 3, section: 1, theme: "navy",
    name: "PDCA — Deming Cycle",
    question: "How do we continuously improve our processes?",
    summary: "A four-stage iterative cycle — Plan, Do, Check, Act — for systematic, evidence-based improvement of any process or product. The foundation of modern quality management.",
    tags: ["Quality", "Improvement", "Iteration"],
    roles: ["Quality Managers", "Operations Teams", "Engineering", "Process Owners"],
    overview: "PDCA (Plan-Do-Check-Act), also known as the Deming Cycle or Shewhart Cycle, is a four-step iterative methodology for continuous improvement. Developed by Walter Shewhart in the 1930s and popularized by W. Edwards Deming, this model forms the foundation of modern quality management, including ISO standards, Lean, and Six Sigma.",
    problem: "Organizations often implement changes without a disciplined process for testing, learning, and standardizing improvements. This leads to recurring problems, wasted effort, and improvements that don't stick. PDCA provides a rigorous loop that prevents this.",
    components: [
      ["P — Plan", "Identify the problem or opportunity. Set objectives. Develop a hypothesis and plan for change. Define what success looks like. Gather baseline data."],
      ["D — Do", "Implement the planned change — typically on a small scale first (pilot). Collect data throughout execution."],
      ["C — Check", "Analyze the results. Compare actual outcomes to expected outcomes. Did the change work? What did you learn?"],
      ["A — Act", "If the change worked, standardize and scale it. If it did not, revise the plan and run another PDCA cycle with improved inputs."],
    ],
    whenToUse: [
      "Ongoing process improvement initiatives",
      "Quality defect reduction programs",
      "Product development iterations",
      "Implementing ISO 9001 or other quality standards",
      "Any situation requiring disciplined experimentation before full rollout",
    ],
    pitfalls: [
      "Skipping the Check phase — acting on changes without verifying results",
      "Scaling too fast before validating the pilot",
      "Not documenting learnings from each cycle",
      "Treating PDCA as a one-time project rather than an ongoing cycle",
    ],
    software: ["Minitab", "Smartsheet", "Asana", "Tableau", "Power BI", "Microsoft Planner", "Lucidchart"],
  },

  // ── SECTION 2 ──────────────────────────────────────────
  {
    num: 4, section: 2, theme: "green",
    name: "Scrum",
    question: "How do we deliver value in short iterations and adapt quickly?",
    summary: "An Agile framework built on time-boxed Sprints (1–4 weeks), three defined roles, and five key ceremonies. Designed to deliver working product incrementally while adapting to change.",
    tags: ["Agile", "Sprints", "Product Dev"],
    roles: ["Product Owner", "Scrum Master", "Development Team"],
    overview: "Scrum is an Agile framework for delivering complex products through iterative, incremental work cycles called Sprints (typically 1–4 weeks). Developed by Ken Schwaber and Jeff Sutherland in the early 1990s, Scrum is built on three pillars: Transparency, Inspection, and Adaptation. It is the most widely used project delivery framework in software development but applies equally well to marketing, operations, and other domains.",
    problem: "Traditional waterfall projects deliver value only at the end, often after requirements have changed. Scrum solves this by delivering working increments every sprint, getting feedback early, and allowing teams to continuously reprioritize.",
    components: [
      ["Sprint", "A fixed-length iteration (1–4 weeks) in which a potentially shippable product increment is created."],
      ["Product Backlog", "The prioritized list of all work needed for the product, owned by the Product Owner."],
      ["Daily Scrum", "A 15-minute daily standup where the team syncs on progress, plans, and blockers."],
      ["Sprint Review", "An end-of-Sprint demo where the team shows completed work to stakeholders."],
      ["Sprint Retrospective", "A reflection session focused on improving team processes and collaboration."],
      ["Definition of Done", "The shared team agreement on what constitutes a completed piece of work."],
    ],
    whenToUse: [
      "Software product development (web, mobile, enterprise)",
      "Any complex project where requirements are likely to change",
      "Teams of 3–9 members who can collaborate closely",
      "When early and frequent delivery of value is a priority",
      "Startups and scale-ups building and iterating on products",
    ],
    pitfalls: [
      "Treating Scrum ceremonies as overhead rather than investments",
      "Product Owner not being available or engaged",
      "Failing to keep the backlog refined and prioritized",
      "Skipping retrospectives when busy — this is when they matter most",
    ],
    software: ["Jira", "Azure DevOps", "Linear", "Trello", "Monday.com", "ClickUp", "GitHub Projects"],
  },
  {
    num: 5, section: 2, theme: "green",
    name: "Kanban",
    question: "How do we visualize work, limit WIP and improve flow?",
    summary: "A visual workflow system that maps work items across stages on a board, enforces Work-In-Progress limits, and uses flow metrics to surface and eliminate bottlenecks.",
    tags: ["Flow", "Visualization", "Continuous"],
    roles: ["Operations Teams", "Support Teams", "Engineering", "Marketing"],
    overview: "Kanban is a visual workflow management method originating from Toyota's Production System in the 1940s. The word 'Kanban' is Japanese for 'visual signal' or 'card.' Adapted for knowledge work by David Anderson in the 2000s, Kanban has no fixed iterations or prescribed roles — it is a continuous flow system focused on visualizing work, limiting work-in-progress (WIP), and optimizing value flow.",
    problem: "Teams often have too much in progress simultaneously, causing context switching, delayed delivery, and invisible bottlenecks. Kanban makes all work visible and enforces WIP limits that reveal where the real problems are.",
    components: [
      ["Visualize Work", "All work is placed on a Kanban board with columns representing workflow stages (To Do, In Progress, Review, Done)."],
      ["Limit WIP", "Each stage has a maximum number of items allowed. This prevents bottlenecks and reduces multitasking."],
      ["Manage Flow", "Track how smoothly work moves through the system. Identify and remove blockages."],
      ["Explicit Policies", "Make rules visible — e.g., 'An item moves to Done only when peer-reviewed.'"],
      ["Continuous Improvement", "Refine the system continuously using data like cycle time and throughput."],
    ],
    whenToUse: [
      "Operations teams with continuous, unpredictable workloads",
      "IT support and helpdesk teams",
      "Marketing and content teams managing campaigns",
      "Engineering teams for maintenance and support work",
      "Any individual or team wanting better workload visibility",
    ],
    pitfalls: [
      "Setting WIP limits too high — defeats the purpose",
      "Not acting when WIP limits are breached",
      "Ignoring flow metrics and treating Kanban as just a to-do board",
      "Adding too many columns that don't represent real workflow stages",
    ],
    software: ["Trello", "Jira", "Asana", "KanbanFlow", "Businessmap (Kanbanize)", "Linear", "Monday.com"],
  },
  {
    num: 6, section: 2, theme: "green",
    name: "Lean Management",
    question: "How do we maximize value and eliminate waste?",
    summary: "A philosophy rooted in Toyota's Production System that identifies eight types of organizational waste and provides tools — including Value Stream Mapping, 5S, and Kaizen — to systematically eliminate them.",
    tags: ["Waste Elimination", "Value", "Operations"],
    roles: ["Operations Leaders", "Process Owners", "All Staff", "Quality Teams"],
    overview: "Lean Management is a philosophy focused on maximizing value for the customer while minimizing waste. Originating from the Toyota Production System (TPS) in post-WWII Japan and formally defined in the 1990 book 'The Machine That Changed the World,' Lean identifies eight types of waste (DOWNTIME) and provides a comprehensive toolkit to systematically eliminate them across any industry.",
    problem: "Most organizational processes contain significant hidden waste — activities that consume resources but add no customer value. Lean makes this waste visible and gives teams the tools and mindset to eliminate it systematically.",
    components: [
      ["D — Defects", "Errors requiring rework, correction, or disposal."],
      ["O — Overproduction", "Producing more than needed, sooner than needed."],
      ["W — Waiting", "Idle time when work is stalled waiting for input, approval, or resources."],
      ["N — Non-utilized Talent", "Failing to leverage employees' skills, knowledge, or creativity."],
      ["T — Transportation", "Unnecessary movement of materials or information."],
      ["I — Inventory", "Excess work-in-progress or finished goods tying up capital."],
      ["M — Motion", "Unnecessary physical or digital movement by people."],
      ["E — Extra Processing", "Doing more work than the customer requires or values."],
    ],
    whenToUse: [
      "Manufacturing and operations improvement initiatives",
      "Healthcare process improvement (Lean is widely adopted in hospitals)",
      "Service delivery optimization (call centers, logistics, banking)",
      "Software development — Lean Software Development principles",
      "Any organization seeking cultural transformation toward efficiency",
    ],
    pitfalls: [
      "Applying Lean tools without the underlying culture — tools without mindset don't stick",
      "Only focusing on production waste and ignoring talent waste",
      "Senior leaders not participating in Gemba walks",
      "Treating Lean as a one-time project rather than a permanent way of working",
    ],
    software: ["LeanKit (Planview)", "Minitab", "Lucidchart", "Miro", "KaiNexus", "SAP", "Oracle ERP"],
  },

  // ── SECTION 3 ──────────────────────────────────────────
  {
    num: 7, section: 3, theme: "orange",
    name: "Theory of Constraints",
    question: "What is the constraint holding us back from achieving our goal?",
    summary: "Dr. Goldratt's insight that every system has one binding constraint limiting throughput. By identifying and exploiting that constraint via the Five Focusing Steps, organizations unlock dramatic performance gains.",
    tags: ["Bottlenecks", "Throughput", "Systems"],
    roles: ["Operations Managers", "Supply Chain", "Project Managers", "C-Suite"],
    overview: "The Theory of Constraints (TOC) was developed by Dr. Eliyahu M. Goldratt and introduced in his 1984 business novel 'The Goal.' TOC is based on one powerful insight: every system has at least one constraint (bottleneck) that limits its throughput. By identifying and exploiting that constraint, organizations can dramatically improve performance without major investment.",
    problem: "Organizations waste enormous effort optimizing non-constraints — activities that are not actually limiting overall system output. TOC directs attention to the one place that actually matters: the weakest link in the chain.",
    components: [
      ["1. Identify", "Find the one constraint most limiting the system's goal. This is the bottleneck — the weakest link."],
      ["2. Exploit", "Get maximum output from the constraint without major changes. Don't let the bottleneck sit idle."],
      ["3. Subordinate", "Align all other parts of the system to support the constraint. Everything works at the pace of the bottleneck."],
      ["4. Elevate", "If the constraint still limits performance after steps 2–3, invest in increasing its capacity."],
      ["5. Repeat", "Once the constraint is resolved, identify the new constraint. Continuous improvement never ends."],
    ],
    whenToUse: [
      "When output is below potential and you cannot identify why",
      "Manufacturing capacity planning",
      "Supply chain optimization",
      "Project management (Critical Chain method)",
      "Sales pipeline analysis — finding the bottleneck in your sales process",
    ],
    pitfalls: [
      "Trying to optimize everything simultaneously instead of the constraint",
      "Elevating the constraint (spending money) before fully exploiting it",
      "Losing focus when there are multiple apparent bottlenecks — there is always one primary one",
      "Not repeating the cycle after resolving the current constraint",
    ],
    software: ["ProChain", "CCPM+", "Microsoft Project (adapted)", "Throughput Accounting ERP modules"],
  },
  {
    num: 8, section: 3, theme: "orange",
    name: "Critical Path Method",
    question: "What are the critical tasks that determine our project timeline?",
    summary: "A scheduling algorithm that identifies the longest chain of dependent tasks — the critical path — determining the minimum project duration. Any delay on the critical path delays the entire project.",
    tags: ["Scheduling", "Dependencies", "Projects"],
    roles: ["Project Managers", "Program Managers", "PMO Teams", "Engineers"],
    overview: "The Critical Path Method (CPM) is a project scheduling algorithm developed jointly by DuPont and Remington Rand in the late 1950s. It identifies the longest sequence of dependent tasks that determines the minimum time needed to complete a project. Tasks on the critical path have zero float (slack) — any delay in them directly delays the entire project.",
    problem: "Without CPM, project managers don't know which tasks to prioritize, which delays truly matter, and where resources should be concentrated. Teams can end up focused on non-critical work while the actual project delivery date slips.",
    components: [
      ["Critical Path", "The longest sequence of dependent tasks from project start to finish. Delays here delay the whole project."],
      ["Float / Slack", "The amount of time a non-critical task can be delayed without affecting the project end date."],
      ["Early Start (ES)", "The earliest a task can begin given its dependencies."],
      ["Late Start (LS)", "The latest a task can start without delaying the project."],
      ["Network Diagram", "A visual representation of all tasks and their dependencies."],
      ["Gantt Chart", "A bar chart showing task durations and dependencies over time."],
    ],
    whenToUse: [
      "Complex projects with many interdependent tasks",
      "Construction, engineering, and infrastructure projects",
      "Large-scale IT implementations and system migrations",
      "Any project where the deadline is fixed and non-negotiable",
      "Resource allocation across parallel workstreams",
    ],
    pitfalls: [
      "Not updating the critical path as the project evolves",
      "Assuming all resources are always available as planned",
      "Confusing CPM with Critical Chain (which accounts for resource constraints)",
      "Building the schedule without input from the people doing the work",
    ],
    software: ["Microsoft Project", "Oracle Primavera P6", "Smartsheet", "ProjectLibre", "GanttPRO", "Monday.com"],
  },
  {
    num: 9, section: 3, theme: "orange",
    name: "Eisenhower Matrix",
    question: "What should we do now, schedule, delegate or eliminate?",
    summary: "A four-quadrant prioritization tool that categorizes all tasks by urgency and importance — revealing that what feels most urgent is often not most important, and vice versa.",
    tags: ["Prioritization", "Focus", "Time Management"],
    roles: ["Executives", "Managers", "Individual Contributors", "Anyone"],
    overview: "The Eisenhower Matrix, also known as the Urgent-Important Matrix, is a personal and team productivity framework attributed to President Dwight D. Eisenhower. He reportedly said: 'I have two kinds of problems, the urgent and the important. The urgent are not important, and the important are never urgent.' Stephen Covey later popularized it in 'The 7 Habits of Highly Effective People.'",
    problem: "Most professionals spend the majority of their time reacting to urgent demands rather than investing in the important work that drives meaningful long-term results. The matrix makes this pattern visible and provides a framework to change it.",
    components: [
      ["Q1: Urgent + Important", "DO IT NOW. Crises, deadlines, emergencies. These cannot be deferred. The goal is to minimize time here through better planning."],
      ["Q2: Not Urgent + Important", "SCHEDULE IT. Strategy, planning, relationships, learning. Highest-leverage work. Highly effective people spend most time here."],
      ["Q3: Urgent + Not Important", "DELEGATE IT. Interruptions, some meetings, some emails. Others can handle these. Learn to say no or delegate."],
      ["Q4: Not Urgent + Not Important", "ELIMINATE IT. Time-wasters, trivial tasks, mindless browsing. Remove from your calendar entirely."],
    ],
    whenToUse: [
      "Weekly personal priority planning",
      "Team workload review and task delegation",
      "When feeling overwhelmed and reactive rather than proactive",
      "Strategic planning — deciding where to focus resources",
      "Onboarding new managers to teach priority thinking",
    ],
    pitfalls: [
      "Treating all urgent tasks as important — urgency is not the same as importance",
      "Neglecting Q2 work because it never feels urgent",
      "Failing to actually eliminate Q4 tasks, just moving them around",
      "Not revisiting the matrix regularly as priorities shift",
    ],
    software: ["Eisenhower App", "Todoist", "Notion", "ClickUp", "Microsoft To Do", "Any paper notepad"],
  },

  // ── SECTION 4 ──────────────────────────────────────────
  {
    num: 10, section: 4, theme: "teal",
    name: "OKRs",
    question: "What outcomes are we aiming for and how will we measure success?",
    summary: "Objectives and Key Results — the goal-setting framework from Intel, popularized at Google, that aligns individual, team, and company work through ambitious qualitative objectives and measurable key results.",
    tags: ["Goals", "Alignment", "Strategy"],
    roles: ["CEO", "Leadership Team", "All Departments", "Individuals"],
    overview: "OKRs (Objectives and Key Results) is a goal-setting framework invented by Andy Grove at Intel in the 1970s and later evangelized by venture capitalist John Doerr. Adopted by Google in 1999, it has become the de facto goal-setting system for thousands of technology companies and high-performance organizations. OKRs align effort by connecting individual work to company-level ambitions.",
    problem: "Traditional annual goals are often vague, disconnected from strategy, and forgotten by March. OKRs solve this with a quarterly rhythm, transparent company-wide visibility, and a distinction between inspiring objectives and measurable key results.",
    components: [
      ["Objective (O)", "A qualitative, ambitious, inspiring goal that answers: Where do we want to go? Must be motivating and clear — not numeric."],
      ["Key Result (KR)", "2–5 quantitative metrics that measure progress toward the Objective. If it cannot be scored 0 to 1.0, it is not a Key Result."],
      ["OKR Score", "At cycle end, each KR is graded 0.0–1.0. A score of 0.7 is often ideal — 1.0 may mean the target was too easy."],
      ["Stretch Goals", "OKRs are designed to be aspirational. Teams should aim for goals that feel just out of reach."],
      ["Transparency", "All OKRs at all levels are visible to everyone in the organization. Alignment requires visibility."],
    ],
    whenToUse: [
      "Company-wide quarterly goal-setting cycles",
      "Aligning multiple teams toward a shared outcome",
      "Post-fundraise or during rapid scaling phases",
      "Annual strategic planning that cascades to execution",
      "When accountability and measurability are cultural priorities",
    ],
    pitfalls: [
      "Setting too many OKRs — 3–5 per team maximum",
      "Confusing Key Results with tasks or activities",
      "Using OKRs as a performance review tool — they are a planning tool",
      "Setting OKRs top-down only — the best OKRs combine top-down direction with bottom-up input",
    ],
    software: ["Lattice", "Workboard", "Betterworks", "Leapsome", "15Five", "Notion", "Google Sheets"],
  },
  {
    num: 11, section: 4, theme: "teal",
    name: "Balanced Scorecard",
    question: "How do we balance financial and non-financial performance?",
    summary: "A strategic measurement framework by Kaplan & Norton that evaluates organizational health across four linked perspectives: Financial, Customer, Internal Processes, and Learning & Growth.",
    tags: ["Strategy", "Performance", "Measurement"],
    roles: ["CEO", "Finance Teams", "Customer Success", "Operations", "HR", "Strategy"],
    overview: "The Balanced Scorecard (BSC) was developed by Robert Kaplan and David Norton and introduced in a 1992 Harvard Business Review article. It was revolutionary: organizations should not be measured solely on financial results, but across four interconnected perspectives. It forces organizations to ask not just 'How did we do financially?' but also 'How do customers see us?', 'What must we excel at internally?', and 'Are we learning and growing?'",
    problem: "Organizations that focus exclusively on financial metrics are like pilots flying by looking only at the fuel gauge. By the time financial results turn bad, the underlying problems have often been building for months. BSC provides a leading-indicator view of organizational health.",
    components: [
      ["Financial", "How do we look to shareholders? Metrics: revenue growth, profit margin, ROI, cost reduction, cash flow."],
      ["Customer", "How do customers see us? Metrics: CSAT, NPS, retention rate, market share, customer lifetime value."],
      ["Internal Processes", "What must we excel at? Metrics: cycle time, quality rates, process efficiency, time to market."],
      ["Learning & Growth", "Can we continue to improve? Metrics: employee engagement, training hours, innovation rate, capability development."],
    ],
    whenToUse: [
      "Annual strategic planning and execution",
      "Organizational transformation initiatives",
      "Board reporting and executive performance review",
      "Communicating strategy to the entire organization",
      "Linking individual performance to organizational strategy",
    ],
    pitfalls: [
      "Including too many metrics — each perspective should have 3–5 key measures",
      "Not building a Strategy Map to show cause-and-effect links between perspectives",
      "Treating BSC as a reporting tool rather than a strategy execution tool",
      "Only reviewing the scorecard quarterly — monthly reviews keep it alive",
    ],
    software: ["ClearPoint Strategy", "Balanced Scorecard Designer", "Cascade Strategy", "Tableau", "Power BI", "Palantir", "Domo"],
  },
  {
    num: 12, section: 4, theme: "teal",
    name: "KPI Tracking",
    question: "What key indicators tell us if we are on track?",
    summary: "The systematic selection, measurement, and review of Key Performance Indicators — the vital signs of a business — using dashboards and regular cadences to enable data-driven decisions.",
    tags: ["Metrics", "Dashboards", "Performance"],
    roles: ["All Department Heads", "Data Teams", "Finance", "Operations"],
    overview: "KPIs (Key Performance Indicators) are the quantitative metrics organizations use to evaluate success in achieving specific objectives. While every organization tracks many metrics, KPIs are the critical few that matter most — the vital signs of the business. Effective KPI tracking creates accountability, surfaces problems early, and enables data-driven decision-making.",
    problem: "Without a disciplined KPI framework, organizations either track too many metrics (metric overload) or the wrong metrics (activity metrics instead of outcome metrics). Both lead to poor decisions and missed problems until they become crises.",
    components: [
      ["Lagging Indicators", "Measure outcomes that have already occurred. E.g., annual revenue, churn rate. They confirm trends but cannot predict them."],
      ["Leading Indicators", "Measure activities that predict future outcomes. E.g., demos scheduled, training hours. These are more actionable."],
      ["Process KPIs", "Measure efficiency of internal processes. E.g., time to resolve a support ticket."],
      ["Output KPIs", "Measure what the process produces. E.g., features shipped, units manufactured."],
      ["Outcome KPIs", "Measure the impact on organizational goals. E.g., customer lifetime value."],
    ],
    whenToUse: [
      "Building or refreshing a business intelligence function",
      "Post-restructure to align teams on new priorities",
      "Quarterly business reviews and board reporting",
      "Daily operational management of fast-moving teams",
      "Investor reporting and fundraising preparation",
    ],
    pitfalls: [
      "Tracking too many KPIs — the 'Key' in KPI is critical",
      "Measuring only lagging indicators without any leading indicators",
      "Poor data quality undermining trust in the metrics",
      "Not reviewing KPIs regularly — monthly at minimum",
    ],
    software: ["Tableau", "Power BI", "Looker Studio", "Klipfolio", "Geckoboard", "Domo", "Salesforce", "HubSpot"],
  },

  // ── SECTION 5 ──────────────────────────────────────────
  {
    num: 13, section: 5, theme: "purple",
    name: "After Action Review",
    question: "What did we plan to do, what happened, and what did we learn?",
    summary: "A structured post-event debrief from the U.S. Army that analyzes the gap between planned and actual outcomes to extract actionable lessons in a psychologically safe, rank-free environment.",
    tags: ["Learning", "Debrief", "Post-Project"],
    roles: ["Project Teams", "Facilitators", "Leadership (optional)", "Documentation Lead"],
    overview: "The After Action Review (AAR) is a structured debrief process originally developed by the United States Army in the 1970s to analyze training exercises and combat operations. Widely adopted in business, healthcare, disaster response, and sports, it creates a safe, structured space to honestly evaluate what happened, why it happened, and what should be done differently next time.",
    problem: "Teams complete projects and immediately move on to the next one, taking their hard-won lessons with them — until they leave the organization. AARs institutionalize learning by creating a mandatory pause to extract and document lessons before they are lost.",
    components: [
      ["What was planned?", "Establish a shared baseline. What were the intended outcomes and goals?"],
      ["What actually happened?", "Describe reality without judgment. Stick to observable facts. Separate what happened from why."],
      ["Why were there differences?", "Analyze the gap between plan and reality. Root causes, not symptoms."],
      ["What did we learn?", "Extract actionable insights. What should we continue, start, or stop doing?"],
    ],
    whenToUse: [
      "After completing a project or major phase",
      "Following a product launch, marketing campaign, or event",
      "After a significant incident, outage, or crisis",
      "After a major sales deal is won or lost",
      "Following any high-stakes execution where learnings are valuable",
    ],
    pitfalls: [
      "Waiting too long — hold the AAR immediately while memories are fresh",
      "Allowing blame and defensiveness — the facilitator must maintain safety",
      "Generating lessons but not documenting or acting on them",
      "Only holding AARs after failures — successes deserve the same analysis",
    ],
    software: ["Confluence", "Notion", "Miro", "Mural", "Google Docs", "Loom", "Retrium"],
  },
  {
    num: 14, section: 5, theme: "purple",
    name: "Retrospective",
    question: "What should we start, stop or continue doing to improve?",
    summary: "A regular team improvement ceremony from the Agile/Scrum framework where the team examines its own working processes, identifies what's working and what isn't, and commits to specific improvements.",
    tags: ["Agile", "Team Health", "Improvement"],
    roles: ["Scrum Master (Facilitator)", "Development Team", "Product Owner"],
    overview: "The Retrospective (Retro) is an Agile ceremony — typically held at the end of each Sprint — where the team examines their own working processes and identifies improvements. One of the most powerful tools for building high-performing teams, the Retrospective institutionalizes continuous improvement at the team level.",
    problem: "Teams develop habits — both good and bad — that go unexamined. Without regular retrospectives, dysfunction compounds over time: poor communication patterns, inefficient processes, and unresolved tensions accumulate until they become serious problems.",
    components: [
      ["Start", "What should we begin doing that we are not doing? New practices, tools, or behaviors."],
      ["Stop", "What are we doing that is not working or causing friction? Practices to eliminate."],
      ["Continue", "What is working well and should be preserved? Practices to reinforce and protect."],
      ["Action Items", "1–3 specific, owned, time-bound improvements to act on before the next retro."],
      ["Retrospective of Retro", "Periodically reflect on the retrospective format itself — is it still effective?"],
    ],
    whenToUse: [
      "End of every Sprint in Scrum teams",
      "End of every project phase or quarter",
      "When team morale or productivity is declining",
      "After major team changes (new members, new processes)",
      "Any team wanting to build a culture of continuous improvement",
    ],
    pitfalls: [
      "Generating ideas but not converting them into action items with owners",
      "Not reviewing previous action items at the start of the next retro",
      "Skipping retros when busy — this is when they are most needed",
      "Facilitating the same format every time — vary formats to keep engagement high",
    ],
    software: ["Retrium", "EasyRetro", "TeamRetro", "Parabol", "Miro", "Mural", "Notion"],
  },
  {
    num: 15, section: 5, theme: "purple",
    name: "Lessons Learned Log",
    question: "What knowledge should we capture and share?",
    summary: "A persistent organizational knowledge repository — distinct from one-off AARs or Retros — that captures insights, mistakes, and best practices from projects for use by future teams.",
    tags: ["Knowledge", "Documentation", "Institutional Memory"],
    roles: ["Project Managers", "PMO", "All Team Members", "Knowledge Management"],
    overview: "A Lessons Learned Log is an organizational knowledge management practice that captures insights, mistakes, successes, and process improvements from projects and operations. A core component of PMBOK and PRINCE2 project close-out, it focuses specifically on documentation and knowledge transfer — ensuring that hard-won wisdom does not disappear when a project ends or when team members leave.",
    problem: "Organizations repeatedly make the same mistakes because lessons are never captured or are captured but never consulted. The Lessons Learned Log creates an accessible, searchable institutional memory that new team members and future project leaders can draw on before starting similar work.",
    components: [
      ["Date & Context", "When the lesson was identified and which project or activity it relates to."],
      ["Category", "Area of learning: Communication, Risk, Technology, Process, Stakeholders, etc."],
      ["Description", "What happened — the situation or event, as objectively as possible."],
      ["Impact", "What was the consequence? Positive or negative? Quantify if possible."],
      ["Root Cause", "Why did it happen? Avoid blame — focus on systemic causes."],
      ["Recommendation", "What should future teams do differently or continue doing?"],
      ["Owner", "Who is responsible for acting on or sharing this lesson?"],
    ],
    whenToUse: [
      "Project close-out — mandatory in PMBOK and PRINCE2",
      "Onboarding new project leaders to similar project types",
      "Post-incident reviews and crisis management",
      "Organizational scaling — transferring knowledge from founding team to new hires",
      "Any time institutional knowledge is at risk of being lost",
    ],
    pitfalls: [
      "Waiting until project close-out — capture lessons throughout the project",
      "Creating the log but never making it searchable or accessible",
      "Lessons with no owner — a lesson without an owner changes nothing",
      "Not reviewing relevant logs at the START of new projects",
    ],
    software: ["Confluence", "SharePoint", "Notion", "Guru", "Tettra", "Microsoft Teams Wiki", "Jira"],
  },
];

// ── DOM HELPERS ─────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ── HERO INDEX ──────────────────────────────────────────────
function buildHeroIndex() {
  const list = $('#heroIndex');
  if (!list) return;
  MODELS.forEach(m => {
    const t = THEME_COLORS[m.theme];
    const item = document.createElement('div');
    item.className = 'hero-index-item';
    item.innerHTML = `
      <span class="idx-num">${String(m.num).padStart(2, '0')}</span>
      <span class="hero-index-dot" style="background:${t.main}"></span>
      <span>${m.name}</span>
    `;
    item.addEventListener('click', () => {
      document.getElementById(`section-${m.section}`)
        .scrollIntoView({ behavior: 'smooth' });
    });
    list.appendChild(item);
  });
}

// ── MODEL CARDS ─────────────────────────────────────────────
function buildCards() {
  SECTIONS.forEach(sec => {
    const grid = $(`#grid-${sec.id}`);
    if (!grid) return;
    const sectionModels = MODELS.filter(m => m.section === sec.id);
    sectionModels.forEach((m, i) => {
      const t = THEME_COLORS[m.theme];
      const card = document.createElement('div');
      card.className = 'model-card';
      card.setAttribute('data-theme', m.theme);
      card.style.transitionDelay = `${i * 80}ms`;
      card.innerHTML = `
        <div class="card-accent" style="background:${t.main}"></div>
        <div class="card-body">
          <div class="card-header">
            <div class="card-number" style="color:${t.main}">${String(m.num).padStart(2,'0')}</div>
            <div class="card-titles">
              <div class="card-name" style="color:${t.main}">${m.name}</div>
              <div class="card-question">${m.question}</div>
            </div>
          </div>
          <p class="card-desc">${m.summary}</p>
          <div class="card-tags">
            ${m.tags.map(tag => `<span class="card-tag" style="background:${t.light};color:${t.main}">${tag}</span>`).join('')}
          </div>
          <div class="card-footer">
            <span class="card-roles">${m.roles.slice(0,2).join(' · ')}</span>
            <button class="card-cta" style="color:${t.main};border-color:${t.main}" data-model="${m.num}">Explore →</button>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openModal(m.num));
      grid.appendChild(card);
    });
  });
}

// ── INTERSECTION OBSERVER (card reveal) ─────────────────────
function initObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  $$('.model-card').forEach(c => obs.observe(c));
}

// ── MODAL ────────────────────────────────────────────────────
function openModal(modelNum) {
  const m = MODELS.find(x => x.num === modelNum);
  if (!m) return;
  const t = THEME_COLORS[m.theme];

  const inner = $('#modalInner');
  inner.innerHTML = `
    <div class="modal-band" style="background:${t.main}"></div>
    <div class="modal-header" style="position:relative;overflow:hidden">
      <div class="modal-num" style="color:${t.main}">${String(m.num).padStart(2,'0')}</div>
      <div class="modal-title" style="color:${t.main}">${m.name}</div>
      <div class="modal-question">${m.question}</div>
    </div>
    <div style="padding:0 2.5rem 2.5rem">

      <div class="modal-section-label" style="color:${t.main}">Overview</div>
      <p class="modal-text">${m.overview}</p>

      <div class="modal-section-label" style="color:${t.main}">The Problem It Solves</div>
      <p class="modal-text">${m.problem}</p>

      <div class="modal-section-label" style="color:${t.main}">Core Components</div>
      <table class="modal-table">
        <thead>
          <tr>
            <th style="background:${t.main};color:white;width:30%">Component</th>
            <th style="background:${t.main};color:white">Description</th>
          </tr>
        </thead>
        <tbody>
          ${m.components.map(([k,v]) => `<tr><td><strong>${k}</strong></td><td>${v}</td></tr>`).join('')}
        </tbody>
      </table>

      <div class="modal-section-label" style="color:${t.main}">When to Use It</div>
      <ul class="modal-list">
        ${m.whenToUse.map(i => `<li style="--arrow:${t.main}">${i}</li>`).join('')}
      </ul>

      <div class="modal-section-label" style="color:${t.main}">Common Pitfalls</div>
      <ul class="modal-list">
        ${m.pitfalls.map(i => `<li>${i}</li>`).join('')}
      </ul>

      <div class="modal-section-label" style="color:${t.main}">Recommended Software</div>
      <div class="modal-software">
        ${m.software.map(s => `<span class="software-tag" style="background:${t.light};color:${t.main};border-color:${t.light}">${s}</span>`).join('')}
      </div>

      <div class="modal-section-label" style="color:${t.main}">Who Is Involved</div>
      <div class="modal-software">
        ${m.roles.map(r => `<span class="software-tag" style="background:${t.pale};color:${t.main};border-color:${t.light}">${r}</span>`).join('')}
      </div>

    </div>
  `;

  $('#modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── REFERENCE TABLE ──────────────────────────────────────────
function buildRefTable() {
  const table = $('#refTable');
  if (!table) return;

  const sectionNames = {
    1: "Roles",
    2: "Delivery",
    3: "Constraints",
    4: "Measurement",
    5: "Review",
  };

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>#</th>
      <th>Model</th>
      <th>Section</th>
      <th>Best For</th>
      <th>Key Question</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  MODELS.forEach(m => {
    const t = THEME_COLORS[m.theme];
    const tr = document.createElement('tr');
    tr.style.cursor = 'pointer';
    tr.innerHTML = `
      <td class="ref-num">${String(m.num).padStart(2,'0')}</td>
      <td class="ref-name">
        <span class="ref-dot" style="background:${t.main}"></span>${m.name}
      </td>
      <td>
        <span class="ref-badge" style="background:${t.main}22;color:${t.light};border:1px solid ${t.main}44">
          ${sectionNames[m.section]}
        </span>
      </td>
      <td style="color:rgba(255,255,255,.65)">${m.tags[0]}</td>
      <td style="color:rgba(255,255,255,.5);font-style:italic;font-size:.82rem">${m.question}</td>
    `;
    tr.addEventListener('click', () => openModal(m.num));
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
}

// ── NAV SCROLL BEHAVIOUR ─────────────────────────────────────
function initNav() {
  const nav = $('#nav');
  const backTop = $('#backTop');
  const sections = $$('.section[data-theme]');
  const navLinks = $$('.nav-section');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        nav.classList.toggle('scrolled', y > 40);
        backTop.classList.toggle('visible', y > 600);

        // Active nav link
        let current = '';
        sections.forEach(sec => {
          if (sec.offsetTop - 120 <= y) current = sec.id;
        });
        navLinks.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ── MOBILE MENU ──────────────────────────────────────────────
function initMobileMenu() {
  const btn = $('#menuBtn');
  const menu = $('#mobileMenu');
  btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });
  $$('.mobile-link').forEach(l => {
    l.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });
}

// ── MODAL EVENTS ────────────────────────────────────────────
function initModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', e => {
    if (e.target === $('#modalOverlay')) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

// ── BACK TO TOP ──────────────────────────────────────────────
function initBackTop() {
  $('#backTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── CARD STAGGER ON SCROLL ───────────────────────────────────
function initCardDelays() {
  $$('.models-grid').forEach(grid => {
    const cards = $$('.model-card', grid);
    cards.forEach((card, i) => {
      card.style.transitionDelay = `${i * 80}ms`;
    });
  });
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildHeroIndex();
  buildCards();
  buildRefTable();
  initNav();
  initMobileMenu();
  initModal();
  initBackTop();
  initCardDelays();

  // Defer observer until cards exist
  requestAnimationFrame(() => {
    requestAnimationFrame(initObserver);
  });
});
