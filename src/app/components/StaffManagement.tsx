import { Plus, Edit, Trash2, Search, UserCheck, UserX } from "lucide-react";

const staffMembers = [
  { 
    id: 1, 
    name: "John Smith", 
    role: "Head Chef",
    email: "john.smith@restaurant.com",
    phone: "+1 234-567-8901",
    status: "active",
    shift: "Morning",
    joinDate: "Jan 2024"
  },
  { 
    id: 2, 
    name: "Sarah Johnson", 
    role: "Waitress",
    email: "sarah.j@restaurant.com",
    phone: "+1 234-567-8902",
    status: "active",
    shift: "Evening",
    joinDate: "Mar 2024"
  },
  { 
    id: 3, 
    name: "Michael Chen", 
    role: "Sous Chef",
    email: "michael.chen@restaurant.com",
    phone: "+1 234-567-8903",
    status: "active",
    shift: "Morning",
    joinDate: "Feb 2024"
  },
  { 
    id: 4, 
    name: "Emily Davis", 
    role: "Bartender",
    email: "emily.d@restaurant.com",
    phone: "+1 234-567-8904",
    status: "active",
    shift: "Evening",
    joinDate: "Jan 2025"
  },
  { 
    id: 5, 
    name: "David Brown", 
    role: "Waiter",
    email: "david.b@restaurant.com",
    phone: "+1 234-567-8905",
    status: "inactive",
    shift: "Night",
    joinDate: "Dec 2023"
  },
  { 
    id: 6, 
    name: "Lisa Anderson", 
    role: "Cashier",
    email: "lisa.a@restaurant.com",
    phone: "+1 234-567-8906",
    status: "active",
    shift: "Morning",
    joinDate: "Nov 2024"
  },
];

export function StaffManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">Staff Management</h2>
          <p className="text-gray-400 text-sm mt-1">Manage your restaurant team members</p>
        </div>
        <button className="bg-[#d4af37] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#c19d2f] transition-colors flex items-center gap-2">
          <Plus size={20} />
          Add Staff Member
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
              <UserCheck className="text-[#d4af37]" size={24} />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">Total Staff</p>
          <p className="text-3xl font-bold text-white">{staffMembers.length}</p>
        </div>

        <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
              <UserCheck className="text-green-500" size={24} />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">Active</p>
          <p className="text-3xl font-bold text-green-500">
            {staffMembers.filter(s => s.status === "active").length}
          </p>
        </div>

        <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
              <UserX className="text-red-500" size={24} />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">Inactive</p>
          <p className="text-3xl font-bold text-red-500">
            {staffMembers.filter(s => s.status === "inactive").length}
          </p>
        </div>

        <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-[#d4af37]/10 rounded-lg flex items-center justify-center">
              <UserCheck className="text-[#d4af37]" size={24} />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">On Duty</p>
          <p className="text-3xl font-bold text-[#d4af37]">4</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search staff members..."
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg pl-10 pr-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#d4af37]"
          />
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#222222] bg-[#0a0a0a]">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Name</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Role</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Email</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Phone</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Shift</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Join Date</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((staff) => (
                <tr key={staff.id} className="border-b border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#d4af37] rounded-full flex items-center justify-center text-black font-semibold">
                        {staff.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="text-white font-medium">{staff.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-[#d4af37]/10 text-[#d4af37] rounded-full text-xs font-medium">
                      {staff.role}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-400">{staff.email}</td>
                  <td className="py-4 px-6 text-gray-400">{staff.phone}</td>
                  <td className="py-4 px-6 text-white">{staff.shift}</td>
                  <td className="py-4 px-6 text-gray-400">{staff.joinDate}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      staff.status === "active" 
                        ? "bg-green-500/10 text-green-500" 
                        : "bg-red-500/10 text-red-500"
                    }`}>
                      {staff.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-[#222222] rounded-lg transition-colors">
                        <Edit size={18} className="text-gray-400 hover:text-[#d4af37]" />
                      </button>
                      <button className="p-2 hover:bg-[#222222] rounded-lg transition-colors">
                        <Trash2 size={18} className="text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
