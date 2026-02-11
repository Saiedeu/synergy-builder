import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  Image, 
  Mail, 
  Users, 
  Settings, 
  Palette, 
  Search, 
  LogOut,
  ChevronRight,
  Menu,
  X,
  UserCheck,
  ShoppingBag
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/admin" },
  { name: "Products", icon: <ShoppingBag size={20} />, path: "/admin/products" },
  { name: "Blog", icon: <FileText size={20} />, path: "/admin/blog" },
  { name: "Media", icon: <Image size={20} />, path: "/admin/media" },
  { name: "Contact", icon: <Mail size={20} />, path: "/admin/contact" },
  { name: "Leads", icon: <UserCheck size={20} />, path: "/admin/leads" },
  { name: "Customization", icon: <Palette size={20} />, path: "/admin/customization" },
  { name: "SEO", icon: <Search size={20} />, path: "/admin/seo" },
  { name: "Site Settings", icon: <Settings size={20} />, path: "/admin/settings" },
  { name: "Site Admin", icon: <Users size={20} />, path: "/admin/users" },
];

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-slate-900 text-slate-400 w-64 flex flex-col transition-all duration-300 z-50",
          !isSidebarOpen && "-ml-64 lg:ml-0 lg:w-20"
        )}
      >
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold shrink-0">
            S
          </div>
          <span className={cn("font-bold text-white tracking-tight", !isSidebarOpen && "lg:hidden")}>
            Synergy Admin
          </span>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group",
                location.pathname === item.path 
                  ? "bg-primary text-white" 
                  : "hover:bg-slate-800 hover:text-white"
              )}
            >
              <span className="shrink-0">{item.icon}</span>
              <span className={cn("text-sm font-medium", !isSidebarOpen && "lg:hidden")}>
                {item.name}
              </span>
              {location.pathname === item.path && isSidebarOpen && (
                <ChevronRight size={14} className="ml-auto" />
              )}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-colors">
            <LogOut size={20} />
            <span className={cn("text-sm font-medium", !isSidebarOpen && "lg:hidden")}>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-slate-900">SA_Admin</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider">Super Administrator</div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
              <img src="https://ui-avatars.com/api/?name=SA+Admin&background=0D8ABC&color=fff" alt="Avatar" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
