import { useState } from "react";
import { Clock, CheckCircle, XCircle, CreditCard, Smartphone, Banknote } from "lucide-react";
import { GlassCard, MetricCard } from "./GlassCard";

const orders = [
  {
    id: "ORD-1247",
    table: "Table 8",
    items: ["Truffle Burger x2", "Wagyu Steak x1", "Wine x2"],
    total: 149.00,
    status: "preparing",
    payment: "pending",
    method: "card",
    time: "12 min ago",
    server: "Sarah"
  },
  {
    id: "ORD-1248",
    table: "Table 3",
    items: ["Lobster Risotto x1", "Cocktail x2"],
    total: 78.00,
    status: "preparing",
    payment: "paid",
    method: "e-wallet",
    time: "8 min ago",
    server: "Mike"
  },
  {
    id: "ORD-1249",
    table: "Bar Counter",
    items: ["Signature Cocktail x3", "Appetizer Platter x1"],
    total: 86.00,
    status: "ready",
    payment: "paid",
    method: "card",
    time: "3 min ago",
    server: "Emma"
  },
  {
    id: "ORD-1250",
    table: "Table 12",
    items: ["Seafood Platter x1", "Wine x3", "Dessert x2"],
    total: 165.00,
    status: "completed",
    payment: "paid",
    method: "cash",
    time: "25 min ago",
    server: "Sarah"
  },
  {
    id: "ORD-1246",
    table: "Takeaway",
    items: ["Burger x2", "Fries x2"],
    total: 42.00,
    status: "cancelled",
    payment: "refunded",
    method: "e-wallet",
    time: "45 min ago",
    server: "Mike"
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "preparing":
      return { color: "from-blue-500 to-cyan-600", icon: Clock, label: "Preparing" };
    case "ready":
      return { color: "from-green-500 to-teal-600", icon: CheckCircle, label: "Ready" };
    case "completed":
      return { color: "from-purple-500 to-pink-600", icon: CheckCircle, label: "Completed" };
    case "cancelled":
      return { color: "from-red-500 to-pink-600", icon: XCircle, label: "Cancelled" };
    default:
      return { color: "from-gray-500 to-gray-600", icon: Clock, label: "Unknown" };
  }
};

const getPaymentIcon = (method: string) => {
  switch (method) {
    case "card":
      return CreditCard;
    case "e-wallet":
      return Smartphone;
    case "cash":
      return Banknote;
    default:
      return CreditCard;
  }
};

export function Orders() {
  const [filter, setFilter] = useState("all");

  const filteredOrders = filter === "all" 
    ? orders 
    : orders.filter(order => order.status === filter);

  const preparingCount = orders.filter(o => o.status === "preparing").length;
  const readyCount = orders.filter(o => o.status === "ready").length;
  const completedCount = orders.filter(o => o.status === "completed").length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-green-100 to-teal-200 bg-clip-text text-transparent">
            Live Orders
          </h1>
          <p className="text-gray-400 text-lg">Track and manage active orders</p>
        </div>
        <div className="flex gap-3">
          {["all", "preparing", "ready", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize transition-all ${
                filter === status
                  ? "bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-lg shadow-green-500/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Status Metrics */}
      <div className="grid grid-cols-4 gap-6">
        <MetricCard
          title="Total Orders"
          value={orders.length}
          icon={<Clock size={28} className="text-white" />}
          gradient="from-blue-500 to-cyan-600"
        />
        <MetricCard
          title="Preparing"
          value={preparingCount}
          trend="In kitchen"
          icon={<Clock size={28} className="text-white" />}
          gradient="from-blue-500 to-cyan-600"
        />
        <MetricCard
          title="Ready to Serve"
          value={readyCount}
          trend="Awaiting delivery"
          icon={<CheckCircle size={28} className="text-white" />}
          gradient="from-green-500 to-teal-600"
        />
        <MetricCard
          title="Completed"
          value={completedCount}
          trend="Successfully served"
          icon={<CheckCircle size={28} className="text-white" />}
          gradient="from-purple-500 to-pink-600"
        />
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-2 gap-6">
        {filteredOrders.map((order) => {
          const statusConfig = getStatusConfig(order.status);
          const PaymentIcon = getPaymentIcon(order.method);
          const StatusIcon = statusConfig.icon;

          return (
            <GlassCard key={order.id} className="relative overflow-hidden group hover:bg-white/10 transition-all">
              {/* Status Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${statusConfig.color}`}></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-14 h-14 bg-gradient-to-br ${statusConfig.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <StatusIcon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{order.id}</h3>
                    <p className="text-gray-400">{order.table}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`px-4 py-2 bg-gradient-to-r ${statusConfig.color} rounded-xl font-bold text-sm shadow-lg mb-2`}>
                    {statusConfig.label}
                  </div>
                  <p className="text-gray-400 text-xs">{order.time}</p>
                </div>
              </div>

              {/* Order Items */}
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider">Order Items</p>
                <div className="space-y-1">
                  {order.items.map((item, index) => (
                    <p key={index} className="text-white font-medium">• {item}</p>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <PaymentIcon size={18} className="text-gray-400" />
                    <span className="text-sm text-gray-400 capitalize">{order.method}</span>
                  </div>
                  <div className="w-px h-4 bg-white/20"></div>
                  <div>
                    <p className="text-xs text-gray-500">Server</p>
                    <p className="text-sm text-white font-medium">{order.server}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-1">Total</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
                    ${order.total.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Payment Status Badge */}
              <div className="absolute top-6 right-6">
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  order.payment === "paid" 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : order.payment === "pending"
                    ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}>
                  {order.payment.toUpperCase()}
                </div>
              </div>

              {/* Quick Actions (show on hover) */}
              {order.status === "preparing" && (
                <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                  <button className="flex-1 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 rounded-xl text-green-400 font-semibold transition-all">
                    Mark Ready
                  </button>
                  <button className="flex-1 px-4 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-xl text-red-400 font-semibold transition-all">
                    Cancel
                  </button>
                </div>
              )}
              {order.status === "ready" && (
                <div className="mt-4">
                  <button className="w-full px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-xl text-purple-400 font-semibold transition-all opacity-0 group-hover:opacity-100">
                    Mark Completed
                  </button>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>

      {/* Summary Bar */}
      <GlassCard className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border-green-500/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-gray-400 text-sm mb-1">Active Revenue</p>
              <p className="text-3xl font-bold text-white">
                ${orders.filter(o => o.status !== "completed" && o.status !== "cancelled").reduce((sum, o) => sum + o.total, 0).toFixed(2)}
              </p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Completed Revenue</p>
              <p className="text-3xl font-bold text-green-400">
                ${orders.filter(o => o.status === "completed").reduce((sum, o) => sum + o.total, 0).toFixed(2)}
              </p>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Avg Order Value</p>
              <p className="text-3xl font-bold text-teal-400">
                ${(orders.reduce((sum, o) => sum + o.total, 0) / orders.length).toFixed(2)}
              </p>
            </div>
          </div>
          <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-all">
            Export Orders
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
