/**
 * @Leads.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Mail, Phone, Calendar, MoreVertical, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export default function Leads() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/leads");
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      }
    } catch (error) {
      console.error("Error fetching leads:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Lead Management</h1>
          <p className="text-slate-500">View and manage inquiries collected from the website.</p>
        </div>
        <Button variant="outline" onClick={fetchLeads}>Refresh Data</Button>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-white border-b border-slate-100 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-bold">Inbound Leads ({filteredLeads.length})</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <Input 
              placeholder="Search leads..." 
              className="pl-10 h-9" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                  <th className="px-6 py-4">Lead Name</th>
                  <th className="px-6 py-4">Contact Info</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Date Received</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-slate-400">Loading leads...</td>
                  </tr>
                ) : filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-slate-400">No leads found.</td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                            {lead.name.charAt(0)}
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-900">{lead.name}</div>
                            <div className="text-xs text-slate-500 max-w-[200px] truncate">{lead.message}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="text-xs flex items-center gap-1.5 text-slate-600">
                            <Mail size={12} className="text-slate-400" /> {lead.email}
                          </div>
                          {lead.phone && (
                            <div className="text-xs flex items-center gap-1.5 text-slate-600">
                              <Phone size={12} className="text-slate-400" /> {lead.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className="text-[10px] font-bold uppercase border-primary/20 text-primary bg-primary/5">
                          {lead.type}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs flex items-center gap-1.5 text-slate-500">
                          <Calendar size={12} /> {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <a href={`mailto:${lead.email}`}>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-primary" title="Reply Email">
                              <Mail size={14} />
                            </Button>
                          </a>
                          {lead.phone && (
                            <a href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`} target="_blank">
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-green-500" title="WhatsApp Chat">
                                <ExternalLink size={14} />
                              </Button>
                            </a>
                          )}
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-500">
                            <Trash2 size={14} />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
