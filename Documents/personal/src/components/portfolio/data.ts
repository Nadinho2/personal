export const X_HANDLE = "NadinhoCrypto";
export const X_URL = `https://x.com/${X_HANDLE}`;

/** WhatsApp / group invite — short link resolves to join flow */
export const CLASS_JOIN_URL = "https://t.co/rzKThSx2mi";

export const STUDENT_HYPE =
  "My current students are already shipping real websites and competing in the Starknet Bounty — the energy is unreal.";

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
    name: "Ultimaspark",
    description: "A full-featured education website — courses, structure, and polish end to end.",
    href: "https://www.ultimaspark.com",
    status: "Live",
  },
  {
    name: "First Sons",
    description: "Project site and web presence — built and shipped for the community.",
    href: "https://www.firstsons.xyz",
    status: "Live",
  },
  {
    name: "CryptoVault",
    description:
      "Track, learn & grow your crypto portfolio — guides, trending coins, beginner-friendly flow.",
    href: "https://crypto-portfolio-website.vercel.app/",
    status: "Live",
  },
  {
    name: "Stake on ARC",
    description:
      "Staking and prediction on Arc — native token, live TVL vibes, and real on-chain flows.",
    href: "https://stakeonarc.vercel.app/",
    status: "Live",
  },
  {
    name: "VibeRisk",
    description:
      "Crypto position & risk calculator plus journals — built for futures traders who want clarity.",
    href: "https://viberisk-17i6.vercel.app/",
    status: "Live",
  },
  {
    name: "OddsEdge",
    description:
      "Sports & crypto odds calculator — parlays, EV, and sharp tools without the fluff.",
    href: "https://oddsedge-zeta.vercel.app/",
    status: "Live",
  },
];

export const VIBE_LEVEL_LABEL = "MAX";
export const VIBE_LEVEL_PERCENT = 100;

export const ABOUT_BIO =
  "10hr/day vibe coder building in public. From Day 1 bugs to shipped products. Real grind, real growth, no fake perfection. Grateful for every follower.";

export const WHAT_I_DO_SUMMARY =
  "Teaching Vibe Coding for free, building real products, and shipping blockchain/crypto experiments the honest way.";
