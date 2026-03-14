import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export function GlassCard({ children, className = "", glow = false }: GlassCardProps) {
  return (
    <div
      className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 ${
        glow ? "shadow-2xl shadow-cyan-500/10" : "shadow-xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string | number;
  trend?: string;
  icon?: ReactNode;
  gradient?: string;
}

export function MetricCard({ title, value, trend, icon, gradient = "from-cyan-500 to-blue-600" }: MetricCardProps) {
  return (
    <GlassCard glow>
      <div className="flex items-start justify-between mb-4">
        {icon && (
          <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
            {icon}
          </div>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">{title}</p>
      <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
        {value}
      </p>
      {trend && <p className="text-cyan-400 text-sm font-medium">{trend}</p>}
    </GlassCard>
  );
}
