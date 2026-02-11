import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  FileText, 
  MousePointer2, 
  TrendingUp,
  Clock,
  ArrowUpRight
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { name: "Total Leads", value: "1,284", icon: <Users className="text-blue-500" />, trend: "+12%" },
    { name: "Blog Posts", value: "42", icon: <FileText className="text-purple-500" />, trend: "+2" },
    { name: "Site Visits", value: "12.4k", icon: <MousePointer2 className="text-orange-500" />, trend: "+18%" },
    { name: "Growth Rate", value: "24.5%", icon: <TrendingUp className="text-green-500" />, trend: "+4%" },
  ];

  const recentLeads = [
    { name: "John Doe", email: "john@example.com", type: "Inquiry", date: "2 hours ago" },
    { name: "Synergy Partners", email: "info@partners.asia", type: "Partner Request", date: "5 hours ago" },
    { name: "Global Trading Co.", email: "contact@global.trade", type: "Inquiry", date: "Yesterday" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Admin</h1>
        <p className="text-slate-500">Here's what's happening with Synergy Asia today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="border-none shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-500">{stat.name}</CardTitle>
              <div className="p-2 bg-slate-50 rounded-lg group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
              <div className="flex items-center gap-1 mt-1 text-xs text-green-600 font-medium">
                <ArrowUpRight size={14} />
                {stat.trend} <span className="text-slate-400 font-normal ml-1">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] flex items-center justify-center bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
            <div className="text-center">
              <div className="text-slate-400 mb-2">Chart placeholder - Integration with Recharts</div>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Real-time data visualization of site visits and lead conversion rates.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Leads</CardTitle>
            <button className="text-xs text-primary font-bold hover:underline">View All</button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentLeads.map((lead, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                    <Users size={18} className="text-slate-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-bold text-slate-900 truncate">{lead.name}</div>
                    <div className="text-xs text-slate-500 truncate">{lead.email}</div>
                    <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-primary/10 text-primary uppercase">
                      {lead.type}
                    </div>
                  </div>
                  <div className="text-[10px] text-slate-400 whitespace-nowrap pt-1">
                    <Clock size={10} className="inline mr-1" />
                    {lead.date}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
