export type TitledSection = {
  title: string
}

export type DescribedSection = TitledSection & {
  description: string
}

export type EyebrowIntroSection = {
  eyebrow: string
  title: string
  intro: string
}
