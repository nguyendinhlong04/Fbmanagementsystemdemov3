import { Save, User, Bell, Lock, Globe, Database } from "lucide-react";

export function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Settings</h2>
          <p className="text-gray-400 text-sm mt-1">Manage your restaurant system settings</p>
        </div>
        <button className="bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#c19d2f] transition-colors flex items-center gap-2">
          <Save size={20} />
          Save Changes
        </button>
      </div>

      {/* Restaurant Profile */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
            <User className="text-[#d4af37]" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Restaurant Profile</h3>
            <p className="text-sm text-gray-400">Update your restaurant information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Restaurant Name</label>
            <input
              type="text"
              defaultValue="F&B Manager Restaurant"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              defaultValue="contact@restaurant.com"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
            <input
              type="tel"
              defaultValue="+1 234-567-8900"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Address</label>
            <input
              type="text"
              defaultValue="123 Food Street, City"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
            <Bell className="text-[#d4af37]" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Notification Preferences</h3>
            <p className="text-sm text-gray-400">Configure how you receive notifications</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Low Stock Alerts", description: "Get notified when inventory is running low" },
            { label: "New Order Notifications", description: "Receive alerts for new orders" },
            { label: "Daily Sales Summary", description: "Daily email with sales summary" },
            { label: "Staff Updates", description: "Notifications about staff changes" },
          ].map((item, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-[#0a0a0a] rounded-lg">
              <div>
                <p className="text-white font-medium">{item.label}</p>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#d4af37]"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
            <Lock className="text-[#d4af37]" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Security Settings</h3>
            <p className="text-sm text-gray-400">Manage your account security</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]"
            />
          </div>
          <button className="bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#c19d2f] transition-colors">
            Update Password
          </button>
        </div>
      </div>

      {/* System Settings */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
            <Globe className="text-[#d4af37]" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">System Settings</h3>
            <p className="text-sm text-gray-400">Configure system preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Currency</label>
            <select className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
              <option>JPY (¥)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Timezone</label>
            <select className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]">
              <option>UTC-8 (Pacific Time)</option>
              <option>UTC-5 (Eastern Time)</option>
              <option>UTC+0 (GMT)</option>
              <option>UTC+1 (CET)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Date Format</label>
            <select className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]">
              <option>MM/DD/YYYY</option>
              <option>DD/MM/YYYY</option>
              <option>YYYY-MM-DD</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Language</label>
            <select className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#d4af37]">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Chinese</option>
            </select>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
            <Database className="text-[#d4af37]" size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Data Management</h3>
            <p className="text-sm text-gray-400">Backup and restore your data</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#222222] transition-colors border border-[#2a2a2a]">
            Export Data
          </button>
          <button className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#222222] transition-colors border border-[#2a2a2a]">
            Backup Database
          </button>
          <button className="bg-red-500/10 text-red-500 px-6 py-2.5 rounded-lg font-medium hover:bg-red-500/20 transition-colors border border-red-500/20">
            Clear All Data
          </button>
        </div>
      </div>
    </div>
  );
}
