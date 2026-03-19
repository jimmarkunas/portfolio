"use client"

import { useState, type CSSProperties, type ReactNode } from "react"

import Link from "next/link"

import { Container } from "@/components/Container"

const experienceCards = [
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

const awardItems = [
  { rank: "[1]", year: "2025", title: "Site of the day", source: "Awwwards" },
  { rank: "[2]", year: "2025", title: "UX Design Excellence", source: "Bechance" },
  { rank: "[3]", year: "2024", title: "Product Innovation Recognition", source: "Dribbble" },
  { rank: "[4]", year: "2023", title: "Visual Design Honor", source: "Lapa Ninja" },
]

const clientItems = [
  { name: "Zentrox", year: "2023", icon: ZentroxLogo },
  { name: "Pixelora", year: "2023", icon: PixeloraLogo },
  { name: "Loopinex", year: "2024", icon: LoopinexLogo },
  { name: "Vaylo Studio", year: "2024", icon: VayloStudioLogo },
  { name: "Hexonify", year: "2025", icon: HexonifyLogo },
]

const insightFilters = ["All", "Resources", "Creative Process", "Design Principles", "Trips & Tricks"]
const insightSortOptions = ["Newest", "Oldest", "Most Popular"]

const highlightProjects = [
  {
    category: "Branding",
    readTime: "8 min read",
    title: "Conducting in-depth research and usability testing",
    art: "oliveSphere" as const,
  },
  {
    category: "UI/UX Design",
    readTime: "7 min read",
    title: "Conducting in-depth user research and usability testing",
    art: "redSphere" as const,
  },
  {
    category: "Motion",
    readTime: "6 min read",
    title: "Cover a broad range of design needs and can be tailored",
    art: "orangeDisk" as const,
  },
  {
    category: "Marketing",
    readTime: "5 min read",
    title: "Providing expert advice and strategic guidance",
    art: "mintColumn" as const,
  },
]

const repeatedHighlightProjects = Array.from({ length: 4 }, (_, rowIndex) =>
  highlightProjects.map((project, columnIndex) => ({
    ...project,
    key: `${rowIndex}-${columnIndex}-${project.category}`,
  })),
).flat()

const desktopHeroLogoAxisX = 42
const desktopHeroRailLabelX = 42
const desktopHeroRailLineX = desktopHeroRailLabelX + 9
const desktopHeroYearLabelX = desktopHeroRailLineX + 9

function ShapeThreeIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M39.3105 16.6895C49.1405 18.1003 56 21.6384 56 28C56 34.3616 49.1405 37.8997 39.3105 39.3105C37.8997 49.1405 34.3616 56 28 56C21.6384 56 18.1003 49.1405 16.6895 39.3105C6.85948 37.8997 0 34.3616 0 28C0 21.6384 6.85948 18.1003 16.6895 16.6895C18.1003 6.85948 21.6384 0 28 0C34.3616 0 37.8997 6.85948 39.3105 16.6895Z"
        fill="#222222"
      />
    </svg>
  )
}

function ShapeEightIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M56 14C56 6.26801 49.732 0 42 0C34.268 0 28 6.26801 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26802 0 14C0 21.732 6.26801 28 14 28C6.26801 28 0 34.268 0 42C0 49.732 6.26802 56 14 56C21.732 56 28 49.732 28 42C28 49.732 34.268 56 42 56C49.732 56 56 49.732 56 42C56 34.2698 49.735 28.003 42.0055 28C49.735 27.997 56 21.7302 56 14Z"
        fill="#222222"
      />
    </svg>
  )
}

function ShapeSevenIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M39.1992 39.1983C61.6003 61.6006 -5.60031 61.6006 16.8009 39.1983C-5.60031 61.6006 -5.60031 -5.59977 16.8009 16.7993C-5.60031 -5.59977 61.6003 -5.59977 39.1992 16.7993C61.6003 -5.59977 61.6003 61.6006 39.1992 39.1983Z"
        fill="#222222"
      />
    </svg>
  )
}

function ShapeFourIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M28 0C23.5154 0 19.88 3.63545 19.88 8.12V8.39658L19.6844 8.20101C16.5134 5.02996 11.3721 5.02996 8.20102 8.20101C5.02996 11.3721 5.02996 16.5134 8.20102 19.6844L8.39659 19.88H8.12C3.63545 19.88 0 23.5154 0 28C0 32.4846 3.63545 36.12 8.12 36.12H8.39658L8.20101 36.3156C5.02996 39.4866 5.02996 44.6279 8.20101 47.799C11.3721 50.97 16.5134 50.97 19.6844 47.799L19.88 47.6034V47.88C19.88 52.3646 23.5154 56 28 56C32.4846 56 36.12 52.3646 36.12 47.88V47.6034L36.3156 47.799C39.4866 50.9701 44.6279 50.9701 47.799 47.799C50.9701 44.6279 50.9701 39.4866 47.799 36.3156L47.6034 36.12H47.88C52.3646 36.12 56 32.4846 56 28C56 23.5154 52.3646 19.88 47.88 19.88H47.6034L47.799 19.6844C50.9701 16.5134 50.9701 11.3721 47.799 8.201C44.6279 5.02995 39.4866 5.02995 36.3156 8.201L36.12 8.39658V8.12C36.12 3.63545 32.4846 0 28 0Z"
        fill="#222222"
      />
    </svg>
  )
}

function ZentroxLogo() {
  return (
    <svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M0 34C21.6116 34 34 21.6116 34 0C34 21.6116 46.3884 34 68 34C46.3884 34 34 46.3884 34 68C34 46.3884 21.6116 34 0 34Z" fill="#222222" />
    </svg>
  )
}

function PixeloraLogo() {
  return (
    <svg width="128" height="64" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M28.5831 0C23.8805 0 19.3706 1.82852 16.0454 5.08332L5.19329 15.7056C1.86808 18.9604 0 23.3748 0 27.9778C0 37.563 7.93845 45.3333 17.731 45.3333C22.4336 45.3333 26.9435 43.5047 30.2687 40.25L37.7752 32.9025L59.6464 11.4944C61.2345 9.93995 63.3884 9.06667 65.6343 9.06667C69.3944 9.06667 72.5822 11.4654 73.6874 14.7848L80.5899 8.02847C77.441 3.20105 71.9196 0 65.6343 0C60.9318 0 56.4218 1.82852 53.0966 5.08332L23.719 33.8389C22.1309 35.3934 19.977 36.2667 17.731 36.2667C13.0542 36.2667 9.26282 32.5557 9.26282 27.9778C9.26282 25.7794 10.155 23.6711 11.7431 22.1166L22.5951 11.4944C24.1832 9.93995 26.3371 9.06667 28.5831 9.06667C32.3433 9.06667 35.5309 11.4655 36.6362 14.785L43.5388 8.02864C40.3899 3.20114 34.8685 0 28.5831 0Z" fill="#222222" />
      <path d="M68.8462 23.2167L57.9942 33.8389C56.4061 35.3934 54.2522 36.2667 52.0063 36.2667C48.2463 36.2667 45.0587 33.8681 43.9533 30.5489L37.051 37.3053C40.1999 42.1325 45.7211 45.3333 52.0063 45.3333C56.7088 45.3333 61.2187 43.5047 64.5439 40.25L75.396 29.6277C78.7212 26.373 80.5893 21.9586 80.5893 17.3556C80.5893 7.77034 72.6509 0 62.8583 0C58.1557 0 53.6458 1.82852 50.3206 5.08332L20.9429 33.8389C19.3548 35.3934 17.2009 36.2667 14.955 36.2667C11.1953 36.2667 8.00786 33.8685 6.90234 30.5497L0 37.3059C3.14905 42.1326 8.67015 45.3333 14.955 45.3333C19.6576 45.3333 24.1675 43.5047 27.4927 40.25L56.8703 11.4944C58.4584 9.93995 60.6123 9.06667 62.8583 9.06667C67.5352 9.06667 71.3265 12.7777 71.3265 17.3556C71.3265 19.5539 70.4343 21.6622 68.8462 23.2167Z" fill="#222222" />
    </svg>
  )
}

function LoopinexLogo() {
  return (
    <svg width="95" height="64" viewBox="0 0 95 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M31.6389 63.2778H41.2449L38.4484 60.4812C37.7068 59.7396 36.7008 59.3229 35.652 59.3229H31.6389C16.3494 59.3229 3.95486 46.9284 3.95486 31.6389C3.95486 16.3494 16.3494 3.95488 31.6389 3.95486H63.2778C78.5673 3.95486 90.9618 16.3494 90.9618 31.6389C90.9618 46.9284 78.5673 59.3229 63.2778 59.3229H51.4423C49.8689 59.3229 48.36 58.6979 47.2475 57.5855L43.9713 54.3091C42.1171 52.4549 39.6021 51.4132 36.9798 51.4132H31.6389C20.7178 51.4132 11.8646 42.56 11.8646 31.6389C11.8646 20.7178 20.7178 11.8646 31.6389 11.8646H63.2778C74.1989 11.8646 83.0521 20.7178 83.0521 31.6389C83.0521 42.56 74.1989 51.4132 63.2778 51.4132H55.6783C54.1049 51.4132 52.596 50.7882 51.4834 49.6757L48.2071 46.3994C46.3529 44.5452 43.8381 43.5035 41.2158 43.5035H31.6389C25.0863 43.5035 19.7743 38.1915 19.7743 31.6389C19.7743 25.0863 25.0863 19.7743 31.6389 19.7743H63.2778C69.8303 19.7743 75.1424 25.0863 75.1424 31.6389C75.1424 38.1116 69.9591 43.3738 63.517 43.5011L63.5157 43.5035H60.6218C59.0484 43.5035 57.5396 42.8784 56.427 41.766L53.1506 38.4897C51.6293 36.9681 49.6631 35.9938 47.5577 35.6931L47.4583 35.5938H31.6389C29.4547 35.5938 27.684 33.8231 27.684 31.6389C27.684 29.4547 29.4547 27.684 31.6389 27.684H63.2778C65.462 27.684 67.2326 29.4547 67.2326 31.6389C67.2326 33.8231 65.462 35.5938 63.2778 35.5938H55.3681L58.1646 38.3903C58.9062 39.1319 59.9122 39.5486 60.961 39.5486H63.2778C67.6462 39.5486 71.1875 36.0073 71.1875 31.6389C71.1875 27.2705 67.6462 23.7292 63.2778 23.7292H31.6389C27.2705 23.7292 23.7292 27.2705 23.7292 31.6389C23.7292 36.0073 27.2705 39.5486 31.6389 39.5486H46.1594C47.7328 39.5486 49.2417 40.1736 50.3542 41.2861L53.6306 44.5624C55.4848 46.4166 57.9996 47.4583 60.6218 47.4583H64.2665V47.428C72.5427 46.9176 79.0972 40.0436 79.0972 31.6389C79.0972 22.9021 72.0145 15.8194 63.2778 15.8194H31.6389C22.9021 15.8194 15.8194 22.9021 15.8194 31.6389C15.8194 40.3758 22.9021 47.4583 31.6389 47.4583H41.2158C42.7892 47.4583 44.2981 48.0834 45.4107 49.1958L48.687 52.4721C50.5412 54.3263 53.056 55.3681 55.6783 55.3681H63.2778C76.3831 55.3681 87.0069 44.7442 87.0069 31.6389C87.0069 18.5336 76.3831 7.90972 63.2778 7.90972H31.6389C18.5336 7.90972 7.90972 18.5336 7.90972 31.6389C7.90972 44.7442 18.5336 55.3681 31.6389 55.3681H36.9798C38.5532 55.3681 40.0621 55.9931 41.1747 57.1055L44.4511 60.3819C46.3053 62.2361 48.8201 63.2778 51.4423 63.2778H63.2778C80.7515 63.2778 94.9167 49.1126 94.9167 31.6389C94.9167 14.1652 80.7515 0 63.2778 0H31.6389C14.1652 0 0 14.1652 0 31.6389C0 49.1126 14.1652 63.2778 31.6389 63.2778Z" fill="#222222" />
      <path d="M0 1.97743C0 3.06954 0.885256 3.95486 1.97743 3.95486H3.95486C5.04704 3.95486 5.93229 3.06954 5.93229 1.97743C5.93229 0.885327 5.04704 0 3.95486 0H1.97743C0.885256 0 0 0.885327 0 1.97743Z" fill="#222222" transform="translate(108.82 2.83)" />
    </svg>
  )
}

function VayloStudioLogo() {
  return (
    <svg width="109" height="65" viewBox="0 0 109 65" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4.64352 2.28049C4.64352 2.88531 4.39891 3.46536 3.96349 3.89304C3.52808 4.32071 2.93753 4.56098 2.32176 4.56098C1.70599 4.56098 1.11544 4.32071 0.680026 3.89304C0.244611 3.46536 0 2.88531 0 2.28049C0 1.67566 0.244611 1.09561 0.680026 0.667939C1.11544 0.240265 1.70599 0 2.32176 0C2.93753 0 3.52808 0.240265 3.96349 0.667939C4.39891 1.09561 4.64352 1.67566 4.64352 2.28049Z" fill="#222222" transform="translate(104.44 2.83)" />
      <path d="M21.2828 60.4998C9.5285 60.4998 0 51.1407 0 39.5953V0H7.7392V39.5953C7.7392 43.1235 9.16611 46.5071 11.706 49.0019C14.2459 51.4967 17.6908 52.8982 21.2828 52.8982C28.8564 52.8982 34.8264 47.165 34.8264 39.9085H42.5656V51.311C42.5656 51.815 42.7694 52.2984 43.1323 52.6548C43.4951 53.0112 43.9872 53.2114 44.5004 53.2114C45.0135 53.2114 45.5056 53.0112 45.8685 52.6548C46.2313 52.2984 46.4352 51.815 46.4352 51.311V37.8181C45.0295 38.0999 43.5776 38.0711 42.1846 37.7338C40.7916 37.3965 39.4925 36.759 38.3812 35.8677C37.27 34.9763 36.3746 33.8533 35.7597 32.5801C35.1449 31.3069 34.8261 29.9153 34.8264 28.5061V9.50203C34.8264 6.98194 35.8456 4.56506 37.6598 2.78308C39.4741 1.0011 41.9347 0 44.5004 0C47.0661 0 49.5267 1.0011 51.3409 2.78308C53.1552 4.56506 54.1744 6.98194 54.1744 9.50203V51.311C54.1744 51.815 54.3782 52.2984 54.7411 52.6548C55.1039 53.0112 55.596 53.2114 56.1092 53.2114C56.6223 53.2114 57.1144 53.0112 57.4773 52.6548C57.8401 52.2984 58.044 51.815 58.044 51.311V9.50203C58.044 6.98194 59.0632 4.56506 60.8774 2.78308C62.6917 1.0011 65.1523 0 67.718 0C70.2837 0 72.7443 1.0011 74.5585 2.78308C76.3727 4.56506 77.392 6.98194 77.392 9.50203V51.311C77.392 53.0756 76.8917 54.8054 75.9472 56.3065C75.0026 57.8076 73.6512 59.0207 72.0443 59.8099C70.4374 60.599 68.6385 60.9331 66.8492 60.7746C65.0599 60.6161 63.3508 59.9714 61.9136 58.9126C60.2405 60.1489 58.2029 60.8161 56.1092 60.813C54.0155 60.8161 51.9778 60.1489 50.3048 58.9126C49.1405 59.7702 47.7942 60.3588 46.3662 60.6345C44.9381 60.9103 43.4652 60.866 42.057 60.5051C40.6488 60.1442 39.3416 59.4759 38.2329 58.55C37.1241 57.6241 36.2422 56.4645 35.6529 55.1574C31.8514 58.4976 26.7946 60.4998 21.2828 60.4998Z" fill="#222222" transform="translate(25.5 4.35)" />
      <path d="M0 39.9085C0 42.4286 1.01922 44.8455 2.83345 46.6275C4.64767 48.4095 7.10829 49.4106 9.674 49.4106C12.2397 49.4106 14.7003 48.4095 16.5145 46.6275C18.3288 44.8455 19.348 42.4286 19.348 39.9085V9.50203C19.348 6.98194 18.3288 4.56506 16.5145 2.78308C14.7003 1.0011 12.2397 0 9.674 0C7.10829 0 4.64767 1.0011 2.83345 2.78308C1.01922 4.56506 0 6.98194 0 9.50203V39.9085Z" fill="#222222" transform="translate(37.11 4.35)" />
    </svg>
  )
}

function HexonifyLogo() {
  return (
    <svg width="68" height="67" viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M47.0265 0H20.9735L0 20.4543V45.8625L20.9735 66.3168H47.0265L68 45.8625V20.4543L47.0265 0ZM24.5783 46.1821L11.1422 33.0785L24.5783 19.9749C29.6579 15.0211 38.0145 15.0211 43.0941 19.9749L56.5301 33.0785L43.0941 46.1821C38.0145 51.1359 29.8217 51.1359 24.5783 46.1821Z" fill="#222222" />
    </svg>
  )
}

function ExperienceCard({
  title,
  description,
  icon: Icon,
  wide = false,
}: {
  title: string
  description: string
  icon: () => ReactNode
  wide?: boolean
}) {
  return (
    <article
      className={`rounded-[10px] bg-[#F8F6F2] p-6 md:p-7 ${
        wide ? "lg:col-span-1 lg:min-h-[320px]" : "lg:min-h-[320px]"
      }`}
    >
      <div className="text-[#222222]">
        <Icon />
      </div>
      <div className="mt-24 md:mt-28">
        <h3 className="type-h5 text-[#222222]">{title}</h3>
        {description ? (
          <p className="type-p3 mt-3 max-w-[320px] text-[#7B7B7B]">{description}</p>
        ) : null}
      </div>
    </article>
  )
}

function AwardRow({
  rank,
  year,
  title,
  source,
}: {
  rank: string
  year: string
  title: string
  source: string
}) {
  return (
    <article className="rounded-[10px] bg-white px-6 py-5 md:px-8 md:py-6">
      <div className="flex flex-col gap-3 md:grid md:grid-cols-[140px_minmax(0,1fr)_170px] md:items-center md:gap-6">
        <div className="type-p2">
          <span className="text-[#666666]">{rank}</span>
          <span className="text-[#222222]"> {year}</span>
        </div>
        <div className="type-p2 text-[#222222] md:text-center">{title}</div>
        <div className="type-p2 text-[#222222] md:text-right">{source}</div>
      </div>
    </article>
  )
}

function ClientCard({
  name,
  year,
  icon: Icon,
}: {
  name: string
  year: string
  icon: () => ReactNode
}) {
  return (
    <article className="flex min-h-[256px] flex-col items-center justify-between rounded-[10px] bg-white px-6 py-4 text-center">
      <div className="type-p2 text-[#7B7B7B]">{name}</div>
      <div className="flex flex-1 items-center justify-center text-[#222222]">
        <Icon />
      </div>
      <div className="type-p2 text-[#7B7B7B]">{year}</div>
    </article>
  )
}

function SectionPill({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
      <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
      <span className="type-p2 text-[#222222]">{label}</span>
    </div>
  )
}

function ArtBlock({
  variant,
  className = "",
}: {
  variant:
    | "featuredTube"
    | "whiteCubes"
    | "blueCube"
    | "oliveSphere"
    | "redSphere"
    | "orangeDisk"
    | "mintColumn"
  className?: string
}) {
  const styles: Record<typeof variant, CSSProperties> = {
    featuredTube: {
      background:
        "radial-gradient(circle at 12% 28%, rgba(245,244,234,0.95) 0 6%, transparent 7%), radial-gradient(circle at 85% 22%, rgba(206,191,166,0.55) 0 12%, transparent 13%), linear-gradient(135deg, #6a4d35 0%, #947457 38%, #b19375 64%, #8b6b50 100%)",
    },
    whiteCubes: {
      background:
        "linear-gradient(160deg, #ebe9e4 0%, #f8f6f1 46%, #d8d2c9 100%)",
    },
    blueCube: {
      background:
        "linear-gradient(145deg, #d5e0ea 0%, #b7c8d5 45%, #eff4f8 100%)",
    },
    oliveSphere: {
      background:
        "radial-gradient(circle at 38% 33%, #f7f3e8 0 9%, transparent 10%), linear-gradient(140deg, #81906e 0%, #91a07f 34%, #e3ecd8 35%, #ced7c4 55%, #a6b49a 100%)",
    },
    redSphere: {
      background:
        "radial-gradient(circle at 64% 56%, #e93023 0 7%, #d61912 8%, transparent 9%), linear-gradient(135deg, #e41613 0%, #ff4316 38%, #f3d7ef 39%, #c7b0e2 68%, #eed7f6 100%)",
    },
    orangeDisk: {
      background:
        "radial-gradient(circle at 55% 17%, #f4522d 0 10%, #ff784b 11%, transparent 12%), linear-gradient(135deg, #9fd7e4 0%, #afdce3 28%, #f0a068 29%, #f07f4d 52%, #f8d8c2 100%)",
    },
    mintColumn: {
      background:
        "radial-gradient(circle at 76% 28%, #b8eadc 0 9%, #8fd3c7 10%, transparent 11%), linear-gradient(135deg, #f3ebe0 0%, #e9e3d7 42%, #d7d7d7 43%, #faf3eb 100%)",
    },
  }

  return (
    <div className={`relative overflow-hidden rounded-[10px] ${className}`.trim()} style={styles[variant]}>
      {variant === "featuredTube" ? (
        <>
          <div className="absolute bottom-0 left-1/2 h-[78%] w-[24%] -translate-x-1/2 rounded-t-[34px] rounded-b-[20px] bg-[linear-gradient(180deg,#d8d1bd_0%,#c0ba9f_55%,#d6cdb8_100%)] shadow-[inset_0_0_0_1px_rgba(90,72,52,0.08)]" />
          <div className="absolute bottom-[11%] left-1/2 h-[13%] w-[16%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_50%_38%,#33383f_0_35%,#24272c_36%,#222222_100%)]" />
          <div className="absolute bottom-0 left-[18%] h-[62%] w-[1px] rotate-[-12deg] bg-white/50" />
          <div className="absolute bottom-[8%] right-[14%] h-[58%] w-[1px] rotate-[20deg] bg-white/35" />
        </>
      ) : null}
      {variant === "whiteCubes" ? (
        <>
          <div className="absolute left-[10%] top-[16%] h-[40%] w-[28%] rotate-[24deg] bg-black shadow-[22px_28px_0_0_rgba(0,0,0,0.95)]" />
          <div className="absolute left-[4%] top-[6%] h-[36%] w-[32%] rotate-[14deg] bg-white" />
          <div className="absolute right-[14%] top-[22%] h-[42%] w-[28%] rotate-[22deg] bg-black shadow-[20px_26px_0_0_rgba(0,0,0,0.95)]" />
          <div className="absolute right-[8%] top-[13%] h-[36%] w-[32%] rotate-[14deg] bg-white" />
        </>
      ) : null}
      {variant === "blueCube" ? (
        <>
          <div className="absolute bottom-[12%] left-1/2 h-[24%] w-[32%] -translate-x-1/2 bg-[#dce8ef] shadow-[0_12px_28px_rgba(34,34,34,0.14)]" />
          <div className="absolute bottom-[36%] left-[28%] h-[14%] w-[44%] rotate-[8deg] bg-[#edf5fa]" />
        </>
      ) : null}
      {variant === "oliveSphere" ? (
        <>
          <div className="absolute bottom-0 left-[34%] h-[38%] w-[34%] bg-[#d8dcc8]" />
          <div className="absolute bottom-[30%] left-[31%] h-[32%] w-[32%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#fffef3_0,#f0eddd_42%,#d6d2bb_100%)] shadow-[0_12px_26px_rgba(34,34,34,0.12)]" />
        </>
      ) : null}
      {variant === "redSphere" ? (
        <>
          <div className="absolute bottom-0 left-[46%] h-[36%] w-[34%] bg-[#a285d1]" />
          <div className="absolute bottom-[28%] left-[48%] h-[22%] w-[22%] rounded-full bg-[radial-gradient(circle_at_38%_32%,#ff6b46_0,#ff2e1e_40%,#d61113_100%)] shadow-[0_10px_22px_rgba(34,34,34,0.16)]" />
          <div className="absolute bottom-0 right-0 h-[18%] w-[28%] rounded-tl-full bg-[#f2d8ea]" />
        </>
      ) : null}
      {variant === "orangeDisk" ? (
        <>
          <div className="absolute bottom-0 left-[40%] h-[48%] w-[28%] bg-[#9ea49b] shadow-[0_12px_24px_rgba(34,34,34,0.14)]" />
          <div className="absolute left-[10%] top-[36%] h-[24%] w-[38%] rounded-full bg-[#273d5a] opacity-75" />
          <div className="absolute left-[52%] top-[10%] h-[26%] w-[22%] rotate-[20deg] rounded-full bg-[#f34f26]" />
        </>
      ) : null}
      {variant === "mintColumn" ? (
        <>
          <div className="absolute bottom-0 left-[14%] h-[28%] w-[34%] bg-[#f7f7f7]" />
          <div className="absolute bottom-0 right-[14%] h-[44%] w-[24%] bg-[#b48b98]" />
          <div className="absolute bottom-[30%] right-[12%] h-[26%] w-[28%] rounded-full bg-[radial-gradient(circle_at_38%_30%,#d5fff0_0,#a8e5d5_46%,#8bcdbf_100%)]" />
          <div className="absolute left-0 top-0 h-full w-[14%] bg-[radial-gradient(circle,#ffffff_18%,transparent_19%)] [background-size:10px_10px] opacity-75" />
        </>
      ) : null}
    </div>
  )
}

function HighlightCard({
  category,
  readTime,
  title,
  art,
}: {
  category: string
  readTime: string
  title: string
  art: "oliveSphere" | "redSphere" | "orangeDisk" | "mintColumn"
}) {
  return (
    <Link
      href="/work"
      aria-label={`${category}: ${title}. ${readTime}`}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-[18px] bg-white">
        <ArtBlock variant={art} className="aspect-square" />

        <div className="pointer-events-none absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
          <div className="inline-flex min-h-[44px] items-center rounded-full bg-white px-5 py-2 text-[16px] leading-5 text-[#222222] shadow-[0_8px_24px_rgba(34,34,34,0.08)] transition-colors duration-200 group-hover:bg-[#4B7FD1] group-hover:text-white">
            {category}
          </div>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#222222] shadow-[0_8px_24px_rgba(34,34,34,0.08)] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#4B7FD1] group-hover:text-white">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M19 5V15C19 15.552 18.553 16 18 16C17.447 16 17 15.552 17 15V7.41406L5.70703 18.707C5.51203 18.902 5.256 19 5 19C4.744 19 4.48797 18.902 4.29297 18.707C3.90197 18.316 3.90197 17.684 4.29297 17.293L15.5859 6H8C7.447 6 7 5.552 7 5C7 4.448 7.447 4 8 4H18C18.13 4 18.2601 4.0269 18.3821 4.0769C18.6271 4.1779 18.8221 4.37292 18.9231 4.61792C18.9741 4.73992 19 4.87 19 5Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}

function InsightAvatarStack() {
  return (
    <div className="flex items-center">
      {["A", "B", "C"].map((label, index) => (
        <div
          key={label}
          className={`-ml-2 flex h-14 w-14 items-center justify-center overflow-hidden rounded-[10px] border border-white text-sm text-[#222222] shadow-[-3px_0px_9px_rgba(0,0,0,0.15)] first:ml-0 ${
            index === 0
              ? "bg-[linear-gradient(135deg,#d8d8d8_0%,#f2f2f2_100%)]"
              : index === 1
                ? "bg-[linear-gradient(135deg,#e2d8d0_0%,#f7f2ee_100%)]"
                : "bg-[linear-gradient(135deg,#d1d1d1_0%,#fafafa_100%)]"
          }`}
        >
          {label}
        </div>
      ))}

      <div className="-ml-2 flex h-14 w-14 items-center justify-center rounded-[10px] bg-[#2B2B2B] text-[20px] leading-8 text-white shadow-[-3px_0px_9px_rgba(0,0,0,0.15)]">
        75+
      </div>
    </div>
  )
}

function InsightStarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M12 2.5L14.7812 8.13486L21 9.03886L16.5 13.4251L17.5623 19.6197L12 16.695L6.43769 19.6197L7.5 13.4251L3 9.03886L9.21885 8.13486L12 2.5Z"
        fill="#2B2B2B"
      />
    </svg>
  )
}

function MobileSelectionSheet({
  open,
  title,
  options,
  selected,
  onClose,
  onSelect,
}: {
  open: boolean
  title: string
  options: string[]
  selected: string
  onClose: () => void
  onSelect: (value: string) => void
}) {
  if (!open) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 md:hidden" aria-modal="true" role="dialog">
      <button
        type="button"
        aria-label={`Close ${title}`}
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      <div className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-[#F8F6F2] px-6 pb-8 pt-6 shadow-[0_-20px_60px_rgba(34,34,34,0.18)]">
        <div className="mx-auto h-1.5 w-16 rounded-full bg-black/10" />

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="text-[22px] leading-7 text-[#222222]">{title}</div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[24px] leading-none text-[#222222]"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {options.map((option) => {
            const isSelected = option === selected

            return (
              <button
                key={option}
                type="button"
                className={`flex min-h-[56px] items-center justify-between rounded-[18px] px-5 text-left text-[18px] leading-6 transition-colors ${
                  isSelected ? "bg-[#2B2B2B] text-white" : "bg-white text-[#222222]"
                }`}
                onClick={() => {
                  onSelect(option)
                  onClose()
                }}
              >
                <span>{option}</span>
                <span className={`text-[20px] ${isSelected ? "opacity-100" : "opacity-0"}`}>✓</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function HomepageTestPage() {
  const [selectedFilter, setSelectedFilter] = useState(insightFilters[0])
  const [selectedSort, setSelectedSort] = useState(insightSortOptions[0])
  const [openMobileSheet, setOpenMobileSheet] = useState<"filter" | "sort" | null>(null)

  return (
    <main className="min-h-full bg-[#F3F3F3]">
      <section className="w-full bg-[#F3F3F3]">
        <Container className="bg-[#F3F3F3] px-0 md:px-0 lg:px-0">
          <div className="bg-[#F3F3F3] px-6 pb-10 pt-8 md:px-10 md:pb-12 md:pt-10 lg:hidden">
            <div className="mx-auto max-w-[440px]">
              <div className="flex justify-center">
                <img
                  src="/test/man-placeholder.png"
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full max-w-[420px]"
                />
              </div>

              <div className="mt-6 flex items-center justify-center gap-4 text-[#222222]">
                <div className="type-ui-sm">Product designer</div>
                <div className="h-px w-16 shrink-0 bg-[#222222]" />
                <div className="type-ui-sm">2024</div>
              </div>

              <div className="mt-10 text-center md:mt-12">
                <div className="type-display-hero text-[#222222]">Hello</div>
                <div className="type-ui-lg mt-4 text-[#222222]">— It’s Finox a design wizerd</div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <div className="flex items-start justify-center gap-1 text-[#222222]">
                    <span className="type-stat-plus">+</span>
                    <span className="type-stat-number text-[#404040]">200</span>
                  </div>
                  <div className="type-ui-sm mt-2 text-center text-[#78716C]">
                    Project completed
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-center gap-1 text-[#222222]">
                    <span className="type-stat-plus">+</span>
                    <span className="type-stat-number text-[#404040]">50</span>
                  </div>
                  <div className="type-ui-sm mt-2 text-center text-[#78716C]">Startup raised</div>
                </div>
              </div>

              <div className="type-ui-md mt-8 text-center text-[#222222] md:mt-12">
                Scroll down ↓
              </div>
            </div>
          </div>

          <div className="relative hidden h-[938px] overflow-hidden bg-[#F3F3F3] lg:block">
            <img
              src="/test/man-placeholder.png"
              alt=""
              aria-hidden="true"
              className="absolute bottom-0 right-[-36px] z-0 h-[760px] w-auto max-w-none"
            />

            <div className="type-display-hero absolute left-[177px] top-[367px] z-10 text-[#222222]">
              Hello
            </div>

            <div className="type-ui-lg absolute left-[177px] top-[612px] z-10 text-[#222222]">
              — It’s Finox a design wizerd
            </div>

            <div className="type-ui-md absolute left-[177px] top-[860px] z-10 text-[#222222]">
              Scroll down ↓
            </div>

            <div
              className="absolute top-[168px] z-10 h-[701px] w-[120px] -translate-x-1/2"
              style={{ left: `${desktopHeroLogoAxisX}px` }}
            >
              <div className="relative h-full w-full">
                <div
                  className="absolute left-0 top-0 origin-top-left -rotate-90 whitespace-nowrap text-[#222222]"
                  style={{
                    left: `${desktopHeroRailLabelX}px`,
                    top: "154px",
                    fontFamily: "var(--font-family-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  Product designer
                </div>

                <div
                  className="absolute bg-[#222222]"
                  style={{
                    left: `${desktopHeroRailLineX}px`,
                    top: "189px",
                    width: "1px",
                    height: "386px",
                  }}
                  aria-hidden="true"
                />

                <div
                  className="absolute left-0 bottom-0 origin-bottom-left -rotate-90 whitespace-nowrap text-[#222222]"
                  style={{
                    left: `${desktopHeroYearLabelX}px`,
                    bottom: "56px",
                    fontFamily: "var(--font-family-display)",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  2024
                </div>
              </div>
            </div>

            <div className="type-stat-plus absolute left-[184px] top-[208px] z-10 text-black">
              +
            </div>
            <div className="type-stat-number absolute left-[205px] top-[204px] z-10 text-[#404040]">
              200
            </div>
            <div className="type-ui-sm absolute left-[203px] top-[261px] z-10 text-[#78716C]">
              Project completed
            </div>

            <div className="type-stat-plus absolute left-[360px] top-[208px] z-10 text-black">
              +
            </div>
            <div className="type-stat-number absolute left-[381px] top-[204px] z-10 text-[#404040]">
              50
            </div>
            <div className="type-ui-sm absolute left-[381px] top-[261px] z-10 text-[#78716C]">
              Startup raised
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#FFFFFF]">
        <Container className="py-14 md:py-16 lg:py-[60px]">
          <div className="flex flex-col items-center gap-12">
            <div className="flex max-w-[674px] flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">Experiences</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="type-h3 max-w-[920px] text-[#222222] lg:text-[64px] lg:leading-[1.05] lg:tracking-[-0.04em]">
                  Why you will work with me
                </h2>
                <p className="type-p3 max-w-[840px] text-[#7B7B7B]">
                  Every design decision I make is backed by strategy, research, and a commitment
                  to delivering real value. I turn complex challenges into clean, delightful user
                  experiences
                </p>
              </div>
            </div>

            <div className="grid w-full gap-5 md:grid-cols-2 lg:grid-cols-[396px_repeat(3,minmax(0,1fr))] lg:items-stretch">
              {experienceCards.map((card) => (
                <ExperienceCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="grid gap-10 lg:grid-cols-[482px_minmax(0,769px)] lg:justify-between lg:gap-12">
            <div className="flex flex-col items-start gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">Experiences</span>
              </div>

              <div className="flex flex-col items-start gap-2">
                <h2 className="type-h3 max-w-[396px] text-[#222222]">My Achievements &amp; Awards</h2>
                <p className="type-p2 max-w-[482px] text-black/70">
                  Over the years, my love for creative problem-solving has evolved into a career
                  dedicated to crafting intuitive and impactful digital experiences.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {awardItems.map((item) => (
                <AwardRow key={`${item.rank}-${item.year}-${item.title}`} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-[50px] bg-white px-3 py-0.5">
                <span className="h-3 w-3 rounded-full bg-[#2B2B2B]" />
                <span className="type-p2 text-[#222222]">Our Clients</span>
              </div>

              <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="type-h3 max-w-[920px] text-[#222222]">Some of our Best Customers</h2>
              </div>
            </div>

            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {clientItems.map((item) => (
                <ClientCard key={`${item.name}-${item.year}`} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-10">
              <div className="flex w-full flex-col items-start gap-5">
                <SectionPill label="Highlights projects" />

                <div className="flex w-full flex-col gap-5">
                  <h2 className="type-h3 text-[#222222]">Case Studies &amp; Project Highlights</h2>

                  <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <p className="type-p3 max-w-[962px] text-black/80">
                      Explore detailed case studies and highlights of recent projects. Learn about
                      the challenges faced, the design solutions implemented, and the outcomes
                      achieved.
                    </p>

                    <Link
                      href="/work"
                      className="inline-flex self-start min-h-[56px] items-center gap-2 rounded-[99px] bg-[#2B2B2B] px-6 pb-3.5 pt-3 text-[20px] leading-8 text-white lg:self-auto"
                    >
                      <span>See More</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M20.0003 5V15C20.0003 15.552 19.5533 16 19.0003 16C18.4473 16 18.0003 15.552 18.0003 15V7.41406L6.70731 18.707C6.51231 18.902 6.25628 19 6.00028 19C5.74428 19 5.48825 18.902 5.29325 18.707C4.90225 18.316 4.90225 17.684 5.29325 17.293L16.5862 6H9.00028C8.44728 6 8.00028 5.552 8.00028 5C8.00028 4.448 8.44728 4 9.00028 4L19.0003 4C19.1303 4 19.2604 4.0269 19.3824 4.0769C19.6274 4.1779 19.8224 4.37292 19.9234 4.61792C19.9744 4.73992 20.0003 4.87 20.0003 5Z" fill="white" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex w-full items-center gap-3 md:hidden">
                  <button
                    type="button"
                    className="inline-flex min-h-[52px] flex-1 items-center justify-between rounded-full bg-white px-5 text-[16px] leading-6 text-[#222222] shadow-[0_8px_20px_rgba(34,34,34,0.05)]"
                    onClick={() => setOpenMobileSheet("filter")}
                  >
                    <span className="truncate">Filter: {selectedFilter}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M11.9998 14.75C11.8078 14.75 11.6157 14.6771 11.4697 14.5301L7.46975 10.5301C7.17675 10.2371 7.17675 9.76202 7.46975 9.46902C7.76275 9.17602 8.23779 9.17602 8.53079 9.46902L12.0008 12.939L15.4707 9.46902C15.7637 9.17602 16.2388 9.17602 16.5318 9.46902C16.8248 9.76202 16.8248 10.2371 16.5318 10.5301L12.5318 14.5301C12.3838 14.6771 12.1918 14.75 11.9998 14.75Z" fill="#25314C" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="inline-flex min-h-[52px] items-center justify-between gap-3 rounded-full bg-white px-5 text-[16px] leading-6 text-[#222222] shadow-[0_8px_20px_rgba(34,34,34,0.05)]"
                    onClick={() => setOpenMobileSheet("sort")}
                  >
                    <span>{selectedSort}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M11.9998 14.75C11.8078 14.75 11.6157 14.6771 11.4697 14.5301L7.46975 10.5301C7.17675 10.2371 7.17675 9.76202 7.46975 9.46902C7.76275 9.17602 8.23779 9.17602 8.53079 9.46902L12.0008 12.939L15.4707 9.46902C15.7637 9.17602 16.2388 9.17602 16.5318 9.46902C16.8248 9.76202 16.8248 10.2371 16.5318 10.5301L12.5318 14.5301C12.3838 14.6771 12.1918 14.75 11.9998 14.75Z" fill="#25314C" />
                    </svg>
                  </button>
                </div>

                <div className="hidden flex-wrap items-center gap-2 md:flex">
                  {insightFilters.map((filter) => (
                    <button
                      key={filter}
                      type="button"
                      className={`inline-flex rounded-full px-5 py-2.5 text-[14px] ${
                        selectedFilter === filter ? "bg-[#2B2B2B] text-white" : "bg-white text-[#222222]"
                      }`}
                      onClick={() => setSelectedFilter(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>

                <div className="hidden items-center gap-5 self-end md:flex lg:self-auto">
                  <span className="text-[14px] text-black/80">Sort by:</span>
                  <button
                    type="button"
                    className="inline-flex h-9 items-center gap-1 rounded-full bg-white px-5 py-2.5 text-[14px] text-[#222222]"
                  >
                    <span>{selectedSort}</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M11.9998 14.75C11.8078 14.75 11.6157 14.6771 11.4697 14.5301L7.46975 10.5301C7.17675 10.2371 7.17675 9.76202 7.46975 9.46902C7.76275 9.17602 8.23779 9.17602 8.53079 9.46902L12.0008 12.939L15.4707 9.46902C15.7637 9.17602 16.2388 9.17602 16.5318 9.46902C16.8248 9.76202 16.8248 10.2371 16.5318 10.5301L12.5318 14.5301C12.3838 14.6771 12.1918 14.75 11.9998 14.75Z" fill="#25314C" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid w-full gap-7 md:grid-cols-2 xl:grid-cols-4">
              {repeatedHighlightProjects.map(({ key, ...project }) => (
                <HighlightCard key={key} {...project} />
              ))}
            </div>
          </div>
        </Container>

        <MobileSelectionSheet
          open={openMobileSheet === "filter"}
          title="Filter projects"
          options={insightFilters}
          selected={selectedFilter}
          onClose={() => setOpenMobileSheet(null)}
          onSelect={setSelectedFilter}
        />

        <MobileSelectionSheet
          open={openMobileSheet === "sort"}
          title="Sort projects"
          options={insightSortOptions}
          selected={selectedSort}
          onClose={() => setOpenMobileSheet(null)}
          onSelect={setSelectedSort}
        />
      </section>

      <section className="w-full bg-[#F3F3F3]">
        <Container className="py-14 md:py-16 lg:py-[72px]">
          <div className="flex flex-col items-start gap-12">
            <div className="flex w-full flex-col items-start gap-5">
              <SectionPill label="Latest Insights" />

              <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="flex flex-col items-start gap-3">
                  <h2 className="type-h3 text-[#222222]">Latest Insights &amp; Trends</h2>
                  <p className="type-p3 max-w-[962px] text-black/80">
                    Stay updated with the latest in UI/UX design, product design, and industry
                    trends. Here, you&apos;ll find in-depth articles, case studies, and expert
                    opinions that offer valuable insights and inspiration for your next project.
                  </p>
                </div>

              </div>
            </div>

            <div className="grid w-full gap-5 xl:grid-cols-3">
              <div className="flex flex-col gap-4">
                <article className="rounded-[10px] bg-white p-[18px]">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <InsightAvatarStack />
                    <div className="flex flex-col">
                      <div className="type-p2 text-black">75+ Clients</div>
                      <div className="type-ui-sm text-[#666666]">Around the world Clients</div>
                    </div>
                  </div>
                </article>

                <article className="relative overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-24px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[38px] top-[96px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">105+</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    Completed projects for growing brands
                  </p>
                </article>
              </div>

              <article className="rounded-[10px] bg-white p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <InsightStarIcon key={index} />
                    ))}
                  </div>
                  <div className="text-[72px] leading-none text-[#2B2B2B]">“</div>
                </div>

                <p className="type-p2 mt-6 max-w-[520px] text-[#2B2B2B]">
                  I like their services and their professionalism and attention to details and
                  commitment delivering hign - quality results truly exceeded all our team
                  expectations and meet that on time.
                </p>

                <div className="mt-10 flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#cfcfcf_0%,#f4f4f4_100%)] text-[#222222]">
                    TA
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="type-p2 text-[#2B2B2B]">Tawanna Afumba</div>
                    <div className="type-ui-sm text-[#666666]">intransigent_toejam_15</div>
                  </div>
                </div>
              </article>

              <div className="flex flex-col gap-4">
                <article className="relative overflow-hidden rounded-[10px] bg-white p-8 md:min-h-[256px]">
                  <div className="absolute right-[-28px] top-[-20px] h-28 w-28 rounded-full bg-[#F8F6F2]" />
                  <div className="absolute right-[36px] top-[68px] h-20 w-20 rounded-full bg-[#F8F6F2]" />
                  <div className="type-h2 relative z-10 text-black">92%</div>
                  <p className="type-p2 relative z-10 mt-16 max-w-[240px] text-[#666666]">
                    Client retention rate over the past 3 years
                  </p>
                </article>

                <article className="rounded-[10px] bg-white px-5 py-4 md:px-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="type-h5 text-black">
                      4.9<span className="text-[24px] leading-8 text-[#666666]">/5</span>
                    </div>
                    <p className="type-ui-sm max-w-[280px] text-black">
                      We&apos;ve delivered 56+projects that help companies generate real results.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
