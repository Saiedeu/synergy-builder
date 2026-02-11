/**
 * @Media.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Upload, 
  Search, 
  Grid, 
  List, 
  MoreVertical, 
  Download, 
  Trash2, 
  Eye,
  FileIcon,
  ImageIcon
} from "lucide-react";
import { toast } from "sonner";

export default function MediaManagement() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const mediaItems = [
    { id: 1, name: "hero-bg.jpg", type: "image", size: "1.2 MB", date: "Oct 24, 2025", url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=200&auto=format&fit=crop" },
    { id: 2, name: "company-profile.pdf", type: "file", size: "4.5 MB", date: "Oct 22, 2025", url: "#" },
    { id: 3, name: "team-meeting.jpg", type: "image", size: "850 KB", date: "Oct 15, 2025", url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=200&auto=format&fit=crop" },
    { id: 4, name: "logo-white.svg", type: "image", size: "12 KB", date: "Sep 30, 2025", url: "/placeholder.svg" },
  ];

  const handleUpload = () => {
    toast.info("Upload feature would open a file picker.");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Media Library</h1>
          <p className="text-slate-500">Manage all your uploaded images, videos, and documents.</p>
        </div>
        <Button onClick={handleUpload} className="bg-primary text-white">
          <Upload size={18} className="mr-2" /> Upload New Media
        </Button>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-white border-b border-slate-100 flex flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <Input placeholder="Search media..." className="pl-10 h-9" />
            </div>
          </div>
          <div className="flex border rounded-lg overflow-hidden">
            <Button 
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="rounded-none h-9 px-3"
              onClick={() => setViewMode('grid')}
            >
              <Grid size={16} />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'secondary' : 'ghost'} 
              size="sm" 
              className="rounded-none h-9 px-3"
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {mediaItems.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group-hover:border-primary transition-colors">
                    {item.type === 'image' ? (
                      <img src={item.url} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-2">
                        <FileIcon size={40} />
                        <span className="text-[10px] font-bold uppercase">{item.name.split('.').pop()}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-white/20">
                        <Download size={16} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-white hover:bg-red-500">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xs font-medium text-slate-900 truncate">{item.name}</p>
                    <p className="text-[10px] text-slate-400 uppercase">{item.size}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                    <th className="px-4 py-3">File</th>
                    <th className="px-4 py-3">Type</th>
                    <th className="px-4 py-3">Size</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mediaItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 group">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center shrink-0">
                            {item.type === 'image' ? <ImageIcon size={16} /> : <FileIcon size={16} />}
                          </div>
                          <span className="text-sm font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-500 uppercase">{item.type}</td>
                      <td className="px-4 py-3 text-xs text-slate-500">{item.size}</td>
                      <td className="px-4 py-3 text-xs text-slate-500">{item.date}</td>
                      <td className="px-4 py-3 text-right">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-500">
                          <Trash2 size={14} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
