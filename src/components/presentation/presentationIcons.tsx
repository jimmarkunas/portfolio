import {
  BarChart3, Box, ChartColumn, Check, CircleHelp, ClipboardList, Database, Eye,
  FileText, GitBranch, Headset, Layers3, Lightbulb, Link, Settings, Shield,
  UserRound, UsersRound, Zap,
  type LucideIcon,
} from "lucide-react";
import type { PresentationIconId } from "./presentationTypes";

/** Small stable-ID resolver for icons used by the shared presentation templates. */
export const presentationIcons: Readonly<Record<PresentationIconId, LucideIcon>> = {
  "bar-chart-3": BarChart3,
  box: Box,
  "chart-column": ChartColumn,
  check: Check,
  "circle-help": CircleHelp,
  "clipboard-list": ClipboardList,
  database: Database,
  eye: Eye,
  "file-text": FileText,
  "git-branch": GitBranch,
  headset: Headset,
  "layers-3": Layers3,
  lightbulb: Lightbulb,
  link: Link,
  settings: Settings,
  shield: Shield,
  "user-round": UserRound,
  "users-round": UsersRound,
  zap: Zap,
};
