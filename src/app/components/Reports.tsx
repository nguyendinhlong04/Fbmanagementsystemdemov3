import { Download, FileText, Calendar } from "lucide-react";

const reports = [
  { 
    id: 1, 
    name: "Daily Sales Report", 
    description: "Comprehensive daily sales breakdown",
    date: "March 14, 2026",
    type: "Sales",
    format: "PDF"
  },
  { 
    id: 2, 
    name: "Weekly Revenue Summary", 
    description: "Week-over-week revenue analysis",
    date: "March 8-14, 2026",
    type: "Revenue",
    format: "Excel"
  },
  { 
    id: 3, 
    name: "Inventory Usage Report", 
    description: "Ingredient consumption and waste tracking",
    date: "March 14, 2026",
    type: "Inventory",
    format: "PDF"
  },
  { 
    id: 4, 
    name: "Staff Performance Report", 
    description: "Employee performance metrics and KPIs",
    date: "March 1-14, 2026",
    type: "Staff",
    format: "PDF"
  },
  { 
    id: 5, 
    name: "Monthly Financial Statement", 
    description: "Complete financial overview for the month",
    date: "February 2026",
    type: "Financial",
    format: "Excel"
  },
  { 
    id: 6, 
    name: "Customer Feedback Report", 
    description: "Customer satisfaction and feedback summary",
    date: "March 1-14, 2026",
    type: "Customer",
    format: "PDF"
  },
];

const reportCategories = [
  { name: "Sales Reports", count: 12, icon: FileText },
  { name: "Inventory Reports", count: 8, icon: FileText },
  { name: "Financial Reports", count: 6, icon: FileText },
  { name: "Staff Reports", count: 4, icon: FileText },
];

export function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Reports</h2>
          <p className="text-gray-400 text-sm mt-1">Generate and download business reports</p>
        </div>
        <button className="bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#c19d2f] transition-colors flex items-center gap-2">
          <FileText size={20} />
          Generate Report
        </button>
      </div>

      {/* Report Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reportCategories.map((category, index) => (
          <div key={index} className="bg-[#111111] border border-[#222222] rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
                <category.icon className="text-[#d4af37]" size={20} />
              </div>
            </div>
            <p className="text-white font-medium mb-1">{category.name}</p>
            <p className="text-2xl font-bold text-[#d4af37]">{category.count}</p>
          </div>
        ))}
      </div>

      {/* Recent Reports */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
        <div className="p-6 border-b border-[#222222]">
          <h3 className="text-lg font-semibold text-white">Recent Reports</h3>
          <p className="text-sm text-gray-400 mt-1">Access and download your generated reports</p>
        </div>
        <div className="p-6 space-y-4">
          {reports.map((report) => (
            <div key={report.id} className="bg-[#0a0a0a] border border-[#222222] rounded-lg p-4 hover:border-[#d4af37] transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="text-[#d4af37]" size={20} />
                    <h4 className="text-white font-semibold">{report.name}</h4>
                  </div>
                  <p className="text-gray-400 text-sm mb-3">{report.description}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{report.date}</span>
                    </div>
                    <span className="px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded">
                      {report.type}
                    </span>
                    <span className="px-2 py-1 bg-gray-500/10 text-gray-400 rounded">
                      {report.format}
                    </span>
                  </div>
                </div>
                <button className="bg-[#d4af37] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#c19d2f] transition-colors flex items-center gap-2 ml-4">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Report Generator */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Custom Report Generator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Report Type</label>
            <select className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]">
              <option>Sales Report</option>
              <option>Inventory Report</option>
              <option>Financial Report</option>
              <option>Staff Report</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Date Range</label>
            <select className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]">
              <option>Today</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Custom Range</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Format</label>
            <select className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]">
              <option>PDF</option>
              <option>Excel</option>
              <option>CSV</option>
            </select>
          </div>
          <div className="flex items-end">
            <button className="w-full bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#c19d2f] transition-colors">
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
