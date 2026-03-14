import { useState } from "react";
import { Plus, Receipt, ToggleLeft, ToggleRight, Percent } from "lucide-react";
import { GlassCard, MetricCard } from "./GlassCard";

const initialTaxRules = [
  { 
    id: 1, 
    name: "Sales Tax", 
    rate: 8.5, 
    enabled: true, 
    applyTo: "All Items",
    description: "Standard sales tax applied to all menu items"
  },
  { 
    id: 2, 
    name: "Service Charge", 
    rate: 12, 
    enabled: true, 
    applyTo: "Dine-in Only",
    description: "Discretionary service charge for table service"
  },
  { 
    id: 3, 
    name: "Beverage Tax", 
    rate: 5, 
    enabled: true, 
    applyTo: "Alcoholic Drinks",
    description: "Additional tax on alcoholic beverages"
  },
  { 
    id: 4, 
    name: "Local Fee", 
    rate: 2.5, 
    enabled: false, 
    applyTo: "All Items",
    description: "City surcharge for all transactions"
  },
];

export function TaxSettings() {
  const [taxRules, setTaxRules] = useState(initialTaxRules);

  const toggleTax = (id: number) => {
    setTaxRules(taxRules.map(tax => 
      tax.id === id ? { ...tax, enabled: !tax.enabled } : tax
    ));
  };

  const activeTaxes = taxRules.filter(t => t.enabled);
  const totalRate = activeTaxes.reduce((sum, tax) => sum + tax.rate, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-yellow-100 to-orange-200 bg-clip-text text-transparent">
            Tax Configuration
          </h1>
          <p className="text-gray-400 text-lg">Manage tax rules and rates</p>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 rounded-2xl font-bold text-lg shadow-xl shadow-orange-500/30 transition-all flex items-center gap-3">
          <Plus size={24} />
          New Tax Rule
        </button>
      </div>

      {/* Tax Overview */}
      <div className="grid grid-cols-4 gap-6">
        <MetricCard
          title="Total Tax Rules"
          value={taxRules.length}
          icon={<Receipt size={28} className="text-white" />}
          gradient="from-orange-500 to-yellow-600"
        />
        <MetricCard
          title="Active Rules"
          value={activeTaxes.length}
          trend="Currently applied"
          icon={<ToggleRight size={28} className="text-white" />}
          gradient="from-green-500 to-teal-600"
        />
        <MetricCard
          title="Combined Rate"
          value={`${totalRate.toFixed(1)}%`}
          trend="Total tax applied"
          icon={<Percent size={28} className="text-white" />}
          gradient="from-blue-500 to-cyan-600"
        />
        <MetricCard
          title="Tax Revenue Today"
          value="$2,847"
          trend="↑ 18% vs yesterday"
          icon={<Receipt size={28} className="text-white" />}
          gradient="from-purple-500 to-pink-600"
        />
      </div>

      {/* Tax Rules Grid */}
      <div className="grid grid-cols-2 gap-6">
        {taxRules.map((tax) => (
          <GlassCard key={tax.id} className={`relative overflow-hidden ${tax.enabled ? "border-orange-500/30" : ""}`}>
            {/* Active Indicator */}
            {tax.enabled && (
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-600"></div>
            )}

            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${
                    tax.enabled 
                      ? "from-orange-500 to-yellow-600" 
                      : "from-gray-600 to-gray-700"
                  } rounded-2xl flex items-center justify-center shadow-lg`}>
                    <Receipt size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{tax.name}</h3>
                    <p className="text-gray-400 text-sm">{tax.description}</p>
                  </div>
                </div>
              </div>

              {/* Tax Rate Display */}
              <div className="bg-white/5 rounded-xl p-6">
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    {tax.rate}
                  </span>
                  <span className="text-3xl font-bold text-gray-400 ml-2">%</span>
                </div>
                <p className="text-center text-gray-400 text-sm">Tax Rate</p>
              </div>

              {/* Application Scope */}
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-gray-400 text-xs mb-2 uppercase tracking-wider">Applies To</p>
                <div className="flex items-center gap-2">
                  <div className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-yellow-600/20 border border-orange-500/30 rounded-xl">
                    <span className="text-orange-400 font-semibold">{tax.applyTo}</span>
                  </div>
                </div>
              </div>

              {/* Toggle and Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <button
                  onClick={() => toggleTax(tax.id)}
                  className="flex items-center gap-3 group"
                >
                  {tax.enabled ? (
                    <>
                      <div className="relative w-16 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full transition-all">
                        <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full shadow-lg"></div>
                      </div>
                      <span className="text-green-400 font-bold">ENABLED</span>
                    </>
                  ) : (
                    <>
                      <div className="relative w-16 h-8 bg-gray-700 rounded-full transition-all">
                        <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-lg"></div>
                      </div>
                      <span className="text-gray-500 font-bold">DISABLED</span>
                    </>
                  )}
                </button>
                <div className="flex gap-2">
                  <button className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-xl font-semibold transition-all">
                    Edit
                  </button>
                  <button className="px-6 py-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-xl text-red-400 font-semibold transition-all">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Tax Calculation Preview */}
      <GlassCard className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Tax Preview</h3>
            <p className="text-gray-400 mb-6">Example calculation for a $100 order</p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-white font-bold text-xl">$100.00</span>
              </div>
              {activeTaxes.map((tax) => (
                <div key={tax.id} className="flex justify-between items-center py-3 border-t border-white/10">
                  <span className="text-gray-400">{tax.name} ({tax.rate}%)</span>
                  <span className="text-orange-400 font-semibold">+${(100 * tax.rate / 100).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-4 border-t-2 border-orange-500/50">
                <span className="text-white font-bold text-xl">Total</span>
                <span className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  ${(100 + activeTaxes.reduce((sum, tax) => sum + (100 * tax.rate / 100), 0)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Visual Breakdown */}
          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Effective Rate</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                    {totalRate.toFixed(1)}%
                  </p>
                </div>
              </div>
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="url(#taxGradient)"
                  strokeWidth="8"
                  strokeDasharray={`${(totalRate / 50) * 251.2} 251.2`}
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="taxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#eab308" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
