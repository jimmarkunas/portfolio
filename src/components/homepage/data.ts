import {
  HexonifyLogo,
  LoopinexLogo,
  PixeloraLogo,
  ShapeEightIcon,
  ShapeFourIcon,
  ShapeSevenIcon,
  ShapeThreeIcon,
  VayloStudioLogo,
  ZentroxLogo,
} from "./icons"
import type { HighlightArtVariant } from "./ui"

export const experienceCards = [
  {
    title: "Onetime Delivery",
    description:
      "I’m specialize in turning complex problems into elegant solutions. My approach blends creativity.",
    icon: ShapeThreeIcon,
    wide: true,
  },
  { title: "Precision-Driven", description: "", icon: ShapeEightIcon },
  { title: "UX-Focus Design", description: "", icon: ShapeSevenIcon },
  { title: "Strategic Thinking", description: "", icon: ShapeFourIcon },
]

export const awardItems = [
  { rank: "[1]", year: "2025", title: "Site of the day", source: "Awwwards" },
  { rank: "[2]", year: "2025", title: "UX Design Excellence", source: "Bechance" },
  { rank: "[3]", year: "2024", title: "Product Innovation Recognition", source: "Dribbble" },
  { rank: "[4]", year: "2023", title: "Visual Design Honor", source: "Lapa Ninja" },
]

export const clientItems = [
  { name: "Zentrox", year: "2023", icon: ZentroxLogo },
  { name: "Pixelora", year: "2023", icon: PixeloraLogo },
  { name: "Loopinex", year: "2024", icon: LoopinexLogo },
  { name: "Vaylo Studio", year: "2024", icon: VayloStudioLogo },
  { name: "Hexonify", year: "2025", icon: HexonifyLogo },
]

export const insightFilters = ["All", "Resources", "Creative Process", "Design Principles", "Trips & Tricks"]
export const insightSortOptions = ["Newest", "Oldest", "Most Popular"]

export const highlightProjects: Array<{
  category: string
  readTime: string
  title: string
  art: HighlightArtVariant
}> = [
  {
    category: "Branding",
    readTime: "8 min read",
    title: "Conducting in-depth research and usability testing",
    art: "oliveSphere",
  },
  {
    category: "UI/UX Design",
    readTime: "7 min read",
    title: "Conducting in-depth user research and usability testing",
    art: "redSphere",
  },
  {
    category: "Motion",
    readTime: "6 min read",
    title: "Cover a broad range of design needs and can be tailored",
    art: "orangeDisk",
  },
  {
    category: "Marketing",
    readTime: "5 min read",
    title: "Providing expert advice and strategic guidance",
    art: "mintColumn",
  },
]

export const repeatedHighlightProjects = Array.from({ length: 4 }, (_, rowIndex) =>
  highlightProjects.map((project, columnIndex) => ({
    ...project,
    key: `${rowIndex}-${columnIndex}-${project.category}`,
  })),
).flat()

export const desktopHeroLogoAxisX = 18
export const desktopHeroRailLabelX = 42
export const desktopHeroRailLineX = desktopHeroRailLabelX + 9
export const desktopHeroYearLabelX = desktopHeroRailLineX + 9
