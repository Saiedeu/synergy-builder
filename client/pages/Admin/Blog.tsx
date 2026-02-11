import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Save, Trash2, Edit2, Search } from "lucide-react";
import { toast } from "sonner";

declare global {
  interface Window {
    tinymce: any;
  }
}

export default function BlogManagement() {
  const [isEditing, setIsEditing] = useState(false);
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState("");

  const handleSave = () => {
    const content = window.tinymce.get("blog-editor").getContent();
    console.log({ title, content });
    toast.success("Blog post saved successfully!");
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing) {
      setTimeout(() => {
        window.tinymce.init({
          selector: "#blog-editor",
          height: 500,
          plugins: [
            "advlist", "autolink", "lists", "link", "image", "charmap", "preview",
            "anchor", "searchreplace", "visualblocks", "code", "fullscreen",
            "insertdatetime", "media", "table", "help", "wordcount"
          ],
          toolbar: "undo redo | blocks | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
          setup: (editor: any) => {
            editorRef.current = editor;
          }
        });
      }, 100);
    }
    return () => {
      if (window.tinymce && window.tinymce.get("blog-editor")) {
        window.tinymce.get("blog-editor").remove();
      }
    };
  }, [isEditing]);

  const posts = [
    { id: 1, title: "Qatar: A Strategic Gateway for International Products", status: "Published", date: "Nov 12, 2025" },
    { id: 2, title: "Retail Trends: Food, Lifestyle, and Cultural Value from ASEAN", status: "Published", date: "Nov 08, 2025" },
    { id: 3, title: "AGRITEQ 2026 at Katara Highlights Agricultural Innovation", status: "Published", date: "Nov 05, 2025" },
  ];

  if (isEditing) {
    return (
      <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">New Blog Post</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSave} className="bg-primary text-white">
              <Save className="mr-2 h-4 w-4" /> Save Post
            </Button>
          </div>
        </div>

        <Card className="border-none shadow-sm">
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Post Title</Label>
              <Input 
                id="title" 
                placeholder="Enter a descriptive title..." 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg font-bold"
              />
            </div>

            <div className="space-y-2">
              <Label>Content</Label>
              <textarea id="blog-editor" defaultValue="<p>Start writing your professional insight here...</p>"></textarea>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Featured Image URL</Label>
                <Input placeholder="https://example.com/image.jpg" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Input placeholder="Market Analysis, Trading, etc." />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Blog Management</h1>
          <p className="text-slate-500">Manage your news, insights, and market updates.</p>
        </div>
        <Button onClick={() => setIsEditing(true)} className="bg-primary text-white shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Create New Post
        </Button>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-white border-b border-slate-100 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-bold">All Posts</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <Input placeholder="Search posts..." className="pl-10 h-9" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="text-sm font-bold text-slate-900">{post.title}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold uppercase",
                      post.status === "Published" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    )}>
                      {post.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{post.date}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-primary">
                        <Edit2 size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-500 hover:text-red-500">
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
