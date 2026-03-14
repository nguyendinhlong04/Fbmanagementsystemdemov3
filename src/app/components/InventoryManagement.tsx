import { Plus, Package, AlertTriangle, TrendingDown, TrendingUp, Boxes } from "lucide-react";
import { GlassCard, MetricCard } from "./GlassCard";

const inventoryItems = [
  { 
    id: 1, 
    name: "Wagyu Beef", 
    stock: 8, 
    unit: "kg", 
    maxStock: 50,
    supplier: "Premium Meats Co.", 
    status: "critical",
    trend: -45,
    lastOrder: "2 days ago"
  },
  { 
    id: 2, 
    name: "Truffle Oil", 
    stock: 2, 
    unit: "bottles", 
    maxStock: 10,
    supplier: "Gourmet Imports", 
    status: "critical",
    trend: -60,
    lastOrder: "5 days ago"
  },
  { 
    id: 3, 
    name: "Fresh Lobster", 
    stock: 12, 
    unit: "pieces", 
    maxStock: 30,
    supplier: "Ocean Fresh", 
    status: "low",
    trend: -35,
    lastOrder: "1 day ago"
  },
  { 
    id: 4, 
    name: "Premium Wine", 
    stock: 24, 
    unit: "bottles", 
    maxStock: 60,
    supplier: "Wine Cellar", 
    status: "low",
    trend: -25,
    lastOrder: "3 days ago"
  },
  { 
    id: 5, 
    name: "Organic Vegetables", 
    stock: 85, 
    unit: "kg", 
    maxStock: 100,
    supplier: "Green Farms", 
    status: "good",
    trend: +15,
    lastOrder: "Today"
  },
  { 
    id: 6, 
    name: "Artisan Bread", 
    stock: 45, 
    unit: "loaves", 
    maxStock: 60,
    supplier: "Baker's Choice", 
    status: "good",
    trend: +8,
    lastOrder: "Today"
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "critical":
      return "from-red-500 to-pink-600";
    case "low":
      return "from-orange-500 to-yellow-600";
    case "good":
      return "from-green-500 to-teal-600";
    default:
      return "from-gray-500 to-gray-600";
  }
};

const getStockPercentage = (stock: number, maxStock: number) => {
  return (stock / maxStock) * 100;
};

export function InventoryManagement() {
  const criticalCount = inventoryItems.filter(i => i.status === "critical").length;
  const lowCount = inventoryItems.filter(i => i.status === "low").length;
  const goodCount = inventoryItems.filter(i => i.status === "good").length;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-teal-100 to-cyan-200 bg-clip-text text-transparent">
            Stock Control
          </h1>
          <p className="text-gray-400 text-lg">Real-time inventory monitoring</p>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 rounded-2xl font-bold text-lg shadow-xl shadow-teal-500/30 transition-all flex items-center gap-3">
          <Plus size={24} />
          Add Stock
        </button>
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-4 gap-6">
        <MetricCard
          title="Total Items"
          value={inventoryItems.length}
          icon={<Boxes size={28} className="text-white" />}
          gradient="from-teal-500 to-cyan-600"
        />
        <MetricCard
          title="Critical Stock"
          value={criticalCount}
          trend="Immediate action needed"
          icon={<AlertTriangle size={28} className="text-white" />}
          gradient="from-red-500 to-pink-600"
        />
        <MetricCard
          title="Low Stock"
          value={lowCount}
          trend="Reorder soon"
          icon={<TrendingDown size={28} className="text-white" />}
          gradient="from-orange-500 to-yellow-600"
        />
        <MetricCard
          title="Healthy Stock"
          value={goodCount}
          trend="Well stocked"
          icon={<TrendingUp size={28} className="text-white" />}
          gradient="from-green-500 to-teal-600"
        />
      </div>

      {/* Inventory Grid */}
      <div className="grid grid-cols-2 gap-6">
        {inventoryItems.map((item) => {
          const stockPercentage = getStockPercentage(item.stock, item.maxStock);
          
          return (
            <GlassCard key={item.id} className="relative overflow-hidden">
              {/* Status Indicator Strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getStatusColor(item.status)}`}></div>
              
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getStatusColor(item.status)} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Package size={32} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.supplier}</p>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className={`px-4 py-2 bg-gradient-to-r ${getStatusColor(item.status)} rounded-xl font-bold text-sm uppercase shadow-lg`}>
                    {item.status}
                  </div>
                </div>

                {/* Stock Level */}
                <div>
                  <div className="flex items-end justify-between mb-2">
                    <div>
                      <p className="text-gray-400 text-xs mb-1">Current Stock</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-white">{item.stock}</span>
                        <span className="text-gray-400 text-lg">/ {item.maxStock} {item.unit}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-xs mb-1">Trend</p>
                      <div className="flex items-center gap-1">
                        {item.trend > 0 ? (
                          <TrendingUp className="text-green-400" size={18} />
                        ) : (
                          <TrendingDown className="text-red-400" size={18} />
                        )}
                        <span className={`font-bold ${item.trend > 0 ? "text-green-400" : "text-red-400"}`}>
                          {Math.abs(item.trend)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${getStatusColor(item.status)} transition-all duration-500`}
                      style={{ width: `${stockPercentage}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-500">0</span>
                    <span className="text-xs font-semibold text-cyan-400">{stockPercentage.toFixed(0)}%</span>
                    <span className="text-xs text-gray-500">{item.maxStock}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                  <div className="flex-1">
                    <p className="text-gray-500 text-xs">Last Order</p>
                    <p className="text-white text-sm font-medium">{item.lastOrder}</p>
                  </div>
                  <button className="px-6 py-2.5 bg-white/10 hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-600 rounded-xl font-semibold transition-all">
                    Reorder
                  </button>
                  <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-all">
                    Update
                  </button>
                </div>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Quick Actions Bar */}
      <GlassCard>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Quick Actions</h3>
            <p className="text-gray-400 text-sm">Manage inventory operations</p>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-medium transition-all">
              Generate Report
            </button>
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-medium transition-all">
              Supplier Orders
            </button>
            <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-medium transition-all">
              Stock History
            </button>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
