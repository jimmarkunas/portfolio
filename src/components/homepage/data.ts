import {
  CodeIcon,
  GanttIcon,
  HexonifyLogo,
  LoopinexLogo,
  NetworkIcon,
  PixeloraLogo,
  StatsIcon,
  VayloStudioLogo,
  ZentroxLogo,
} from "./icons"
type ExperienceCardText = {
  title: string
  description: string
}

type ClientItemText = {
  name: string
  year: string
}

const experienceCardConfig: ReadonlyArray<{ icon: () => JSX.Element; wide?: boolean }> = [
  { icon: GanttIcon, wide: true },
  { icon: NetworkIcon },
  { icon: CodeIcon },
  { icon: StatsIcon },
]

const clientIconConfig = [ZentroxLogo, PixeloraLogo, LoopinexLogo, VayloStudioLogo, HexonifyLogo] as const

export function getExperienceCards(textCards: ExperienceCardText[]) {
  return experienceCardConfig.map((config, index) => {
    const copy = textCards[index]
    return {
      title: copy?.title ?? "",
      description: copy?.description ?? "",
      icon: config.icon,
      wide: config.wide ?? false,
    }
  })
}

export function getClientItems(textClients: ClientItemText[]) {
  return clientIconConfig.map((icon, index) => {
    const copy = textClients[index]
    return {
      name: copy?.name ?? "",
      year: copy?.year ?? "",
      icon,
    }
  })
}

export const desktopHeroLogoAxisX = 18
export const desktopHeroRailLabelX = 42
export const desktopHeroRailLineX = desktopHeroRailLabelX + 9
export const desktopHeroYearLabelX = desktopHeroRailLineX + 9
