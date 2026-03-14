import { useState } from "react";
import { Plus, Star, Edit2, Eye, EyeOff, MoreVertical } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = ["All Items", "Signature", "Mains", "Drinks", "Desserts"];

const menuItems = [
  {
    id: 1,
    name: "Truffle Burger",
    category: "Signature",
    price: 28.00,
    available: true,
    rating: 4.9,
    orders: 156,
    image: "gourmet burger truffle",
    description: "Premium wagyu beef with truffle aioli",
  },
  {
    id: 2,
    name: "Wagyu Steak",
    category: "Signature",
    price: 65.00,
    available: true,
    rating: 5.0,
    orders: 89,
    image: "wagyu steak premium",
    description: "A5 grade wagyu with seasonal vegetables",
  },
  {
    id: 3,
    name: "Lobster Risotto",
    category: "Mains",
    price: 42.00,
    available: true,
    rating: 4.8,
    orders: 124,
    image: "lobster risotto luxury",
    description: "Creamy risotto with fresh lobster",
  },
  {
    id: 4,
    name: "Signature Cocktail",
    category: "Drinks",
    price: 18.00,
    available: true,
    rating: 4.7,
    orders: 234,
    image: "cocktail signature premium",
    description: "House special with premium spirits",
  },
  {
    id: 5,
    name: "Chocolate Soufflé",
    category: "Desserts",
    price: 16.00,
    available: false,
    rating: 4.9,
    orders: 98,
    image: "chocolate souffle dessert",
    description: "Decadent dark chocolate soufflé",
  },
  {
    id: 6,
    name: "Seafood Platter",
    category: "Signature",
    price: 78.00,
    available: true,
    rating: 4.8,
    orders: 67,
    image: "seafood platter fresh",
    description: "Fresh catch of the day selection",
  },
];

export function MenuManagement() {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All Items" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            Menu Studio
          </h1>
          <p className="text-gray-400 text-lg">Craft your culinary experience</p>
        </div>
        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-2xl font-bold text-lg shadow-xl shadow-purple-500/30 transition-all flex items-center gap-3">
          <Plus size={24} />
          Create Item
        </button>
      </div>

      {/* Category Filter */}
      <GlassCard>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search menu..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 w-80"
          />
        </div>
      </GlassCard>

      {/* Menu Grid */}
      <div className="grid grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <GlassCard key={item.id} className="group hover:bg-white/10 transition-all cursor-pointer overflow-hidden">
            {/* Image */}
            <div className="relative -m-6 mb-4 h-56 overflow-hidden">
              <ImageWithFallback
                src={`https://source.unsplash.com/800x600/?${item.image}`}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 flex gap-2">
                {item.available ? (
                  <div className="px-3 py-1 bg-green-500 rounded-full text-white text-xs font-bold flex items-center gap-1">
                    <Eye size={12} />
                    Live
                  </div>
                ) : (
                  <div className="px-3 py-1 bg-red-500 rounded-full text-white text-xs font-bold flex items-center gap-1">
                    <EyeOff size={12} />
                    Hidden
                  </div>
                )}
                {item.category === "Signature" && (
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white text-xs font-bold flex items-center gap-1">
                    <Star size={12} />
                    Featured
                  </div>
                )}
              </div>

              {/* Quick Actions */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all">
                <button className="w-10 h-10 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <Edit2 size={16} className="text-white" />
                </button>
              </div>

              {/* Bottom Info on Image */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="text-yellow-400 fill-yellow-400" size={16} />
                  <span className="text-white font-bold">{item.rating}</span>
                  <span className="text-gray-300 text-sm">• {item.orders} orders</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
                <button className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-all">
                  <MoreVertical size={18} className="text-gray-400" />
                </button>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div>
                  <p className="text-gray-500 text-xs mb-1">Price</p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button className="px-6 py-2 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-600 rounded-xl font-semibold transition-all">
                  Edit
                </button>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Summary Bar */}
      <GlassCard>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Items</p>
              <p className="text-2xl font-bold text-white">{menuItems.length}</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Available</p>
              <p className="text-2xl font-bold text-green-400">
                {menuItems.filter((i) => i.available).length}
              </p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Categories</p>
              <p className="text-2xl font-bold text-purple-400">{categories.length - 1}</p>
            </div>
          </div>
          <button className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-medium transition-all">
            Export Menu
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
