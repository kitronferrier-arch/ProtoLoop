export type VentureCategory =
  | "Infrastructure"
  | "Education"
  | "Experimental"
  | "Operator Development";

export type VentureStatus = "Production" | "Build" | "Research";

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
  thumbnail?: string;
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
    email: "kitron@protoloop.net",
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
      status: "Production",
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
        "In production with active operator feedback and process refinements.",
      nextMilestone:
        "Expand integrations and improve conversion workflow automation.",
      metric: "Pilot metrics available on request.",
      links: [{ label: "Visit", href: "https://simplycvr.com" }],
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
      status: "Build",
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
        "Build phase with partner discovery and workflow mapping.",
      nextMilestone:
        "Launch first constrained autonomy pilot in one target vertical.",
    },
  ] as Venture[],
};

export const featuredVentures = {
  homeFeatured: "simplycvr",
  homeBuild: ["protosticks", "ez-autonomy"],
};
