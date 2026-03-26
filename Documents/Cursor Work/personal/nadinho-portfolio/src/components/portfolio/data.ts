export const X_HANDLE = "NadinhoCrypto";
export const X_URL = `https://x.com/${X_HANDLE}`;

export const SKILLS = [
  "Vibe Coding (teaching it now)",
  "Full-stack development & shipping real products",
  "Blockchain / Crypto projects (staking platforms on ARC)",
  "Building in public on X",
] as const;

export type PortfolioProject = {
  name: string;
  description: string;
  href: string;
  status: string;
};

export const PROJECTS: PortfolioProject[] = [
  {
    name: "Stake on ARC",
    description:
      "A staking dApp on ARC Blockchain with a native token and smooth on-chain user flows.",
    href: "https://stakeonarc.vercel.app",
    status: "Live now",
  },
  {
    name: "Project 02 (Placeholder)",
    description:
      "Next build in the lab. Day 1 bugs, day N shipped — sharing progress publicly.",
    href: "#",
    status: "Building",
  },
  {
    name: "Project 03 (Placeholder)",
    description:
      "Another product idea I’m actively working on. Vibe coding in public — no fake perfection.",
    href: "#",
    status: "Cooking",
  },
];

export const VIBE_LEVEL_LABEL = "MAX";
export const VIBE_LEVEL_PERCENT = 100;

export const ABOUT_BIO =
  "10hr/day vibe coder building in public. From Day 1 bugs to shipped products. Real grind, real growth, no fake perfection. Grateful for every follower.";

export const WHAT_I_DO_SUMMARY =
  "Teaching Vibe Coding for free, building real products, and shipping blockchain/crypto experiments the honest way.";

