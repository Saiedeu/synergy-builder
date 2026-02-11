/**
 * @Customization.tsx Configuration
 * @project: Synergy Asia WLL
 * @author: Saieed Rahamn
 * @Copyright: SidMan Solution 2026
 */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Palette, Home, Layout, MessageCircle } from "lucide-react";

export default function Customization() {
  const [isWhatsAppEnabled, setIsWhatsAppEnabled] = useState(true);
  const [primaryColor, setPrimaryColor] = useState("#0D8ABC");

  const handleSave = () => {
    toast.success("Customization settings saved successfully!");
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Site Customization</h1>
        <p className="text-slate-500">Personalize your website's appearance and functionality.</p>
      </div>

      <Tabs defaultValue="homepage" className="space-y-6">
        <TabsList className="bg-white border border-slate-200 p-1">
          <TabsTrigger value="homepage" className="data-[state=active]:bg-slate-100"><Home size={16} className="mr-2" /> Homepage</TabsTrigger>
          <TabsTrigger value="appearance" className="data-[state=active]:bg-slate-100"><Palette size={16} className="mr-2" /> Appearance</TabsTrigger>
          <TabsTrigger value="widgets" className="data-[state=active]:bg-slate-100"><MessageCircle size={16} className="mr-2" /> Widgets</TabsTrigger>
          <TabsTrigger value="header-footer" className="data-[state=active]:bg-slate-100"><Layout size={16} className="mr-2" /> Header/Footer</TabsTrigger>
        </TabsList>

        <TabsContent value="homepage" className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Hero Section</CardTitle>
              <CardDescription>Edit the text and button of your hero section.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Hero Headline</Label>
                <Input defaultValue="Elevating Business Synergy Across Borders" />
              </div>
              <div className="space-y-2">
                <Label>Hero Subheadline</Label>
                <Input defaultValue="Synergy Asia WLL is your premier partner for strategic trading solutions..." />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                  <Label>Primary Button Text</Label>
                  <Input defaultValue="Our Services" />
                </div>
                <div className="flex-1 space-y-2">
                  <Label>Secondary Button Text</Label>
                  <Input defaultValue="Contact Us" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>Brand Colors</CardTitle>
              <CardDescription>Select colors that match your brand identity.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex gap-2">
                    <Input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} className="w-12 p-1 h-10" />
                    <Input value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input type="color" defaultValue="#EAB308" className="w-12 p-1 h-10" />
                    <Input defaultValue="#EAB308" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Text Color</Label>
                  <div className="flex gap-2">
                    <Input type="color" defaultValue="#0F172A" className="w-12 p-1 h-10" />
                    <Input defaultValue="#0F172A" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="widgets" className="space-y-6">
          <Card className="border-none shadow-sm">
            <CardHeader>
              <CardTitle>WhatsApp Button</CardTitle>
              <CardDescription>Configure the floating WhatsApp contact button.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Enable WhatsApp Button</Label>
                  <p className="text-sm text-slate-500">Show a floating button on all pages.</p>
                </div>
                <Switch checked={isWhatsAppEnabled} onCheckedChange={setIsWhatsAppEnabled} />
              </div>
              {isWhatsAppEnabled && (
                <div className="space-y-2 animate-in slide-in-from-top-2">
                  <Label>WhatsApp Number</Label>
                  <Input placeholder="+973 1750 0000" />
                  <p className="text-xs text-slate-500">Include country code without spaces or symbols.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end pt-4 border-t border-slate-200">
        <Button onClick={handleSave} className="bg-primary text-white">Save All Changes</Button>
      </div>
    </div>
  );
}
