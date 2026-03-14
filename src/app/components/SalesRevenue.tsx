import { useState } from "react";
import { DollarSign, TrendingUp, Target, Zap } from "lucide-react";
import { GlassCard, MetricCard } from "./GlassCard";
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend 
} from "recharts";

const dailyData = [
  { day: "Mon", revenue: 12400, orders: 124, avgOrder: 100 },
  { day: "Tue", revenue: 10800, orders: 108, avgOrder: 100 },
  { day: "Wed", revenue: 15200, orders: 142, avgOrder: 107 },
  { day: "Thu", revenue: 14600, orders: 135, avgOrder: 108 },
  { day: "Fri", revenue: 18900, orders: 165, avgOrder: 115 },
  { day: "Sat", revenue: 24500, orders: 198, avgOrder: 124 },
  { day: "Sun", revenue: 21300, orders: 176, avgOrder: 121 },
];

const hourlyData = [
  { hour: "11AM", sales: 2400 },
  { hour: "12PM", sales: 5600 },
  { hour: "1PM", sales: 6800 },
  { hour: "2PM", sales: 4200 },
  { hour: "6PM", sales: 8900 },
  { hour: "7PM", sales: 9500 },
  { hour: "8PM", sales: 7800 },
  { hour: "9PM", sales: 6200 },
];

const categoryBreakdown = [
  { category: "Food", revenue: 45200, percentage: 52 },
  { category: "Drinks", revenue: 28400, percentage: 33 },
  { category: "Desserts", revenue: 13000, percentage: 15 },
];

const topPerformers = [
  { name: "Truffle Burger", revenue: 8736, orders: 312 },
  { name: "Wagyu Steak", revenue: 16250, orders: 250 },
  { name: "Lobster Risotto", revenue: 10080, orders: 240 },
  { name: "Signature Cocktail", revenue: 7020, orders: 390 },
];

export function SalesRevenue() {
  const [timeframe, setTimeframe] = useState("week");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            Revenue Analytics
          </h1>
          <p className="text-gray-400 text-lg">Track performance and insights</p>
        </div>
        <div className="flex gap-3">
          {["day", "week", "month"].map((period) => (
            <button
              key={period}
              onClick={() => setTimeframe(period)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all ${
                timeframe === period
                  ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        <MetricCard
          title="Total Revenue"
          value="$117.7K"
          trend="↑ 28% vs last week"
          icon={<DollarSign size={28} className="text-white" />}
          gradient="from-blue-500 to-cyan-600"
        />
        <MetricCard
          title="Growth Rate"
          value="+28%"
          trend="Exceeding targets"
          icon={<TrendingUp size={28} className="text-white" />}
          gradient="from-green-500 to-teal-600"
        />
        <MetricCard
          title="Target Progress"
          value="94%"
          trend="$6K to monthly goal"
          icon={<Target size={28} className="text-white" />}
          gradient="from-purple-500 to-pink-600"
        />
        <MetricCard
          title="Peak Hour"
          value="7 PM"
          trend="$9.5K revenue"
          icon={<Zap size={28} className="text-white" />}
          gradient="from-orange-500 to-red-600"
        />
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-3 gap-6">
        {/* Revenue Trend - Spans 2 columns */}
        <GlassCard className="col-span-2">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-1">Revenue Trend</h3>
            <p className="text-gray-400">Weekly performance overview</p>
          </div>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={dailyData}>
              <defs>
                <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" strokeWidth={1} />
              <XAxis dataKey="day" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  backdropFilter: "blur(20px)",
                  padding: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={3}
                fill="url(#revenueGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Category Breakdown */}
        <GlassCard>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1">By Category</h3>
            <p className="text-gray-400 text-sm">Revenue distribution</p>
          </div>
          <div className="space-y-4">
            {categoryBreakdown.map((cat, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{cat.category}</span>
                  <span className="text-cyan-400 font-bold">${(cat.revenue / 1000).toFixed(1)}K</span>
                </div>
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-600 transition-all duration-500"
                    style={{ width: `${cat.percentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-gray-500">{cat.percentage}% of total</span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Secondary Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Hourly Performance */}
        <GlassCard>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1">Hourly Performance</h3>
            <p className="text-gray-400 text-sm">Today's sales by hour</p>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="hour" stroke="#666" />
              <YAxis stroke="#666" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.95)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                }}
              />
              <Bar dataKey="sales" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={1} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.8} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Top Performers */}
        <GlassCard>
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-1">Top Performers</h3>
            <p className="text-gray-400 text-sm">Best selling items this week</p>
          </div>
          <div className="space-y-3">
            {topPerformers.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${
                      index === 0 ? "from-yellow-400 to-orange-500" :
                      index === 1 ? "from-gray-300 to-gray-500" :
                      index === 2 ? "from-orange-600 to-red-600" :
                      "from-blue-500 to-cyan-600"
                    } rounded-xl flex items-center justify-center text-white font-bold`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{item.name}</p>
                      <p className="text-gray-400 text-sm">{item.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-cyan-400 font-bold text-lg">
                      ${(item.revenue / 1000).toFixed(1)}K
                    </p>
                  </div>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-600"
                    style={{ width: `${(item.revenue / 20000) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Insights Bar */}
      <GlassCard className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-blue-500/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center">
              <TrendingUp size={28} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-1">AI Insights</h3>
              <p className="text-gray-300">
                Revenue is up 28% compared to last week. Friday and Saturday are your peak days. 
                Consider promoting high-margin items during peak hours.
              </p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-all whitespace-nowrap">
            View Details
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
