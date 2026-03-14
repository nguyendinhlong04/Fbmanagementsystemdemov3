import { Outlet, NavLink } from "react-router";
import { Zap } from "lucide-react";

const navItems = [
  { path: "/", label: "Overview", end: true },
  { path: "/menu", label: "Menu" },
  { path: "/inventory", label: "Inventory" },
  { path: "/tax", label: "Tax" },
  { path: "/sales", label: "Analytics" },
  { path: "/orders", label: "Orders" },
  { path: "/reports", label: "Reports" },
  { path: "/staff", label: "Team" },
  { path: "/settings", label: "Settings" },
];

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]"></div>
      </div>

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6">
        <div className="max-w-[1800px] mx-auto">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-4 shadow-2xl">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="text-black" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    NEXUS
                  </h1>
                  <p className="text-[10px] text-gray-400 -mt-1">Restaurant OS</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="flex items-center gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    end={item.end}
                    className={({ isActive }) =>
                      `px-6 py-2.5 rounded-xl font-medium text-sm transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 px-8 pb-12">
        <div className="max-w-[1800px] mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
