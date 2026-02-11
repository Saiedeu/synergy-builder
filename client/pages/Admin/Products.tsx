/**
 * @Products.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Save, Trash2, Edit2, Search, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function AdminProducts() {
  const [isEditing, setIsEditing] = useState(false);
  const [productName, setProductName] = useState("");

  const handleSave = () => {
    toast.success("Product saved successfully!");
    setIsEditing(false);
  };

  const products = [
    { id: 1, name: "Premium Thai Jasmine Rice", category: "Food & Beverage", status: "In Stock" },
    { id: 2, name: "Organic Coconut Water", category: "Healthy Beverages", status: "In Stock" },
    { id: 3, name: "Artisan Wood Carvings", category: "Lifestyle & Decor", status: "Low Stock" },
    { id: 4, name: "Sustainable Bamboo Fabric", category: "Fashion & Lifestyle", status: "In Stock" },
  ];

  if (isEditing) {
    return (
      <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Add New Product</h1>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
            <Button onClick={handleSave} className="bg-primary text-white">
              <Save className="mr-2 h-4 w-4" /> Save Product
            </Button>
          </div>
        </div>

        <Card className="border-none shadow-sm">
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input 
                id="name" 
                placeholder="Enter product name..." 
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="font-bold"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Category</Label>
                <Input placeholder="Food, Fashion, Agri-Tech, etc." />
              </div>
              <div className="space-y-2">
                <Label>Price / Pricing Note</Label>
                <Input placeholder="e.g., $10.00 or Inquire for Pricing" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <textarea 
                className="flex min-h-[100px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter detailed product description..."
              ></textarea>
            </div>
            
            <div className="space-y-2">
              <Label>Featured Image URL</Label>
              <Input placeholder="https://example.com/image.jpg" />
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
          <h1 className="text-2xl font-bold text-slate-900">Product Management</h1>
          <p className="text-slate-500">Manage the product showcase for your website.</p>
        </div>
        <Button onClick={() => setIsEditing(true)} className="bg-primary text-white shadow-lg shadow-primary/20">
          <Plus className="mr-2 h-4 w-4" /> Add New Product
        </Button>
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <CardHeader className="bg-white border-b border-slate-100 flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-bold">All Products</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <Input placeholder="Search products..." className="pl-10 h-9" />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 text-[10px] uppercase tracking-wider text-slate-500 font-bold border-b border-slate-100">
                <th className="px-6 py-4">Product Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <ShoppingBag size={16} className="text-slate-400" />
                      <div className="text-sm font-bold text-slate-900">{product.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-xs text-slate-500">{product.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      product.status === "In Stock" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                    }`}>
                      {product.status}
                    </span>
                  </td>
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
