import { DollarSign, TrendingUp, ShoppingBag, Flame, ArrowUp, Zap, AlertCircle } from "lucide-react";
import { GlassCard, MetricCard } from "./GlassCard";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

const revenueData = [
  { time: "6AM", value: 1200 },
  { time: "9AM", value: 3400 },
  { time: "12PM", value: 6800 },
  { time: "3PM", value: 4200 },
  { time: "6PM", value: 8900 },
  { time: "9PM", value: 7100 },
];

const topItems = [
  { name: "Truffle Burger", sales: 156, trend: "+23%", color: "from-cyan-400 to-blue-600" },
  { name: "Wagyu Steak", sales: 89, trend: "+18%", color: "from-purple-400 to-pink-600" },
  { name: "Signature Cocktail", sales: 234, trend: "+31%", color: "from-cyan-400 to-teal-600" },
  { name: "Seafood Platter", sales: 67, trend: "+12%", color: "from-blue-400 to-indigo-600" },
];

const performanceData = [
  { category: "Food", value: 85, fill: "#06b6d4" },
  { category: "Drinks", value: 72, fill: "#8b5cf6" },
  { category: "Desserts", value: 68, fill: "#3b82f6" },
];

const criticalAlerts = [
  { item: "Wagyu Beef", stock: "8 kg", status: "Critical" },
  { item: "Truffle Oil", stock: "2 bottles", status: "Low" },
  { item: "Premium Wine", stock: "5 bottles", status: "Low" },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
            Command Center
          </h1>
          <p className="text-gray-400 text-lg">Real-time operations overview</p>
        </div>
        <div className="text-right">
          <p className="text-gray-500 text-sm">Last updated</p>
          <p className="text-white font-medium">Just now</p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        <MetricCard
          title="Revenue Today"
          value="$18,492"
          trend="↑ 24% vs yesterday"
          icon={<DollarSign size={28} className="text-white" />}
          gradient="from-cyan-500 to-blue-600"
        />
        <MetricCard
          title="Active Orders"
          value="47"
          trend="↑ 8 new orders"
          icon={<ShoppingBag size={28} className="text-white" />}
          gradient="from-purple-500 to-pink-600"
        />
        <MetricCard
          title="Avg Order Value"
          value="$68"
          trend="↑ 12% increase"
          icon={<TrendingUp size={28} className="text-white" />}
          gradient="from-blue-500 to-indigo-600"
        />
        <MetricCard
          title="Peak Performance"
          value="94%"
          trend="↑ All systems optimal"
          icon={<Zap size={28} className="text-white" />}
          gradient="from-teal-500 to-cyan-600"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Revenue Chart - Takes 2 columns */}
        <GlassCard className="col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">Revenue Flow</h3>
              <p className="text-gray-400">Today's earnings pattern</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-all">
                Day
              </button>
              <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-xl text-sm font-medium">
                Week
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-all">
                Month
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" stroke="#444" strokeWidth={2} />
              <YAxis stroke="#444" strokeWidth={2} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  backdropFilter: "blur(20px)",
                }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#06b6d4"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        {/* Performance Gauge */}
        <GlassCard>
          <h3 className="text-xl font-bold text-white mb-4">Category Performance</h3>
          <ResponsiveContainer width="100%" height={280}>
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="100%"
              data={performanceData}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar minAngle={15} background clockWise dataKey="value" cornerRadius={10} />
              <Legend
                iconSize={10}
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{ fontSize: "12px" }}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Secondary Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Top Performers */}
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <Flame className="text-orange-500" size={28} />
            <div>
              <h3 className="text-xl font-bold text-white">Hot Items</h3>
              <p className="text-gray-400 text-sm">Trending menu items</p>
            </div>
          </div>
          <div className="space-y-4">
            {topItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-4 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white font-bold text-lg`}>
                      #{index + 1}
                    </div>
                    <div>
                      <p className="text-white font-semibold text-lg">{item.name}</p>
                      <p className="text-gray-400 text-sm">{item.sales} orders today</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUp className="text-cyan-400" size={18} />
                    <span className="text-cyan-400 font-bold">{item.trend}</span>
                  </div>
                </div>
                {/* Progress bar */}
                <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color}`}
                    style={{ width: `${(item.sales / 250) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Critical Alerts */}
        <GlassCard>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <AlertCircle className="text-red-500" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Inventory Alerts</h3>
              <p className="text-gray-400 text-sm">Items requiring attention</p>
            </div>
          </div>
          <div className="space-y-3">
            {criticalAlerts.map((alert, index) => (
              <div
                key={index}
                className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white font-semibold">{alert.item}</p>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      alert.status === "Critical"
                        ? "bg-red-500 text-white"
                        : "bg-orange-500 text-white"
                    }`}
                  >
                    {alert.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">Remaining: {alert.stock}</p>
                <button className="mt-3 w-full bg-white/10 hover:bg-white/20 rounded-xl py-2 text-sm font-medium transition-all">
                  Reorder Now
                </button>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
