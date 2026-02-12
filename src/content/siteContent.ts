export type VentureCategory =
  | "Infrastructure"
  | "Education"
  | "Experimental"
  | "Operator Development";

export type VentureStatus = "Live" | "Build" | "Research";

export interface VentureLink {
  label: string;
  href: string;
}

export interface Venture {
  name: string;
  slug: string;
  category: VentureCategory;
  status: VentureStatus;
  valueProp: string;
  description: string[];
  whoItsFor: string;
  howItWorks: string;
  currentStage: string;
  nextMilestone: string;
  metric?: string;
  links?: VentureLink[];
  featured?: boolean;
}

export interface LabsPost {
  title: string;
  date: string;
  bottleneck: string;
  hypothesis: string;
  currentResult: string;
  nextStep: string;
}

export const siteContent = {
  brand: {
    name: "ProtoLoop",
    shortMission:
      "ProtoLoop is a Venture Systems Studio. We design and launch ventures through structured feedback loops.",
    mission:
      "We build operators, infrastructure, and compounding momentum.",
    deeperNote:
      "Behind the studio model is a practical belief: people perform best when their role, system, and timing are aligned. ProtoLoop develops operators through disciplined execution and clear ownership.",
    email: "hello@protoloop.studio",
  },
  navigation: [
    { label: "Studio", href: "/studio" },
    { label: "Ventures", href: "/ventures" },
    { label: "Framework", href: "/framework" },
    { label: "Labs", href: "/labs" },
    { label: "Work with us", href: "/work-with-us" },
  ],
  footerLinks: [
    { label: "Ivan", href: "/ivan" },
    { label: "Contact", href: "/contact" },
    { label: "Operators", href: "/operators" },
    { label: "Loop Diagnostic", href: "/loop-diagnostic" },
  ],
  framework: {
    stages: [
      {
        name: "Attention",
        description: "Getting people to notice and care.",
      },
      {
        name: "Interaction",
        description: "Deepening engagement and building relationships.",
      },
      {
        name: "Conversion",
        description: "Turning engagement into outcomes.",
      },
    ],
    loopStatement:
      "Attention -> Interaction -> Conversion -> More Attention",
  },
  whatWeBuild: [
    {
      title: "Venture Building",
      description:
        "Structured venture design from thesis to launch with clear milestones.",
    },
    {
      title: "Systems and Automation",
      description:
        "Operational architecture that supports repeatable growth and execution.",
    },
    {
      title: "Education and Speaking",
      description:
        "Practical frameworks that help teams think in loops, not one-off tactics.",
    },
  ],
  founders: {
    ivan: {
      name: "Ivan",
      role: "Creator",
      strengths: ["Creativity", "Ideation", "Communication"],
      callings: [
        "Rapid prototyping",
        "Education",
        "Connecting people",
      ],
      summary:
        "Ivan leads creation across the studio: prototyping, storytelling, education, and relationship building.",
    },
    kitron: {
      name: "Kitron",
      role: "Architect",
      strengths: ["Structure", "Systems", "Leadership"],
      callings: [
        "Creating structure",
        "People management",
        "Business operations",
      ],
      summary:
        "Kitron leads architecture: systems, operations, distribution, and team execution.",
    },
    shared:
      "Both founders lead strategy across partnerships, hiring, and venture selection.",
  },
  partnershipModel:
    "ProtoLoop works with operators and organizations through clear lanes: venture partnership and systems partnership. Each engagement starts with bottleneck diagnosis, system mapping, and a focused execution plan.",
  workWithUsLanes: [
    {
      title: "Venture Partner",
      whoItsFor:
        "Founders, operators, and groups with distribution, capital, or customer access.",
      whatWeDo:
        "Co-design and launch ventures with disciplined testing, narrative clarity, and operating systems.",
      howWeWork:
        "Shared thesis, scoped sprint cycles, and weekly decision checkpoints tied to loop stages.",
      goodFit:
        "Teams that move quickly, can support pilots, and value long-term venture quality over short-term noise.",
    },
    {
      title: "Systems Partner",
      whoItsFor:
        "Businesses that need automation and growth systems without operational chaos.",
      whatWeDo:
        "Design and implement systems for lead flow, communication, execution tracking, and conversion reliability.",
      howWeWork:
        "Operator interviews, current-state mapping, architecture proposal, then phased implementation.",
      goodFit:
        "Leaders ready to commit to process discipline and measurable workflow upgrades.",
    },
  ],
  speakingTopics: [
    "Education systems for modern creators",
    "Rapid prototyping and execution loops",
    "Building mindset under uncertainty",
    "Attention, interaction, and conversion frameworks",
  ],
  ivanFormats: ["Keynote", "Workshop", "Consulting"],
  labsPosts: [
    {
      title: "Refining Venture Intake Signals",
      date: "2026-01-28",
      bottleneck:
        "High-quality opportunities were mixed with low-readiness conversations.",
      hypothesis:
        "A short intake sequence tied to loop maturity will improve partner fit.",
      currentResult:
        "Initial screening is faster and discussions start with clearer scope.",
      nextStep:
        "Standardize the intake scorecard across all partnership lanes.",
    },
    {
      title: "Operator Weekly Rhythm Pilot",
      date: "2026-01-16",
      bottleneck:
        "Execution slowed when operators switched contexts without a shared cadence.",
      hypothesis:
        "A fixed weekly rhythm with stage-specific metrics will improve velocity.",
      currentResult:
        "Pilot teams report stronger handoffs and fewer stalled decisions.",
      nextStep:
        "Formalize a studio-wide operating rhythm template.",
    },
    {
      title: "Conversion Narrative Experiment",
      date: "2025-12-18",
      bottleneck:
        "Prospects understood features but not concrete outcomes.",
      hypothesis:
        "Outcome-first narrative blocks will increase conversion clarity.",
      currentResult:
        "Early messaging tests show better qualification quality.",
      nextStep:
        "Apply the narrative structure to venture landing pages.",
    },
    {
      title: "Attention Quality Over Volume",
      date: "2025-12-04",
      bottleneck:
        "Top-of-funnel channels produced activity but weak interaction quality.",
      hypothesis:
        "Narrowing audience profiles will reduce noise and improve interaction depth.",
      currentResult:
        "Smaller cohorts produced stronger engagement consistency.",
      nextStep:
        "Roll out channel filters in the next campaign cycle.",
    },
  ] as LabsPost[],
  ventures: [
    {
      name: "SimplyCVR",
      slug: "simplycvr",
      category: "Infrastructure",
      status: "Live",
      valueProp:
        "Direct mail to QR funnel for home improvement businesses with lead tracking.",
      description: [
        "SimplyCVR helps local service companies turn offline campaigns into measurable digital responses.",
        "The system links direct mail, QR interactions, and lead capture into one operating view for follow-up and conversion management.",
      ],
      whoItsFor:
        "Home improvement operators and field teams that need stronger attribution from local campaigns.",
      howItWorks:
        "Campaigns deploy with trackable assets, response routing, and a simple dashboard for lead status and handoff.",
      currentStage:
        "Live with active operator feedback and process refinements.",
      nextMilestone:
        "Expand integrations and improve conversion workflow automation.",
      metric: "Pilot metrics available on request.",
      links: [{ label: "Visit", href: "https://example.com/simplycvr" }],
      featured: true,
    },
    {
      name: "Protosticks",
      slug: "protosticks",
      category: "Experimental",
      status: "Build",
      valueProp:
        "Modular prototyping components for rapid physical invention.",
      description: [
        "Protosticks reduces friction between concept and physical test by offering reusable modular components.",
        "The focus is speed-to-feedback for inventors and operator teams validating hardware-adjacent ideas.",
      ],
      whoItsFor:
        "Inventors, product teams, and educators running rapid physical prototype cycles.",
      howItWorks:
        "Component kits support quick assembly, test logging, and iteration planning.",
      currentStage:
        "Build phase with design and usability iteration.",
      nextMilestone:
        "Complete pilot batch and document repeatable build patterns.",
      metric: "Initial batch validation in progress.",
    },
    {
      name: "EZ Autonomy",
      slug: "ez-autonomy",
      category: "Infrastructure",
      status: "Research",
      valueProp:
        "Autonomy tools and services for specific industries.",
      description: [
        "EZ Autonomy explores operational autonomy layers for teams with repetitive, high-friction workflows.",
        "The venture focuses on practical deployment paths, not speculative automation claims.",
      ],
      whoItsFor:
        "Industry operators seeking practical autonomy adoption with clear operational boundaries.",
      howItWorks:
        "Diagnostic mapping identifies high-leverage tasks, then structured autonomy pilots are scoped.",
      currentStage:
        "Research with partner discovery and workflow mapping.",
      nextMilestone:
        "Launch first constrained autonomy pilot in one target vertical.",
    },
    {
      name: "LoopLedger",
      slug: "loop-ledger",
      category: "Infrastructure",
      status: "Build",
      valueProp:
        "Execution intelligence layer for tracking venture loop performance.",
      description: [
        "LoopLedger provides operators with a single source of truth across attention, interaction, and conversion stages.",
        "It helps teams measure where momentum compounds and where the loop stalls.",
      ],
      whoItsFor:
        "Studio teams and partners running multiple initiatives in parallel.",
      howItWorks:
        "Projects are tagged by loop stage, then reviewed with milestone and bottleneck signals.",
      currentStage:
        "Build with internal deployment across studio projects.",
      nextMilestone:
        "Release partner-facing dashboard workflows.",
    },
    {
      name: "Operator Grid",
      slug: "operator-grid",
      category: "Operator Development",
      status: "Build",
      valueProp:
        "Operator development system for role clarity and execution growth.",
      description: [
        "Operator Grid helps builders grow through defined ownership, mentorship, and execution cycles.",
        "The venture translates abstract talent potential into measurable operating capability.",
      ],
      whoItsFor:
        "Early and mid-stage operators stepping into larger ownership roles.",
      howItWorks:
        "Participants run structured sprint cycles with role scorecards and mentor feedback loops.",
      currentStage:
        "Build phase with curriculum and operating cadence design.",
      nextMilestone:
        "Run the first formal operator cohort.",
      metric: "Pilot cohort planned.",
    },
    {
      name: "Signal Classroom",
      slug: "signal-classroom",
      category: "Education",
      status: "Live",
      valueProp:
        "Applied education programs for modern venture builders.",
      description: [
        "Signal Classroom translates studio execution methods into clear learning pathways.",
        "Programs emphasize immediate implementation over passive information consumption.",
      ],
      whoItsFor:
        "Creators, founders, and teams who learn best by building.",
      howItWorks:
        "Workshops and guided modules pair instruction with live project application.",
      currentStage:
        "Live with ongoing topic expansion.",
      nextMilestone:
        "Launch advanced tracks for operators managing teams.",
    },
    {
      name: "Pilot Relay",
      slug: "pilot-relay",
      category: "Infrastructure",
      status: "Research",
      valueProp:
        "Pilot orchestration framework for faster venture validation.",
      description: [
        "Pilot Relay standardizes how new ventures enter and complete early validation cycles.",
        "It reduces launch delays by aligning teams on milestones, constraints, and decision gates.",
      ],
      whoItsFor:
        "Studios and operator teams managing multiple experiments.",
      howItWorks:
        "Templates and checklists define each pilot phase from setup through conversion review.",
      currentStage:
        "Research with partner workflow interviews.",
      nextMilestone:
        "Ship a minimal pilot orchestration toolkit.",
    },
    {
      name: "Pattern Foundry",
      slug: "pattern-foundry",
      category: "Experimental",
      status: "Build",
      valueProp:
        "Experiment lab for reusable growth and product patterns.",
      description: [
        "Pattern Foundry captures successful experiments and turns them into repeatable systems.",
        "The goal is to improve quality while reducing reinvented process overhead.",
      ],
      whoItsFor:
        "Internal studio teams and selected venture partners.",
      howItWorks:
        "Experiments are logged, scored, and converted into operating playbooks.",
      currentStage:
        "Build phase with internal documentation pipeline.",
      nextMilestone:
        "Publish the first pattern pack for partner teams.",
    },
    {
      name: "Mentor Mesh",
      slug: "mentor-mesh",
      category: "Operator Development",
      status: "Research",
      valueProp:
        "Mentorship network design for operator acceleration.",
      description: [
        "Mentor Mesh links operators with targeted guidance based on role stage and current bottlenecks.",
        "It is designed to support accountable growth, not generic advisory conversations.",
      ],
      whoItsFor:
        "Operators who need focused support during role expansion.",
      howItWorks:
        "Mentorship pathways are mapped to execution milestones and loop diagnostics.",
      currentStage:
        "Research and structure design.",
      nextMilestone:
        "Pilot a small mentor-operator matching cycle.",
    },
    {
      name: "Conversion Briefing",
      slug: "conversion-briefing",
      category: "Education",
      status: "Build",
      valueProp:
        "Training system for conversion narrative and sales execution clarity.",
      description: [
        "Conversion Briefing equips teams to communicate outcomes with precision across sales and education contexts.",
        "The venture combines messaging structure with real-world conversion workflow practice.",
      ],
      whoItsFor:
        "Teams that need better conversion consistency without aggressive sales culture.",
      howItWorks:
        "Sessions include narrative design, role-play, and measurable conversion checkpoints.",
      currentStage:
        "Build phase with curriculum validation.",
      nextMilestone:
        "Run cross-team pilot with feedback instrumentation.",
      metric: "Pilot readiness tracking active.",
    },
  ] as Venture[],
};

export const featuredVentures = {
  homeFeatured: "simplycvr",
  homeBuild: ["protosticks", "loop-ledger"],
};
