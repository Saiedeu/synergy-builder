/**
 * @Users.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Search, 
  User, 
  Edit2, 
  Trash2, 
  ShieldAlert,
  ShieldCheck,
  ShieldIcon
} from "lucide-react";
import { toast } from "sonner";

export default function UserManagement() {
  const users = [
    { id: 1, name: "SA_Admin", email: "admin@synergyasiaqatar.com", role: "Administrator", lastActive: "Just now" },
    { id: 2, name: "Moderator_A", email: "mod@synergyasiaqatar.com", role: "Moderator", lastActive: "2 hours ago" },
    { id: 3, name: "Editor_B", email: "editor@synergyasiaqatar.com", role: "Editor", lastActive: "Yesterday" },
  ];

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "Administrator": return <Badge className="bg-red-500 hover:bg-red-600"><ShieldAlert size={12} className="mr-1" /> Admin</Badge>;
      case "Moderator": return <Badge className="bg-blue-500 hover:bg-blue-600"><ShieldCheck size={12} className="mr-1" /> Moderator</Badge>;
      case "Editor": return <Badge className="bg-green-500 hover:bg-green-600"><ShieldIcon size={12} className="mr-1" /> Editor</Badge>;
      default: return <Badge variant="outline">{role}</Badge>;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-500">Control who can access and manage the website content.</p>
        </div>
        <Button className="bg-primary text-white">
          <Plus size={18} className="mr-2" /> Add New User
        </Button>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-white border-b border-slate-100 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-bold">System Users</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <Input placeholder="Search users..." className="pl-10 h-9" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Last Activity</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/50 group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                          <User size={20} className="text-slate-400" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-900">{user.name}</div>
                          <div className="text-xs text-slate-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {getRoleBadge(user.role)}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-500">{user.lastActive}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-primary">
                          <Edit2 size={14} />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
