import {
  BarChart3,
  Microscope,
  Cog,
  BrainCircuit,
  FlaskConical,
  LayoutDashboard,
  TrendingUp,
  Users,
  UserMinus,
  Zap,
  Bot,
  MessageSquare,
  Search,
  Database,
  Link2,
  Workflow,
  Plug,
  Network,
  Layers,
  FolderCheck,
  Rocket,
  type LucideIcon,
} from "lucide-react";

/** Registry mapping data string names → lucide icon components. */
const REGISTRY: Record<string, LucideIcon> = {
  BarChart3,
  Microscope,
  Cog,
  BrainCircuit,
  FlaskConical,
  LayoutDashboard,
  TrendingUp,
  Users,
  UserMinus,
  Zap,
  Bot,
  MessageSquare,
  Search,
  Database,
  Link2,
  Workflow,
  Plug,
  Network,
  Layers,
  FolderCheck,
  Rocket,
};

export function Icon({
  name,
  className,
  size = 20,
  strokeWidth = 1.75,
  style,
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  const Cmp = REGISTRY[name] ?? Layers;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} style={style} />;
}
