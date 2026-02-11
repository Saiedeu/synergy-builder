/**
 * @SEO.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Search, Share2, Code } from "lucide-react";
import { toast } from "sonner";

export default function AdminSEO() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSave = () => {
    toast.success("SEO settings updated successfully!");
  };

  const handleGenerateSitemap = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Sitemap and robots.txt generated successfully!");
    }, 2000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">SEO & Analytics</h1>
          <p className="text-slate-500">Optimize your site for search engines and track performance.</p>
        </div>
        <Button onClick={handleGenerateSitemap} disabled={isGenerating} variant="outline" className="border-primary text-primary hover:bg-primary/5">
          {isGenerating ? "Generating..." : "Generate Sitemap"}
        </Button>
      </div>

      <Tabs defaultValue="meta" className="space-y-6">
        <TabsList className="bg-white border border-slate-200">
          <TabsTrigger value="meta"><Search size={16} className="mr-2" /> Meta Tags</TabsTrigger>
          <TabsTrigger value="social"><Share2 size={16} className="mr-2" /> Social (OG)</TabsTrigger>
          <TabsTrigger value="analytics"><Code size={16} className="mr-2" /> Tracking Codes</TabsTrigger>
        </TabsList>

        <TabsContent value="meta">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Global Meta Tags</CardTitle>
              <CardDescription>Default titles and descriptions for search engines.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Home Page Title</Label>
                <Input defaultValue="Synergy Asia WLL | Global Trade & Business Consulting" />
              </div>
              <div className="space-y-2">
                <Label>Meta Description</Label>
                <Textarea 
                  defaultValue="Synergy Asia WLL is your premier partner for strategic trading solutions and expert business consulting in Bahrain and beyond."
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Focus Keywords (comma separated)</Label>
                <Input defaultValue="trading, consulting, Asia trade, business growth, Bahrain Financial Harbour" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Open Graph Settings</CardTitle>
              <CardDescription>Control how your site looks when shared on Facebook and Twitter.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>OG Image URL</Label>
                <div className="flex gap-2">
                  <Input defaultValue="https://synergy-asia.wll/assets/og-image.jpg" />
                  <Button variant="outline">Upload</Button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Twitter Username</Label>
                  <Input defaultValue="@SynergyAsiaWLL" />
                </div>
                <div className="space-y-2">
                  <Label>FB App ID</Label>
                  <Input placeholder="Enter App ID" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Verification & Analytics</CardTitle>
              <CardDescription>Insert tracking codes for various webmaster tools.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Google Analytics ID</Label>
                  <Input defaultValue="G-XXXXXXXXXX" />
                </div>
                <div className="space-y-2">
                  <Label>Facebook Pixel ID</Label>
                  <Input placeholder="Enter Pixel ID" />
                </div>
                <div className="space-y-2">
                  <Label>Google Search Console Code</Label>
                  <Input placeholder="Verification meta tag" />
                </div>
                <div className="space-y-2">
                  <Label>Bing Webmaster Code</Label>
                  <Input placeholder="Verification meta tag" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Custom Header Scripts</Label>
                <Textarea 
                  placeholder="<!-- Global site tag (gtag.js) -->"
                  className="font-mono text-xs min-h-[150px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end pt-4 border-t border-slate-200">
        <Button onClick={handleSave} className="bg-primary text-white">Save SEO Settings</Button>
      </div>
    </div>
  );
}
